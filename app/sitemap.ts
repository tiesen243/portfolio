import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/metadata'
import { source } from '@/lib/source'
import { projects } from './(main)/projects/data'

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()

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
      source.getPages().map(
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
