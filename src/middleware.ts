import { NextResponse } from "next/server";
import { auth } from "@/auth";

// const isPublicRoute = ["/", "/profile", "/posts"];
const isAuthRoute = ["/auth/login", "/auth/register", "/auth/verify-account"];
// const isProtectedRoute = ["/dashboard", "/dashboard/events", "/dashboard/teams"];

export default auth((req) => {});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
