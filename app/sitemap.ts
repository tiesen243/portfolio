import type { MetadataRoute } from 'next'

import { projects } from '@/lib/data'
import { getBaseUrl } from '@/lib/seo'
import { source } from '@/lib/source'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = ['', 'contact', 'projects'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${getBaseUrl()}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = source.getPages().map((page) => ({
    url: `${getBaseUrl()}${page.url}`,
    lastModified: new Date(page.data.publishedAt).toISOString(),
  }))

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([projectRoutes, blogRoutes])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error fetching dynamic routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
