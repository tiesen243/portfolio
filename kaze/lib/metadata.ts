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
    override.description ??
    'A personal portfolio and blog by Tiesen, showcasing projects, thoughts, and more.'
  const url = override.openGraph?.url
    ? `${baseUrl}${override.openGraph.url}`
    : baseUrl

  const images = [
    // oxlint-disable-next-line no-nested-ternary
    ...(override.openGraph?.images
      ? // oxlint-disable-next-line unicorn/no-nested-ternary
        Array.isArray(override.openGraph.images)
        ? override.openGraph.images
        : [override.openGraph.images]
      : []),
    { alt: 'Open Graph Image', url: '/api/og?uwu=true' },
  ]

  return {
    ...override,
    metadataBase: new URL(baseUrl),
    applicationName: siteName,
    title,
    description,
    authors: { name: 'Tiesen', url: 'https://tiesen.id.vn' },
    keywords: [
      'tiesen',
      'tiesen243',
      'portfolio',
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
      apple: '/apple-touch-icon.png',
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    facebook: { appId: '625246206988524' },
    verification: { google: 'dfsGgsTDdq4IwdTzb4p69XHyrPXvzFNmUMRxpuV4M8Q' },
    other: { 'dmca-site-verification': 'OWtVUlcrSVcreXYvOHpqcytheE0xQT090' },
    manifest: `${baseUrl}/site.webmanifest`,
    alternates: { canonical: url, ...override.alternates },
  }
}
