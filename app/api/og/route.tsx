import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

import { siteConfig } from '@/lib/site'

interface Props {
  params: {
    title?: string
    desc?: string
  }
}

export const runtime = 'edge'

export const GET = async (_: NextRequest, { params }: Props): Promise<ImageResponse> => {
  const title = params.title ?? ''
  const description = params.desc ?? siteConfig.meta.description

  return new ImageResponse(
    (
      <div tw="relative w-full h-full px-20 py-28 flex flex-col items-center justify-end bg-black text-white">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Tiesen"
          src="https://raw.githubusercontent.com/tiesen243/tiesen243/main/.github/tiesen.png"
          tw="absolute w-2/5 top-28 mx-auto"
        />

        <h2 tw="text-6xl text-center capitalize">{title}</h2>
        <p tw="text-2xl text-center">{description}</p>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
