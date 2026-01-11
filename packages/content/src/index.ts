import type { MdxContent } from '@fumadocs/mdx-remote/client'
import type { RemarkImageOptions } from 'fumadocs-core/mdx-plugins'
import type { TableOfContents } from 'fumadocs-core/toc'

import { createCompiler } from '@fumadocs/mdx-remote'
import { FolderKanbanIcon, HomeIcon, MailIcon, RssIcon } from '@yuki/ui/icons'
import { frontmatterSchema, type Frontmatter } from '@yuki/validators/mdx'
import {
  rehypeToc,
  remarkCodeTab,
  remarkDirectiveAdmonition,
  remarkGfm,
  remarkHeading,
  remarkImage,
  remarkNpm,
  remarkStructure,
} from 'fumadocs-core/mdx-plugins'
import { cache } from 'react'

import fs from 'node:fs/promises'
import path from 'node:path'

const compileMDX = createCompiler({
  rehypeCodeOptions: {
    cache: new Map(),
    themes: {
      dark: 'github-dark-default',
      light: 'github-light-default',
    },
  },
  rehypePlugins: [rehypeToc],
  remarkPlugins: [
    remarkCodeTab,
    remarkDirectiveAdmonition,
    remarkGfm,
    remarkHeading,
    [
      remarkImage,
      {
        publicDir: path.resolve(process.cwd(), 'public'),
      } satisfies RemarkImageOptions,
    ],
    remarkNpm,
    remarkStructure,
  ],
})

async function uncachedGetPage(slugs: string[]): Promise<{
  MDXContent: MdxContent
  frontmatter: Frontmatter
  path: string
  toc: TableOfContents
  url: string
} | null> {
  validateSlugs(slugs)

  const sourcePath = path.resolve(`../packages/content/`)
  const filePath = path.join(sourcePath, ...slugs) + '.mdx'

  try {
    const source = await fs.readFile(filePath, 'utf8')
    if (!source.trim()) throw new Error('File is empty')

    const compiled = await compileMDX.compile({
      filePath,
      source,
    })

    const frontmatter = frontmatterSchema.parse(compiled.frontmatter)

    return {
      MDXContent: compiled.body,
      frontmatter,
      path: filePath,
      toc: compiled.toc,
      url: `/${slugs.join('/')}`,
    }
  } catch {
    return null
  }
}

async function uncachedGetPages(contentType?: 'blogs' | 'projects') {
  const sourcePath = path.resolve(`../packages/content/${contentType ?? ''}`)

  try {
    const files = await fs.readdir(sourcePath, {
      recursive: true,
      withFileTypes: true,
    })

    const mdxFiles = files.filter(
      (file) =>
        file.isFile() &&
        /\.(mdx?|MDX?)$/.test(file.name) &&
        !/^index\.mdx?$/i.test(file.name),
    )

    const pages = await Promise.allSettled(
      mdxFiles.map(async (file) => {
        const filePath = path.join(file.parentPath, file.name)
        const slugParts = filePath
          .slice(filePath.indexOf('content'))
          .replace(/\.mdx?$/i, '')
        const slugs = slugParts.split('/').slice(1)

        try {
          const source = await fs.readFile(filePath, 'utf8')
          if (!source.trim()) throw new Error('Empty file')

          const compiled = await compileMDX.compile({ filePath, source })
          const frontmatter = frontmatterSchema.parse(compiled.frontmatter)
          return { filePath, frontmatter, slugs }
        } catch {
          return {
            filePath,
            frontmatter: {
              description: '',
              publishedAt: new Date(),
              tags: [],
              title: slugParts.replaceAll('-', ' '),
            },
            slugs,
          }
        }
      }),
    )

    return pages
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value)
      .toSorted((a, b) => {
        const dateA = new Date(a.frontmatter.publishedAt)
        const dateB = new Date(b.frontmatter.publishedAt)
        return dateB.getTime() - dateA.getTime()
      })
  } catch (error) {
    if (error instanceof Error)
      throw new TypeError(`Source directory not found: ${sourcePath}`, {
        cause: error,
      })

    throw new Error(`Failed to read source directory: ${sourcePath}`, {
      cause: error,
    })
  }
}

async function uncachedGetPageTree(): Promise<
  Array<
    {
      name: string
      icon: React.ComponentType
    } & (
      | { type: 'page'; url: string }
      | {
          type: 'folder'
          children: Array<{ name: string; type: 'page'; url: string }>
        }
    )
  >
> {
  const blogsDir = path.resolve(`../packages/content/blogs`)
  const projectsDir = path.resolve(`../packages/content/projects`)

  const [blogs, projects] = await Promise.all([
    fs.readdir(blogsDir).catch(() => []),
    fs.readdir(projectsDir).catch(() => []),
  ])

  const blogChildren = blogs
    .filter((file) => /\.(mdx?|MDX?)$/.test(file))
    .map((file) => ({
      name: file.replace(/\.mdx?$/i, '').replaceAll('-', ' '),
      type: 'page' as const,
      url: `/blogs/${file.replace(/\.mdx?$/i, '')}`,
    }))

  const projectChildren = projects
    .filter((file) => /\.(mdx?|MDX?)$/.test(file))
    .map((file) => ({
      name: file.replace(/\.mdx?$/i, '').replaceAll('-', ' '),
      type: 'page' as const,
      url: `/projects/${file.replace(/\.mdx?$/i, '')}`,
    }))

  return [
    {
      name: 'Home',
      type: 'page',
      url: '/',
      icon: HomeIcon,
    },
    {
      name: 'Contact',
      type: 'page',
      url: '/contact',
      icon: MailIcon,
    },
    {
      name: 'Blogs',
      type: 'folder',
      icon: RssIcon,
      children: blogChildren,
    },
    {
      name: 'Projects',
      type: 'folder',
      icon: FolderKanbanIcon,
      children: projectChildren,
    },
  ]
}

export const getPage = cache(uncachedGetPage)
export const getPages = cache(uncachedGetPages)
export const getPageTree = cache(uncachedGetPageTree)

function validateSlugs(slugs: string[]): void {
  if (slugs.length === 0) throw new Error('Slugs array cannot be empty')

  const hasInvalidPath = slugs.some(
    (slug) => slug.includes('..') || slug.includes('/') || slug.includes('\\'),
  )

  if (hasInvalidPath)
    throw new Error('Invalid slug: contains path traversal characters')
}
