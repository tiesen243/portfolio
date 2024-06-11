import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import { unstable_cache as cache } from 'next/cache'
import rehypePrettyCode from 'rehype-pretty-code'

import { MDXComponents } from '@/components/mdx/mdx-components'

export interface Post {
  slug: string
  meta: {
    title: string
    description: string
    image: string
    tags: string[]
    date: Date
  }
}

// Configure the root directory and revalidation time
const root = process.cwd()
const revalidate = 1

export const getPost = async (
  slug: string,
): Promise<{ meta: Post['meta']; content: React.ReactElement }> => {
  const source = fs.readFileSync(`${root}/content/posts/${slug}.mdx`, 'utf8').toString()
  const { frontmatter, content } = await compileMDX<Post['meta']>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: { light: 'github-light-default', dark: 'github-dark-default' },
              keepBackground: false,
            },
          ],
        ],
      },
    },
    components: MDXComponents(),
  })

  return { meta: frontmatter, content }
}

export const getPosts = cache(
  async (): Promise<Post[]> => {
    const files = fs.readdirSync(`${root}/content/posts`)
    const posts = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, '')
        const { meta } = await getPost(slug)
        return { slug, meta }
      }),
    )

    return posts
  },
  ['posts'],
  { revalidate },
)
