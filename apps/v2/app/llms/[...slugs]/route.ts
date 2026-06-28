import type { NextRequest } from 'next/server'

import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'

import { getLLMText, getPage, getPages } from '@/lib/source'

export async function GET(
  _req: NextRequest,
  { params }: RouteContext<'/llms/[...slugs]'>
) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) return notFound()

  return new NextResponse(getLLMText(page), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

export async function generateStaticParams() {
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])
  const pages = [...blogs, ...projects]

  return pages.map((page) => ({
    slugs: page.url.split('/').filter(Boolean),
  }))
}
