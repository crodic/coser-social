/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  //? return session on session callback and getSession & useSession
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      role: "USER" | "SUPER ADMIN" | "EVENT PLANNER";
    };
    error?: "RefreshTokenError";
  }

  //? return user on authorized function
  interface User {
    accessToken: string;
    refreshToken: string;
    role: "USER" | "SUPER ADMIN" | "EVENT PLANNER";
  }
}

declare module "next-auth/jwt" {
  //? return jwt on jwt callback
  interface JWT {
    accessToken: string;
    refreshToken: string;
    id: string;
    email: string | undefined | null;
    name: string | undefined | null;
    role: "USER" | "SUPER ADMIN" | "EVENT PLANNER";
    error?: "RefreshTokenError";
  }
}
