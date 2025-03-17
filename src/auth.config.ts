/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn as login } from "@/services/apis/auth";
import xior, { XiorError, XiorResponse } from "xior";
import { jwtDecode } from "jwt-decode";

interface RefreshTokenResType {
  accessToken: string;
  refreshToken: string;
}

let refreshTokenPromise: Promise<XiorResponse<RefreshTokenResType>> | null = null;

export const authConfig = {
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
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
        console.log(">>> Token still valid");
        return token;
      } else {
        try {
          if (!token.refreshToken) {
            throw new Error("Missing Token");
          }
          console.log("Token expired");
          if (!refreshTokenPromise) {
            console.log("Set refresh token promise");
            refreshTokenPromise = xior.post<RefreshTokenResType>(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
              { token: token.refreshToken },
              { cache: "no-store" },
            );
          }
          const { data } = await refreshTokenPromise
            .then((res) => {
              console.log("Refresh token success");
              return res;
            })
            .finally(() => (refreshTokenPromise = null));

          return {
            ...token,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
        } catch (error) {
          if (error instanceof XiorError) {
            token.error = error.response?.data.message || "Session expired. Please login again.";
          }
          if (error instanceof Error && !token.error) {
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
} satisfies NextAuthConfig;
