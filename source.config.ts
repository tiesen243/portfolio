import { remarkImage } from 'fumadocs-core/mdx-plugins'
import { remarkInstall } from 'fumadocs-docgen'
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config'
import { z } from 'zod'

export const docs = defineDocs({
  dir: 'content/blogs',
  docs: {
    // options for `doc` collection
    schema: frontmatterSchema.extend({
      publishedAt: z.date(),
      tags: z.array(z.string()),
    }),
  },
  meta: {
    // options for `meta` collection
  },
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkImage],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
    },
  },
})
