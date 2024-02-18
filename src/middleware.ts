import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const csrfToken = uuidv4()

  const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5d

  response.cookies.set({
    name: 'csrfToken',
    value: csrfToken,
    httpOnly: true,
    secure: true,
    maxAge: expiresIn,
  })

  return response
}
