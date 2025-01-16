import type { Metadata } from 'next/types'
import { createMetadataImage } from 'fumadocs-core/server'

import { env } from '@/env'
import { source } from '@/lib/source'

export const createMetadata = (
  override: Omit<Metadata, 'title'> & { title?: string },
): Metadata => {
  const siteName = 'Tiesen'
  const description = "I'm Tran Tien, a Weeb Developer who loves to code and watch anime."
  const url = override.openGraph?.url
    ? `${getBaseUrl()}${override.openGraph.url}`
    : getBaseUrl()
  const images = Array.isArray(override.openGraph?.images)
    ? override.openGraph.images
    : []

  return {
    ...override,
    metadataBase: new URL(getBaseUrl()),
    title: override.title ? `${override.title} | ${siteName}` : siteName,
    description: override.description ?? description,
    alternates: { canonical: url },
    facebook: { appId: '523462826928110' },
    manifest: `${getBaseUrl()}/manifest.webmanifest`,
    keywords: ['Tiesen', 'tiesen243', 'Tran Tien', 'Trần Tiến'],
    openGraph: {
      url: url,
      images: [...images, { url: '/api/og' }],
      siteName,
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tiesen243',
      ...override.twitter,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  }
}

export const metadataImage = createMetadataImage({
  source,
  imageRoute: '/api/og',
})

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  // eslint-disable-next-line no-restricted-properties
  return `http://localhost:${process.env.PORT ?? 3000}`
}
