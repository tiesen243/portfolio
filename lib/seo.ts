import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { type Metadata } from 'next'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Tiesen` : 'Tiesen'
  const description =
    params.description ??
    "I'm a passionate weeb developer using Next.js to create engaging websites. Anime lover, inspired by Japanese culture. Let's build something amazing together!"
  const images = params.images ?? ['/api/og']
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    abstract: description,
    category: 'Portfolio',
    applicationName: 'Tiesen',
    alternates: { canonical: url },
    authors: { name: 'Tran Tien', url: getBaseUrl() },
    openGraph: { url, images, type: 'website', siteName: 'Tiesen' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    keywords: ['Tiesen', 'tiesen243', 'Tran Tien', 'Trần Tiến', 'portfolio', 'developer', 'blog'],
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}
