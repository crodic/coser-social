/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./validations/auth.schema";
import { signIn as login } from "@/services/apis/auth";
import { XiorError } from "xior";

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
        const values = loginSchema.safeParse(credentials);
        if (!values.success) throw new Error("Invalid credentials");
        const { email, password, rememberMe } = values.data;

        try {
          const res = await login({ email, password, rememberMe });
          const {
            metadata: { accessToken, refreshToken },
            payload,
          } = res;

          const userJwt = {
            id: payload._id,
            username: payload.username,
            role: payload.role,
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
    authorized: ({ auth }) => !!auth,
    jwt: ({ token, user }) => ({ ...token, ...user }),
  },
  pages: {
    signIn: "/auth/login",
  },
});
