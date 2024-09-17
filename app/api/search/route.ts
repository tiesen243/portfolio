import { createSearchAPI } from 'fumadocs-core/search/server'

import { source } from '@/content/source'

export const { GET } = createSearchAPI('advanced', {
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    tag: page.data.tags.toString(),
    id: page.url,
    url: page.url,
  })),
  tag: true,
})
