import type { MetadataRoute } from 'next'

import { getPosts } from '@/lib/post'
import { projects } from '@/lib/data'
import { getBaseUrl } from '@/lib/utils'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'projects', 'blog'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = await Promise.all(
    await getPosts().then((posts) =>
      posts.map(async (post) => ({
        url: `${getBaseUrl()}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt).toISOString(),
      })),
    ),
  )

  const projectsRoutes = await Promise.all(
    projects.map((project) => ({
      url: `${getBaseUrl()}/projects/${project.slug}`,
      lastModified: new Date().toISOString(),
    })),
  )

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes, projectsRoutes])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Failed to fetch routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
