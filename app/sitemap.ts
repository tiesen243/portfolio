import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/metadata'
import { blogsSource, projectsSource } from '@/lib/source'

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()
  const projects = projectsSource.getPages()
  const blogs = blogsSource.getPages()

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...(await Promise.all(
      projects.map(
        (page) =>
          ({
            url: url(page.url),
            changeFrequency: 'weekly',
            priority: 0.8,
          }) as MetadataRoute.Sitemap[number],
      ),
    )),
    ...(await Promise.all(
      blogs.map(
        (page) =>
          ({
            url: url(page.url),
            changeFrequency: 'weekly',
            priority: 0.8,
          }) as MetadataRoute.Sitemap[number],
      ),
    )),
  ]
}
