import type { MetadataRoute } from 'next'

import { getPages } from '@/content'
import { getBaseUrl } from '@/lib/utils'

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()

  const statics = [
    '/assets/cv.pdf',
    '/contact',
    '/contact/facebook',
    '/contact/github',
    '/contact/linkedin',
    '/contact/x',
  ]
  const pages = await getPages()

  return [
    {
      changeFrequency: 'yearly',
      priority: 1,
      url: url('/'),
    },
    ...statics.map((path) => ({
      changeFrequency: 'yearly' as const,
      priority: 0.8,
      url: url(path),
    })),
    ...pages.map((page) => ({
      changeFrequency: 'monthly' as const,
      lastModified: new Date(page.frontmatter.publishedAt).toISOString(),
      priority: 0.7,
      url: url(`/${page.slugs.join('/')}`),
    })),
  ]
}
