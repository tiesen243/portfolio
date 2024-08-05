import { loader } from 'fumadocs-core/source'
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx'
import { z } from 'zod'

import { map } from '@/.map'

const frontmatter = defaultSchemas.frontmatter.extend({
  title: z.string(),
  description: z.string().optional(),
  image: z.string(),
  tags: z.array(z.string()),
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, { schema: { frontmatter } }),
})
