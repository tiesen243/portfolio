import type { MetadataRoute } from 'next'

import { projects } from '@/lib/data'
import { getLastModifiedTime, getPages } from '@/lib/mdx'
import { getBaseUrl } from '@/lib/site'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'projects', 'blog'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = Promise.all(
    getPages().map(async (page) => ({
      url: `${getBaseUrl()}${page.url}`,
      lastModified: await getLastModifiedTime(page.file.path).then((date) =>
        new Date(date).toISOString(),
      ),
    })),
  )

  const projectsRoutes = projects.map((project) => ({
    url: `${getBaseUrl()}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes, projectsRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
