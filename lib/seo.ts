import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Yuki` : 'Dashboard | Yuki'
  const description =
    params.description ??
    'A full-stack e-commerce platform built with Turborepo, Next.js, TailwindCSS, Prisma, and tRPC. It is a modern, fast, and secure platform that allows you to create your own e-commerce store with ease. Yuki is built with the latest technologies and best practices to ensure that your store is fast, secure, and scalable.'
  const images = params.images ?? ['/api/og']
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    creator: 'tiesen243',
    category: 'e-commerce',
    applicationName: 'Yuki',
    alternates: { canonical: url },
    facebook: { appId: '523462826928110' },
    authors: { name: 'tiesen243', url: 'https://tiesen.id.vn' },
    openGraph: { url, images, type: 'website', siteName: 'Yuki' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    keywords: ['e-commerce', 'turborepo', 'next.js', 'tailwindcss', 'prisma', 'trpc'],
    icons: { icon: '/favicon.ico' },
  }
}
