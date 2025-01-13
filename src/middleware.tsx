import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  // const isProtectedRoute = url.pathname.startsWith('/account'); 

  const protectedRoutes = ['/account', '/pages/addscrap',];

  const isProtectedRoute = protectedRoutes.some((route) =>
    url.pathname.startsWith(route)
  );
  if (isProtectedRoute) {
    const token = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE_PREFIX as string);


    if (!token) {
      return NextResponse.redirect(new URL('/pages/auth/login', url));
    }

    // Optionally, you can validate the token here using JWT decoding
    // For example, you can use jwt.verify() to validate the token

    try {
      // You can add additional logic to validate the token if necessary
      // jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      // If the token is invalid, redirect to login page
      return NextResponse.redirect(new URL('/pages/auth/login', url));
    }
  }

  return NextResponse.next();
}

// This config specifies which routes the middleware will run on
export const config = {
  matcher: ['/account/:path*','/pages/addscrap/:path*'], // Matches "/account" and all sub-paths
};
