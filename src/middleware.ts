import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
import { getToken } from 'next-auth/jwt';
import { NextURL } from 'next/dist/server/web/next-url';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/signin'

  const token = await getToken({req:request})
  const url = request.nextUrl

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/signin',
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}