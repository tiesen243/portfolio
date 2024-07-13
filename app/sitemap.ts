import type { MetadataRoute } from 'next'

import { baseUrl } from '@/lib/site'
import { getPages } from '@/content'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'projects', 'blog'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = getPages().map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: page.data.date.toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
