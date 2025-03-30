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
  const {
    title: _,
    description: __,
    keywords = [],
    openGraph,
    ...restOverride
  } = override
  const { images: ogImages, url: ogUrl, ...restOpenGraph } = openGraph ?? {}
  const url = `${getBaseUrl()}${ogUrl ?? ''}`

  return {
    metadataBase: new URL(getBaseUrl()),
    applicationName: siteName,
    title,
    description,
    category: 'Portfolio',
    authors: { name: 'Tiesen', url: getBaseUrl() },
    manifest: `${getBaseUrl()}/manifest.webmanifest`,
    keywords: [
      ...keywords,
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
      url,
      title,
      description,
      siteName,
      type: 'website',
      images: [
        { url: '/api/og?uwu=true', alt: 'Tiesen' },
        ...(Array.isArray(ogImages) ? ogImages : ogImages ? [ogImages] : []),
      ],
      ...restOpenGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creatorId: '@tiesen243',
      ...override.twitter,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: url,
      ...override.alternates,
    },
    facebook: { appId: '625246206988524' },
    assets: '/assets',
    ...restOverride,
  }
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}
