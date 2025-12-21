import type { MetadataRoute } from 'next'
import { getPages } from '@yuki/content'
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
      url: url('/'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...statics.map((path) => ({
      url: url(path),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
    ...pages.map((page) => ({
      url: url(`/${page.slugs.join('/')}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(page.frontmatter.publishedAt).toISOString(),
    })),
  ]
}
