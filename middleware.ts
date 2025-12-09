import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance"; 
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
