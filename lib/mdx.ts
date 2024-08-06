import { getGithubLastEdit } from 'fumadocs-core/server'
import { loader } from 'fumadocs-core/source'
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx'
import { unstable_cache as cache } from 'next/cache'
import { resolve } from 'path'
import { z } from 'zod'

import { map } from '@/.map'
import { env } from '@/env'

const frontmatter = defaultSchemas.frontmatter.extend({
  title: z.string(),
  description: z.string().optional(),
  image: z.string(),
  tags: z.array(z.string()),
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/blog',
  rootDir: '',
  source: createMDXSource(map, { schema: { frontmatter } }),
})

export const getLastModifiedTime = cache(
  async (path: string): Promise<Date> => {
    const time = await getGithubLastEdit({
      owner: 'tiesen243',
      repo: 'portfolio',
      path: resolve('/content/', path),
      token: `Bearer ${env.GIT_TOKEN}`,
    })

    if (!time) return new Date()

    return new Date(time)
  },
  ['modified-time'],
  { revalidate: 60 * 60 * 24 * 7 },
)
