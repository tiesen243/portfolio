import fs from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import { z } from 'zod'

import { components } from '@/components/mdx'

const root = process.cwd()

const frontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().optional(),
  publishedAt: z.string().min(1, 'PublishedAt is required'),
  tags: z.array(z.string()).default([]),
})

export interface Post {
  meta: z.infer<typeof frontmatterSchema> & { slug: string }
  content: React.ReactElement
}

export const getPost = async ({ slug }: { slug: string }): Promise<Post | null> => {
  try {
    const source = await fs.readFile(`${root}/content/${slug}.mdx`, 'utf8')

    const options: Options = {
      theme: { light: 'github-light-default', dark: 'github-dark-default' },
      keepBackground: false,
      bypassInlineCode: false,
    }

    const { content, frontmatter } = await compileMDX({
      source,
      components,
      options: {
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [[rehypePrettyCode, options]] },
      },
    })

    const parsed = frontmatterSchema.parse(frontmatter)
    const image = parsed.image ?? `/og?title=${parsed.title}&desc=${parsed.description}`

    return { content, meta: { ...parsed, image, slug } }
  } catch {
    return null
  }
}

export const getPosts = async (): Promise<Post['meta'][]> => {
  const files = await fs.readdir(`${root}/content`)

  const posts = await Promise.all(
    files.map(async (file) => {
      const post = await getPost({ slug: file.replace(/\.mdx$/, '') })
      if (!post) return
      return post.meta
    }),
  )

  // @ts-expect-error - filter out null values
  return posts.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
}
