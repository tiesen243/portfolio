import type {
  RehypeCodeOptions,
  RemarkImageOptions,
} from 'fumadocs-core/mdx-plugins'

import { frontmatterSchema } from '@yuki/validators/mdx'
import {
  rehypeCode,
  rehypeToc,
  remarkImage,
  remarkHeading,
  remarkGfm,
  remarkNpm,
} from 'fumadocs-core/mdx-plugins'
import { defineDocs, defineConfig } from 'fumadocs-mdx/config'
import path from 'node:path'

export const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: frontmatterSchema,
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeCode,
          {
            themes: {
              light: 'github-light-default',
              dark: 'github-dark-default',
            },
          } satisfies RehypeCodeOptions,
        ],
        rehypeToc,
      ],
      remarkPlugins: [
        remarkGfm,
        remarkNpm,
        [
          remarkImage,
          {
            publicDir: path.join(process.cwd(), 'public'),
          } satisfies RemarkImageOptions,
        ],
        remarkHeading,
      ],
    },
  },
})

export default defineConfig()
