import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

// eslint-disable-next-line consistent-return
export default async function middleware(req: NextRequest) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  // Allow the requests if the following is true...
  // )1 Its a request for next-auth session & proviider fetching
  // 2) The token exists
  const { pathname } = req.nextUrl

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }
  // Redirect them to login if they don't have token and are requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/',
}
