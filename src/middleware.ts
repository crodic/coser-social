import { auth } from "@/auth";
import { NextResponse } from "next/server";

const isPublicRoute = ["/"];
const isAuthRoute = ["/auth/login", "/auth/register", "/auth/verify-account"];
const isProtectedRoute = ["/settings"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  if (isPublicRoute.includes(pathname) || pathname.startsWith("/profile")) {
    return NextResponse.next();
  }

  if (isAuthRoute.includes(pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isProtectedRoute.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
