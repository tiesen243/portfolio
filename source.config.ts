import {
  remarkAdmonition,
  remarkImage,
  remarkStructure,
} from 'fumadocs-core/mdx-plugins'
import { remarkInstall, remarkShow } from 'fumadocs-docgen'
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config'
import { z } from 'zod'

export const blogs = defineDocs({
  dir: 'content/blogs',
  docs: {
    schema: frontmatterSchema.extend({
      description: z.string(),
      tags: z.array(z.string()),
      published: z.date(),
      image: z.string().optional(),
    }),
  },
})

export const projects = defineDocs({
  dir: 'content/projects',
  docs: {
    schema: frontmatterSchema.extend({
      description: z.string(),
      tags: z.array(z.string()),
      due: z.string().optional(),
      members: z.number().default(1),
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      order: z.number(),
    }),
  },
})

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [
      remarkAdmonition,
      remarkImage,
      remarkInstall,
      remarkShow,
      remarkStructure,
    ],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
    },
  },
})
