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
  const dotBg = {
    backgroundImage:
      'radial-gradient(circle at 25px 25px, #2F3947 2%, transparent 0%), radial-gradient(circle at 75px 75px, #2F3947 2%, transparent 0%)',
    backgroundSize: '100px 100px',
  }

  const title = params.title ?? siteConfig.meta.applicationName ?? ''
  const description = params.desc ?? siteConfig.meta.description

  return new ImageResponse(
    (
      <div
        tw="flex flex-col gap-4 w-full h-full text-white p-20 justify-center bg-black"
        style={dotBg}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/tiesen243/portfolio/main/public/images/tiesen.png"
          alt="Tiesen"
          tw="w-3/4 mx-auto aspect-video"
        />

        <div tw="flex flex-col items-start w-full">
          <h2 tw="text-4xl capitalize">{title}</h2>
          <p tw="text-2xl mt-4">{description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
