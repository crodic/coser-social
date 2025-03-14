import { NextResponse } from "next/server";
import { auth } from "@/auth";

const isPublicRoute = ["/", "/profile", "/posts"];
const isAuthRoute = ["/auth/login", "/auth/register", "/auth/verify-account"];
const isProtectedRoute = ["/dashboard", "/dashboard/events", "/dashboard/teams"];

export default auth((req) => {
  const response = NextResponse.next();
  return response;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
