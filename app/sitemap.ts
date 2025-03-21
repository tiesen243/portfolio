import type { MetadataRoute } from 'next'

import { source } from '@/content'
import { projects } from '@/data'
import { getBaseUrl } from '@/lib/utils'

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()
  const blogs = source.getPages()

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/projects'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...(await Promise.all(
      projects.map(
        (project) =>
          ({
            url: url(`/projects/${project.slug}`),
            changeFrequency: 'monthly',
            priority: 0.7,
          }) as MetadataRoute.Sitemap[number],
      ),
    )),
    ...(await Promise.all(
      blogs.map(
        (page) =>
          ({
            url: url(page.url),
            changeFrequency: 'weekly',
            priority: 0.5,
          }) as MetadataRoute.Sitemap[number],
      ),
    )),
  ]
}
