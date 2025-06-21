import type { MetadataRoute } from 'next'

import { getPages } from '@yuki/content'

import { getBaseUrl } from '@/lib/utils'

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])

  return [
    {
      url: url('/'),
      changeFrequency: 'yearly',
      priority: 1,
      lastModified: new Date('2004-06-22'),
    },
    {
      url: url('/contact'),
      changeFrequency: 'yearly',
      priority: 0.8,
      lastModified: new Date('2004-06-22'),
    },
    ...blogs.map((blog) => ({
      url: url(`/blogs/${blog.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: url(`/projects/${project.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
