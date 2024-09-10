'use server'

import fs from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

import { components } from '@/components/mdx'
import { z } from 'zod'

const root = process.cwd()

const frontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().optional(),
  publishedAt: z.string().min(1, 'PublishedAt is required'),
  tags: z.array(z.string()).default([]),
})

interface Toc {
  level: number
  title: string
  toc?: Toc[]
}
export interface Post {
  meta: z.infer<typeof frontmatterSchema> & { slug: string }
  content: React.ReactElement
  toc: Toc[]
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
    const toc = extractHeaders(source)

    return { content, meta: { ...parsed, image, slug }, toc }
  } catch {
    return null
  }
}

export const getPosts = async (): Promise<Post['meta'][]> => {
  const files = await fs.readdir(`${root}/content`)

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      const post = await getPost({ slug })
      if (!post) return null
      return post.meta
    }),
  )

  // @ts-expect-error - Filter out null values
  return posts.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
}

function extractHeaders(markdownContent: string) {
  const headerRegex = /#{2,6}.+/g

  const toc = Array.from(markdownContent.matchAll(headerRegex)).reduce((acc, match) => {
    const level = match[0].match(/#/g)!.length
    const title = match[0].replace(/#/g, '').trim()

    if (level === 2) {
      acc.push({ level, title, toc: [] })
    } else {
      const last = acc[acc.length - 1]
      last?.toc.push({ level, title })
    }

    return acc
  }, [] as Toc[])

  return toc
}
