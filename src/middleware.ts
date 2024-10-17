import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const status = request.cookies.get("status")?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard/generate", request.url));
  }

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/auth/signup", request.url));
  }

  if (pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(new URL("/dashboard/generate", request.url));
  }

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/signup", request.url));
  }

  return NextResponse.next();
}
