import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'

/* mdx plugins */
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import { getHighlighter } from 'shiki'

import { mdxComponents } from './mdx-components'

const root = process.cwd()

export interface PostMeta {
  title: string
  description: string
  image: string
  tags: string[]
  date: Date
  slug: string
  hasMultipleLang?: boolean
}

export const getPost = async (lang: 'en' | 'vi' = 'en', slug: string) => {
  try {
    const source = fs.readFileSync(`${root}/content/blog/${lang}/${slug}`, 'utf8')

    const { content, frontmatter } = await compileMDX<PostMeta>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode as any,
              {
                theme: 'dracula',
                getHighlighter,
                onVisitLine(node) {
                  if (node.children.length === 0) node.children = [{ type: 'text', value: ' ' }]
                },
                onVisitHighlightedLine(node) {
                  node.properties.className?.push('line--highlighted')
                },
                onVisitHighlightedChars(node, id) {
                  node.properties.className = ['word']
                  node.properties['data-word-id'] = id
                },
              } satisfies Options,
            ],
          ],
        },
      },
      components: mdxComponents,
    })

    return { content, meta: { ...frontmatter, slug: slug.replace('.mdx', '') } }
  } catch (error) {
    return {
      content: '',
      meta: {
        title: '',
        description: '',
        image: '',
        tags: [],
        date: new Date(),
        slug: slug.replace('.mdx', ''),
        hasMultipleLang: false,
      },
    }
  }
}

export const getPosts = async (lang: 'en' | 'vi' = 'en') => {
  const slugs = fs.readdirSync(`${root}/content/blog/${lang}`)
  const posts = await Promise.all(slugs.map((slug) => getPost(lang, slug))).then((posts) =>
    posts.sort((a, b) => Number(new Date(b.meta.date)) - Number(new Date(a.meta.date))),
  )
  return posts.map((post) => post.meta)
}
