import type { Metadata } from 'next'
import { createMetadataImage } from 'fumadocs-core/server'
import * as icons from 'lucide-react'

import { env } from '@/env'
import { source } from '@/lib/source'

export const metadataImage = createMetadataImage({
  imageRoute: '/api/og',
  filename: 'og.png',
  source,
})

export const seo = (params: {
  title?: string
  description?: string
  images?: string[]
  url?: string
}): Metadata => {
  const siteName = 'Tiesen'
  const title = params.title ? `Tiesen | ${params.title}` : 'Tiesen'
  const description = params.description ?? 'Weeb devalowopu with a love for all things anime'
  const images = [...(params.images ?? []), '/api/og']
  const url = params.url ? `${getBaseUrl()}${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    category: 'Portfolio',
    abstract: description,
    applicationName: siteName,
    alternates: { canonical: url },
    facebook: { appId: '523462826928110' },
    authors: { name: 'Tran Tien', url: getBaseUrl() },
    openGraph: { images, url, siteName, type: 'website' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    keywords: ['Tiesen', 'tiesen243', 'Tran Tien', 'Trần Tiến', 'portfolio', 'developer', 'blog'],
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  // eslint-disable-next-line no-restricted-properties
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const socials = [
  {
    label: 'Github',
    href: 'https://github.com/tiesen243',
    icon: icons.GithubIcon,
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/tiesen243/',
    icon: icons.LinkedinIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tiesen243.tsx/',
    icon: icons.FacebookIcon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/tiesen243',
    icon: icons.TwitterIcon,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@tiesen243',
    icon: icons.YoutubeIcon,
  },
  {
    label: 'Gravatar',
    href: 'https://gravatar.com/tiesen243',
    icon: icons.ListCollapseIcon,
  },
]
