import type { Metadata as NextMetadata } from 'next'

import { getBaseUrl } from '@/lib/utils'

export interface Metadata extends NextMetadata {
  title?: string
  keywords?: string[]
}

export function createMetadata(override: Metadata = {}): Metadata {
  const siteName = 'Tiesen'
  const baseUrl = getBaseUrl()

  const title = override.title ? `${override.title} | ${siteName}` : siteName
  const description =
    'A personal portfolio and blog by Tiesen, showcasing projects, thoughts, and more.'
  const url = override.openGraph?.url
    ? `${baseUrl}${override.openGraph.url}`
    : baseUrl

  const images = [
    { url: '/api/og?uwu=true', alt: 'Open Graph Image' },
    ...(override.openGraph?.images
      ? Array.isArray(override.openGraph.images)
        ? override.openGraph.images
        : [override.openGraph.images]
      : []),
  ]

  return {
    ...override,
    metadataBase: new URL(baseUrl),
    applicationName: siteName,
    title,
    description,
    keywords: [
      'Tiesen',
      'tiesen243',
      'portfolio',
      'blog',
      'website',
      ...(override.keywords ?? []),
    ],
    openGraph: {
      ...override.openGraph,
      title,
      description,
      siteName,
      url,
      images,
    },
    twitter: {
      ...override.twitter,
      card: 'summary_large_image',
      creatorId: '@tiesen243',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
    },
    facebook: { appId: '625246206988524' },
    verification: { google: 'dfsGgsTDdq4IwdTzb4p69XHyrPXvzFNmUMRxpuV4M8Q' },
    manifest: `${baseUrl}/manifest.webmanifest`,
    alternates: { canonical: url, ...override.alternates },
  }
}
