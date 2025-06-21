import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { createMetadata } from '@/lib/metadata'

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const meta = createMetadata()
  const title = searchParams.get('title') ?? ''
  const description = searchParams.get('description') ?? meta.description
  const logo = `${meta.metadataBase}/assets/images/logo.svg`

  if (searchParams.get('uwu'))
    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full flex-col p-16"
          style={{
            backgroundColor: '#0c0c0c',
            backgroundImage: `linear-gradient(to top right, #a96249, transparent)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${meta.metadataBase}/assets/images/tiesen.png`}
            alt="Tiesen Logo"
          />
        </div>
      ),
      { width: 1200, height: 630 },
    )

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col p-16"
        style={{
          backgroundColor: '#0c0c0c',
          backgroundImage: `linear-gradient(to top right, #a96249, transparent)`,
        }}
      >
        <div tw="mb-8 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt="Tiesen Logo"
            tw="mr-4 h-16 w-16"
            style={{ filter: 'invert(1)' }}
          />
          <h1
            tw="text-white"
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {meta.applicationName}
          </h1>
        </div>

        <h2
          tw="mb-4 text-white"
          style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
        >
          {title}
        </h2>
        <p tw="text-white" style={{ fontSize: '1.5rem' }}>
          {description}
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
