/* eslint-disable @next/next/no-img-element */

import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { createMetadata } from '@/lib/metadata'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const defaultMetadata = createMetadata()

    const appName = defaultMetadata.applicationName ?? 'Tiesen'
    const title = searchParams.get('title') ?? defaultMetadata.title
    const description =
      searchParams.get('description') ?? defaultMetadata.description
    const logoUrl = `${defaultMetadata.metadataBase?.toString()}/assets/images/logo.svg`
    const logoTypeUrl = `${defaultMetadata.metadataBase?.toString()}/assets/images/tiesen.png`

    const [geistRegular, geistMedium, geistBold] = await Promise.all([
      getGeistFont(),
      getGeistMediumFont(),
      getGeistBoldFont(),
    ])

    const isUwU = searchParams.get('uwu') === 'true'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#000',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
            fontFamily: 'Geist, sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48',
                height: '48',
                backgroundColor: '#fff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={logoUrl}
                alt="Logo"
                style={{
                  width: '80%',
                  height: '80%',
                }}
              />
            </div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: '500',
                color: '#fff',
                fontFamily: 'GeistMedium, sans-serif',
              }}
            >
              {appName}
            </div>
          </div>

          {isUwU ? (
            <img src={logoTypeUrl} alt="UwU Logo" />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '800px',
              }}
            >
              <h1
                style={{
                  fontSize: '72px',
                  fontWeight: '700',
                  color: '#fff',
                  lineHeight: '1.1',
                  margin: '0',
                  background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  fontFamily: 'GeistBold, sans-serif',
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  fontSize: '28px',
                  color: '#888',
                  lineHeight: '1.4',
                  margin: '0',
                  fontWeight: '400',
                  fontFamily: 'Geist, sans-serif',
                }}
              >
                {description}
              </p>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #0070f3, #00d9ff)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                fontSize: '16px',
                color: '#666',
                fontWeight: '500',
                fontFamily: 'GeistMedium, sans-serif',
              }}
            >
              {new URL(request.url).hostname}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Geist',
            data: geistRegular,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'GeistMedium',
            data: geistMedium,
            style: 'normal',
            weight: 500,
          },
          {
            name: 'GeistBold',
            data: geistBold,
            style: 'normal',
            weight: 700,
          },
        ],
      },
    )
  } catch (e: unknown) {
    console.error(e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

async function getGeistFont() {
  const response = await fetch(
    new URL('../../../public/assets/fonts/Geist-Regular.ttf', import.meta.url),
  )
  return response.arrayBuffer()
}

async function getGeistMediumFont() {
  const response = await fetch(
    new URL('../../../public/assets/fonts/Geist-Medium.ttf', import.meta.url),
  )
  return response.arrayBuffer()
}

async function getGeistBoldFont() {
  const response = await fetch(
    new URL('../../../public/assets/fonts/Geist-Bold.ttf', import.meta.url),
  )
  return response.arrayBuffer()
}
