import type { Metadata } from 'next'
import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  url?: string
  image?: OpenGraph['images']
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Tiesen` : 'Tiesen'
  const description =
    params.description ??
    "I'm a weeb developer who loves to build many stuff. I enjoy working with TypeScript, Next.js, tRPC, and ElysiaJS. I'm also a fan of anime, manga, and light novels."
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    applicationName: 'Tiesen',
    title,
    description,
    authors: { name: 'Tiesen', url: getBaseUrl() },
    creator: '@tiesen243',
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    openGraph: {
      url,
      type: 'profile',
      images: params.image,
      locale: 'vi_VN',
      siteName: 'Tiesen',
      username: 'tiesen243',
      firstName: 'Tiến',
      lastName: 'Trần',
      emails: 'ttien56906@gmail.com',
    },
    twitter: { card: 'summary_large_image', creator: '@tiesen243' },
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
    alternates: { canonical: url },
  }
}
