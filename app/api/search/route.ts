import { createFromSource } from 'fumadocs-core/search/server'

import { blogsSource } from '@/lib/source'

export const { GET } = createFromSource(blogsSource)
