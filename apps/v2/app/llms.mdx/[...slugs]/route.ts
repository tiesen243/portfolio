import type { NextRequest } from 'next/server'

import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'

import { getLLMText, getPage } from '@/lib/source'
import { getBaseUrl } from '@/lib/utils'

export async function GET(
  req: NextRequest,
  { params }: RouteContext<'/llms.mdx/[...slugs]'>
) {
  const { slugs } = await params
  const { searchParams } = new URL(req.url)

  const page = await getPage(slugs)
  if (!page) return notFound()

  const open = searchParams.get('open')
  if (!open || open === null)
    return new NextResponse(getLLMText(page), {
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })

  const config = PROVIDERS[open]
  if (!config) return notFound()

  const prompt = encodeURIComponent(
    `Read ${getBaseUrl()}/llms.mdx${page.url}, I want to ask you some questions about it.`
  )

  return NextResponse.redirect(
    `${config.url}?${config.key}=${prompt}&${config.opts.join('&')}`
  )
}

const PROVIDERS: Record<string, { url: string; key: string; opts: string[] }> =
  {
    chatgpt: {
      url: 'https://chatgpt.com',
      key: 'prompt',
      opts: ['hints=search'],
    },
    claude: {
      url: 'https://claude.ai',
      key: 'q',
      opts: [],
    },
    cursor: {
      url: 'https://cursor.com/link/prompt',
      key: 'text',
      opts: [],
    },
    scira: {
      url: 'https://scira.ai',
      key: 'q',
      opts: [],
    },
    gemini: {
      url: 'https://aistudio.google.com/live',
      key: 'prompt',
      opts: [],
    },
  }
