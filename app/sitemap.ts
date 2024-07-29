import type { MetadataRoute } from 'next'

import { getPages } from '@/content'
import { getBaseUrl } from '@/lib/site'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await import('@/lib/data.json').then((data) => data.projects)
  const routesMap = ['', 'projects', 'blog'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = getPages().map((page) => ({
    url: `${getBaseUrl()}${page.url}`,
    lastModified: page.data.date.toISOString(),
  }))
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
