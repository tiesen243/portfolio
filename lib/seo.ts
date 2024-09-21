import { type Metadata } from 'next'
import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Tiesen` : 'Tiesen'
  const description = params.description ?? 'Weeb devalowopu with a love for all things anime'
  const images = params.images ?? ['/api/og?hero=true']
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    abstract: description,
    category: 'Portfolio',
    applicationName: 'Tiesen',
    alternates: { canonical: url },
    facebook: { appId: '523462826928110' },
    authors: { name: 'Tran Tien', url: getBaseUrl() },
    openGraph: { url, images, type: 'website', siteName: 'Tiesen' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    keywords: ['Tiesen', 'tiesen243', 'Tran Tien', 'Trần Tiến', 'portfolio', 'developer', 'blog'],
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}
