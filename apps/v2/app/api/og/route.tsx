import type { NextRequest } from 'next/server'

import { ImageResponse } from 'next/og'

import { OpenGraph } from '@/components/ui/open-graph'
import manifest from '@/public/manifest.json'

export const GET = (request: NextRequest) => {
  const { searchParams, hostname } = new URL(request.url)
  const title = searchParams.get('title') ?? manifest.name
  const description = searchParams.get('description') ?? manifest.description
  const image = searchParams.get('image') ?? undefined

  const logoUrl = new URL('/icon-512.png', request.url).toString()

  return new ImageResponse(
    <OpenGraph
      // oxlint-disable-next-line next/no-img-element
      logo={<img src={logoUrl} alt={title} />}
      appName={manifest.name}
      title={title}
      description={description}
      image={image}
      caption={hostname}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
