import type { MetadataRoute } from 'next'

import { baseUrl } from '@/lib/site'
import { getPosts } from '@/content'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'projects', 'blog'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const enPosts = await getPosts('en')
  const enBlogRoutes = enPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}?lang=en`,
    lastModified: post.date.toISOString(),
  }))

  const viPosts = await getPosts('vi')
  const viBlogRoutes = viPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}?lang=vi`,
    lastModified: post.date.toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([enBlogRoutes, viBlogRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
