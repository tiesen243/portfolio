// oxlint-disable no-img-element

import type { NextRequest } from 'next/server'

import { ImageResponse } from 'next/og'

import { createMetadata } from '@/lib/metadata'

export function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const defaultMetadata = createMetadata()

    const appName = defaultMetadata.applicationName ?? ''
    const theme = searchParams.get('theme') ?? 'dark'
    const isUwU = searchParams.get('uwu') === 'true'

    const title = searchParams.get('title') ?? defaultMetadata.title ?? ''
    const description =
      searchParams.get('description') ?? defaultMetadata.description ?? ''
    const image = searchParams.get('image') ?? ''
    const logoUrl =
      theme === 'dark'
        ? `${request.nextUrl.origin}/web-app-manifest-512x512.png`
        : `${request.nextUrl.origin}/web-app-manifest-512x512-dark.png`

    const backgroundColor = theme === 'dark' ? '#000000' : '#fafafa'
    const foregroundColor = theme === 'dark' ? '#ffffff' : '#000000'
    const primaryColor = theme === 'dark' ? '#dbe6f6' : '#14185a'

    return new ImageResponse(
      <div
        style={{
          alignItems: 'flex-start',
          backgroundColor,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',

          height: '100%',
          justifyContent: 'space-between',
          padding: '32px 40px',

          width: '100%',
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
          <img
            src={logoUrl}
            alt='Logo'
            style={{
              borderRadius: '8px',
              width: '48px',
              height: '48px',
              objectFit: 'cover',
            }}
          />

          <h1
            style={{
              color: foregroundColor,
              fontSize: '28px',
              fontWeight: '500',
            }}
          >
            {appName}
          </h1>
        </div>

        {isUwU ? (
          <img
            src={`${request.nextUrl.origin}/assets/logotype.png`}
            alt='UwU Logotype'
            style={{
              margin: '0 auto',
              objectFit: 'contain',
              width: '80%',
            }}
          />
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              gap: '32px',

              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',

                height: '100%',
                width: image ? '65%' : '100%',
              }}
            >
              <h2
                style={{
                  color: foregroundColor,
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.1',

                  margin: '0 0 24px 0',
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  color: foregroundColor,
                  fontSize: '24px',
                  fontWeight: '400',
                  height: '100%',

                  lineHeight: '1.2',
                  margin: 0,
                  opacity: 0.75,
                  overflow: 'hidden',
                }}
              >
                {description}
              </p>
            </div>
            {image && (
              <img
                src={image}
                alt={title}
                style={{
                  aspectRatio: '1 / 1',
                  border: `0.5px solid ${foregroundColor}`,
                  borderRadius: '16px',
                  flex: 1,
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        )}

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',

            width: '100%',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
            }}
          >
            <hr
              style={{
                background: `linear-gradient(90deg, ${primaryColor}, ${backgroundColor})`,
                borderRadius: '2px',
                height: '4px',

                width: '60px',
              }}
            />
            <p
              style={{
                color: foregroundColor,
                fontSize: '16px',
                fontWeight: '500',

                margin: 0,
                opacity: 0.75,
              }}
            >
              {new URL(request.url).hostname}
            </p>
          </div>
        </div>
      </div>,
      { width: 1200, height: 630 },
    )
  } catch (error) {
    console.error(error)
    return new Response(`Failed to generate the image`, { status: 500 })
  }
}
