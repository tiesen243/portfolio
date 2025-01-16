import { remarkInstall } from 'fumadocs-docgen'
import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config'
import { z } from 'zod'

export const docs = defineCollections({
  type: 'doc',
  dir: 'content/blogs',
  schema: frontmatterSchema.extend({
    publishedAt: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

export const meta = defineCollections({
  type: 'meta',
  dir: 'content/blogs',
  schema: metaSchema,
})

export default defineConfig({
  lastModifiedTime: 'git',
  generateManifest: true,
  mdxOptions: {
    remarkPlugins: [remarkInstall],
    rehypeCodeOptions: {
      themes: {
        light: 'tokyo-night',
        dark: 'tokyo-night',
      },
    },
  },
})
