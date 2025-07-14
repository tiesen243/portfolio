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
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])

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
    ...blogs.map((blog) => ({
      url: url(`/blogs/${blog.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(blog.frontmatter.publishedAt).toISOString(),
    })),
    ...projects.map((project) => ({
      url: url(`/projects/${project.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(project.frontmatter.publishedAt).toISOString(),
    })),
  ]
}
