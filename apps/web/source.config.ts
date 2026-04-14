import { metaSchema, pageSchema } from 'fumadocs-core/source/schema'
import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import * as z from 'zod'

export const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: pageSchema.extend({
      image: z.string().optional(),
      tags: z.array(z.string()),
      publishedAt: z.date(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
})

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
    },
  },
})
