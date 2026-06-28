import type { NextRequest, ProxyConfig } from 'next/server'

import { NextResponse } from 'next/server'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.endsWith('.mdx')) {
    const cleanPath = pathname.replace(/\.mdx$/, '')
    const newPathname = `/llms${cleanPath}`

    const newUrl = request.nextUrl.clone()
    newUrl.pathname = newPathname

    return NextResponse.rewrite(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/blogs/:path*(\\.mdx)', '/projects/:path*(\\.mdx)'],
} satisfies ProxyConfig
