import { remarkInstall } from 'fumadocs-docgen'
import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const { docs, meta } = defineDocs({
  dir: 'content/blog',
  docs: {
    type: 'doc',
    schema: frontmatterSchema.extend({
      publishedAt: z.date(),
      tags: z.array(z.string()),
      image: z.string().optional(),
    }),
  },
})

export default defineConfig({
  lastModifiedTime: 'git',
  generateManifest: true,
  mdxOptions: {
    remarkPlugins: [remarkInstall],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
    },
  },
})
