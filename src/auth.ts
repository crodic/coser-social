/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn as login, refreshTokenApi } from "@/services/apis/auth";
import { XiorError } from "xior";
import { jwtDecode } from "jwt-decode";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        rememberMe: { label: "Remember Me", type: "checkbox" },
      },
      authorize: async (credentials) => {
        credentials.rememberMe = Boolean(credentials.rememberMe);
        const email = credentials.email as string;
        const password = credentials.password as string;
        const rememberMe = credentials.rememberMe as boolean;

        try {
          const res = await login({ email, password, rememberMe });
          const {
            metadata: { accessToken, refreshToken },
            payload,
          } = res;

          const userJwt: User = {
            id: payload._id,
            email: payload.email,
            name: payload.displayName,
            role: payload.role,
            image: payload.avatar,
            accessToken,
            refreshToken,
          };

          return userJwt;
        } catch (error: any) {
          if (error instanceof XiorError) {
            throw new Error(error.response?.data.message);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    //! Valid when using `export { auth as middleware } from "@/auth"`
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      if ((pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register")) && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return !!auth;
    },
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === "update") {
        return {
          ...token,
          ...session,
        };
      }

      if (user) {
        token.id = user.id as string;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.role;
        return token;
      } else if (Date.now() < (jwtDecode(token.accessToken).exp as number) * 1000) {
        return token;
      } else {
        if (!token.refreshToken) {
          throw new Error("Missing Token");
        }

        try {
          const res = await refreshTokenApi(token.refreshToken);
          return {
            ...token,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          };
        } catch (error) {
          if (error instanceof XiorError) {
            token.error = error.response?.data.message || "Session expired. Please login again.";
          }
          if (error instanceof Error) {
            token.error = error.message || "Session expired. Please login again.";
          }
          return token;
        }
      }
    },
    session: async (params) => {
      const { token, session } = params;

      session.userId = token.id;
      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;
      session.user.error = token.error;

      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
