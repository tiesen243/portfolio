import type { MetadataRoute } from 'next'

import { getPages } from '@/lib/source'
import { getBaseUrl } from '@/lib/utils'

export const revalidate = false

const url = (path: string): string => new URL(path, getBaseUrl()).toString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])
  const pages = [...blogs, ...projects]

  return [
    {
      changeFrequency: 'yearly',
      priority: 1,
      url: url('/'),
    },
    {
      changeFrequency: 'monthly',
      priority: 0.9,
      url: url('/blogs'),
    },
    {
      changeFrequency: 'monthly',
      priority: 0.9,
      url: url('/projects'),
    },
    ...pages.map((page) => ({
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      url: url(page.url),
    })),
  ]
}
