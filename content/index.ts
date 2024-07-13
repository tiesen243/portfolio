import { map } from '@/.map'
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { z } from 'zod'

const frontmatter = defaultSchemas.frontmatter.extend({
  title: z.string(),
  description: z.string().optional(),
  image: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, { schema: { frontmatter } }),
})
