import type { Metadata } from 'next'

import { getBaseUrl } from '@/lib/utils'

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
    keywords: [
      'Tiesen',
      'tiesen243',
      'Tran Tien',
      'Trần Tiến',
      ...(override.keywords
        ? typeof override.keywords === 'string'
          ? [override.keywords]
          : override.keywords
        : []),
    ],
    openGraph: {
      url: url,
      images: [...images, { url: '/api/og?uwu=true' }],
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
