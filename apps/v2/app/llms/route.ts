import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { getLLMFull, getPages } from '@/lib/source'

export async function GET(_req: NextRequest, _ctx: RouteContext<'/llms'>) {
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])

  return new NextResponse(getLLMFull([...blogs, ...projects]), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}
