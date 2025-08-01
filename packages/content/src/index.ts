import fs from 'node:fs/promises'
import path from 'node:path'
import type { RemarkImageOptions } from 'fumadocs-core/mdx-plugins'
import { cache } from 'react'
import { createCompiler } from '@fumadocs/mdx-remote'
import {
  rehypeToc,
  remarkAdmonition,
  remarkCodeTab,
  remarkGfm,
  remarkHeading,
  remarkImage,
  remarkNpm,
  remarkSteps,
  remarkStructure,
} from 'fumadocs-core/mdx-plugins'

import { frontmatterSchema } from '@yuki/validators/mdx'

const compileMDX = createCompiler({
  rehypeCodeOptions: {
    themes: {
      light: 'github-light-default',
      dark: 'github-dark-default',
    },
    cache: new Map(),
  },
  rehypePlugins: [rehypeToc],
  remarkPlugins: [
    remarkAdmonition,
    remarkCodeTab,
    remarkGfm,
    remarkHeading,
    [
      remarkImage,
      {
        publicDir: path.resolve(process.cwd(), 'public'),
      } satisfies RemarkImageOptions,
    ],
    remarkNpm,
    remarkSteps,
    remarkStructure,
  ],
})

async function uncachedGetPage(slugs: string[]) {
  validateSlugs(slugs)

  const sourcePath = path.resolve(`../packages/content/`)
  const filePath = path.join(sourcePath, ...slugs) + '.mdx'

  try {
    const source = await fs.readFile(filePath, 'utf-8')
    if (!source.trim()) throw new Error('File is empty')

    const compiled = await compileMDX.compile({
      source,
      filePath,
    })

    const frontmatter = frontmatterSchema.parse(compiled.frontmatter)

    return {
      path: filePath,
      frontmatter,
      toc: compiled.toc,
      MDXContent: compiled.body,
      url: `/${slugs.join('/')}`,
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development')
      console.log(`Error reading page: ${filePath}`, error)

    if (error instanceof Error)
      throw new Error(`Failed to compile page ${filePath}: ${error.message}`)
    throw new Error(`Unexpected error while reading page: ${filePath}`)
  }
}

async function uncachedGetPages(contentType: 'blogs' | 'projects') {
  const sourcePath = path.resolve(`../packages/content/${contentType}`)

  try {
    const files = await fs.readdir(sourcePath, { withFileTypes: true })

    const mdxFiles = files.filter(
      (file) =>
        file.isFile() &&
        file.name.endsWith('.mdx') &&
        file.name !== 'index.mdx',
    )

    const pages = await Promise.allSettled(
      mdxFiles.map(async (file) => {
        const slug = file.name.slice(0, -4)
        const filePath = path.join(sourcePath, file.name)

        try {
          const source = await fs.readFile(filePath, 'utf-8')
          if (!source.trim()) throw new Error('Empty file')

          const compiled = await compileMDX.compile({ source, filePath })
          const frontmatter = frontmatterSchema.parse(compiled.frontmatter)

          return { filePath, frontmatter, slug, url: `/${contentType}/${slug}` }
        } catch {
          return {
            slug,
            filePath,
            url: `/${contentType}/${slug}`,
            frontmatter: {
              title: slug
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
              description: '',
              publishedAt: new Date(),
              tags: [],
            },
          }
        }
      }),
    )

    return pages
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value)
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.publishedAt)
        const dateB = new Date(b.frontmatter.publishedAt)
        return dateB.getTime() - dateA.getTime()
      })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.log(error)
    if (error instanceof Error)
      throw new Error(`Source directory not found: ${sourcePath}`)
    throw new Error(`Failed to read source directory: ${sourcePath}`)
  }
}

export const getPage = cache(uncachedGetPage)
export const getPages = cache(uncachedGetPages)

function validateSlugs(slugs: string[]): void {
  if (slugs.length === 0) throw new Error('Slugs array cannot be empty')

  const hasInvalidPath = slugs.some(
    (slug) => slug.includes('..') || slug.includes('/') || slug.includes('\\'),
  )
  if (hasInvalidPath)
    throw new Error('Invalid slug: contains path traversal characters')
}
