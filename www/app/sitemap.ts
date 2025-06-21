import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/utils'

export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string): string => new URL(path, getBaseUrl()).toString()

  return [
    {
      url: url('/'),
      changeFrequency: 'yearly',
      priority: 1,
      lastModified: new Date('2004-06-22'),
    },
  ]
}
