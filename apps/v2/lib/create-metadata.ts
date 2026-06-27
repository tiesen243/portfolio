import type { Metadata as NextMetadata } from 'next'

import { getBaseUrl } from '@/lib/utils'
import manifest from '@/public/manifest.json'

export interface Metadata extends NextMetadata {
  title?: string
  keywords?: string[]
}

export function createMetadata(override: Metadata = {}): Metadata {
  const baseUrl = getBaseUrl()

  const title = override.title
    ? `${override.title} | ${manifest.name}`
    : manifest.name
  const description = override.description ?? manifest.description
  const url = override.openGraph?.url
    ? `${baseUrl}${override.openGraph.url}`
    : baseUrl

  return {
    ...override,
    metadataBase: new URL(baseUrl),
    applicationName: manifest.name,
    title,
    description,
    authors: { name: 'Tiesen', url: getBaseUrl() },
    keywords: [
      'tiesen',
      'tiesen243',
      'Tran Tien',
      'portfolio',
      'developer',
      'blog',
      ...(override.keywords ?? []),
    ],
    openGraph: {
      ...override.openGraph,
      title,
      description,
      siteName: manifest.name,
      url,
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
    manifest: `${baseUrl}/manifest.json`,
    verification: { google: 'dfsGgsTDdq4IwdTzb4p69XHyrPXvzFNmUMRxpuV4M8Q' },
    other: { 'dmca-site-verification': 'OWtVUlcrSVcreXYvOHpqcytheE0xQT090' },
    alternates: { canonical: url, ...override.alternates },
  }
}
