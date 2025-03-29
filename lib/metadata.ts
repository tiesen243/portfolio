import type { Metadata as NextMetadata } from 'next'

type Metadata = Omit<NextMetadata, 'title' | 'keywords'> & {
  title: string
  keywords: string[]
}

export const createMetadata = (override: Partial<Metadata> = {}): Metadata => {
  const siteName = 'Tiesen'
  const title = override.title ? `${override.title} | ${siteName}` : siteName
  const description =
    override.description ??
    `I'm Tiesen, a web developer specializing in Next.js. Passionate about creating efficient web applications and anime enthusiast.`
  const url = `${getBaseUrl()}${override.openGraph?.url ?? ''}`

  return {
    ...override,
    metadataBase: new URL(getBaseUrl()),
    applicationName: siteName,
    title,
    description,
    category: 'Portfolio',
    authors: { name: 'Tiesen', url: getBaseUrl() },
    manifest: `${getBaseUrl()}/manifest.webmanifest`,
    keywords: [
      ...(override.keywords ?? []),
      'tiesen',
      'tiesen243',
      'Tran Tien',
      'web development',
      'frontend',
      'Next.js',
      'React',
      'TypeScript',
      'portfolio',
      'developer',
      'blogs',
    ],
    openGraph: {
      ...override.openGraph,
      url,
      title,
      description,
      siteName,
      images: [
        ...(Array.isArray(override.openGraph?.images)
          ? override.openGraph.images
          : override.openGraph?.images
            ? [override.openGraph.images]
            : []),
        { url: '/api/og?uwu' },
      ],
    },
    twitter: {
      ...override.twitter,
      card: 'summary_large_image',
      creatorId: '@tiesen243',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      ...override.alternates,
      canonical: url,
    },
    facebook: { appId: '625246206988524' },
    assets: '/assets',
  }
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}
