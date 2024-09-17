import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins'
import { remarkInstall } from 'fumadocs-docgen'
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const { docs, meta } = defineDocs()

export const blog = defineCollections({
  dir: 'content/blogs',
  type: 'doc',
  schema: frontmatterSchema.extend({
    publishedAt: z.date(),
    tags: z.array(z.string()),
  }),
})

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      inline: 'tailing-curly-colon',
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      transformers: rehypeCodeDefaultOptions.transformers,
    },
    remarkPlugins: [[remarkInstall, { persist: { id: 'package-manager' } }]],
  },
})
