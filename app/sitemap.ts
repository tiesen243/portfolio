import type { MetadataRoute } from 'next'

import { source } from '@/content/source'
import { getBaseUrl } from '@/lib/utils'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = ['', 'project'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = source.getPages().map((page) => ({
    url: `${getBaseUrl()}${page.url}`,
    lastModified: new Date(page.data.lastModified).toISOString(),
  }))

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error fetching dynamic routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
