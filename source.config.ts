import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins'
import { remarkInstall } from 'fumadocs-docgen'
import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const { docs, meta } = defineDocs({
  docs: {
    type: 'doc',
    dir: 'content/blogs',
    schema: frontmatterSchema.extend({
      image: z.string().url().optional(),
      publishedAt: z.date(),
      tags: z.array(z.string()),
    }),
  },
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
