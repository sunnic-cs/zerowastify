import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register" || path === "/" || path === "/our-cause" || path === "/leaderboards";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/waste-bin-status", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/our-cause", "/login", "/register","/leaderboards","/waste-bin-status","rewards","/our-cause"],
};
