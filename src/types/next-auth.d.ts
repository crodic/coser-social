/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  //? return session on session callback and getSession
  interface Session {
    user: {
      id: number;
      accessToken: string;
      refreshToken: string;
      role: "USER" | "SUPER ADMIN" | "EVENT PLANNER";
      error?: string;
    };
  }

  //? return user on authorized function
  interface User {
    id: number;
    username: string;
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
    id?: string | number;
    role: "USER" | "SUPER ADMIN" | "EVENT PLANNER";
    error?: string;
  }
}
