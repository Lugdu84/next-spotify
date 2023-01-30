import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  // Allow the requests if the following is true...
  // )1 Its a request for next-auth session & proviider fetching
  // 2) The token exists
  const { pathname } = req.nextUrl
  console.log(pathname)
  console.log(token)

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }
  // Redirect them to login if they don't have token and are requesting a protected route
  if (!token && pathname !== '/login') {
    // const url = new URL('login', 'http://localhost:3000')
    // console.log('url', url.host)
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/',
}
