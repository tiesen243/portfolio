import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { getBaseUrl } from '@/lib/metadata'

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') ?? 'Tiesen'
  const description =
    searchParams.get('description') ??
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const uwu = searchParams.get('uwu') ?? false

  if (uwu)
    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'Geist',
            backgroundColor: '#0c0c0c',
            backgroundImage: `linear-gradient(to top right, #a96249, transparent)`,
          }}
          tw="flex flex-col items-center justify-center w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${getBaseUrl()}/assets/tiesen.png`} tw="w-4/5" />
        </div>
      ),
      { width: 1200, height: 630 },
    )

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Geist',
          backgroundColor: '#0c0c0c',
          backgroundImage: `linear-gradient(to top right, #a96249, transparent)`,
        }}
        tw="flex flex-col w-full h-full p-12 text-white"
      >
        <div tw="flex flex-row items-center mb-3 text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${getBaseUrl()}/assets/logo.svg`}
            tw="w-20 h-20 mr-4"
            style={{ filter: 'invert(1)' }}
          />

          <p style={{ fontSize: '56px', fontWeight: 600 }}>Tiesen</p>
        </div>

        <p
          style={{
            fontWeight: 800,
            fontSize: '48px',
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: '32px', color: 'rgba(240,240,240,0.8)' }}>
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
