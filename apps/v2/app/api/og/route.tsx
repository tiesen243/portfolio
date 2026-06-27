import type { NextRequest } from 'next/server'

import { ImageResponse } from 'next/og'

import { OpenGraph } from '@/components/ui/open-graph'
import { appName } from '@/lib/contants'

export const GET = (request: NextRequest) => {
  const { searchParams, hostname } = new URL(request.url)
  const title = searchParams.get('title') ?? ''
  const description = searchParams.get('description') ?? ''
  let image = searchParams.get('image') ?? undefined
  if (image && !image.startsWith('http'))
    image = new URL(image, request.url).toString()

  const logoUrl = new URL('/icon-512.png', request.url).toString()

  return new ImageResponse(
    <OpenGraph
      // oxlint-disable-next-line next/no-img-element
      logo={<img src={logoUrl} alt={title} />}
      appName={appName}
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
