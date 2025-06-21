import fs from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'
import { compileMDX } from '@fumadocs/mdx-remote'
import {
  remarkAdmonition,
  remarkHeading,
  remarkImage,
  remarkSteps,
} from 'fumadocs-core/mdx-plugins'
import { remarkInstall } from 'fumadocs-docgen'

import { frontmatterSchema } from '@yuki/validators/mdx'

async function uncachedGetPage(source: 'blogs' | 'projects', slugs: string[]) {
  const sourcePath = path.resolve(`../packages/content/${source}/`)
  const filePath = path.join(sourcePath, ...slugs) + '.mdx'

  try {
    const source = await fs.readFile(filePath, 'utf-8')
    const compiled = await compileMDX({
      source,
      filePath,
      mdxOptions: {
        remarkPlugins: [
          remarkAdmonition,
          remarkHeading,
          remarkImage,
          remarkInstall,
          remarkSteps,
        ],
      },
    })

    const frontmatter = frontmatterSchema.parse(compiled.frontmatter)

    return {
      path: filePath,
      MDXContent: compiled.body,
      frontmatter,
      url: `/${source}/${slugs.join('/')}`,
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(`Page not found: ${filePath}`)
    throw new Error(
      `An unexpected error occurred while reading the page: ${filePath}`,
    )
  }
}

async function uncachedGetPages(source: 'blogs' | 'projects') {
  const sourcePath = path.resolve(`../packages/content/${source}/`)
  const files = await fs.readdir(sourcePath, { withFileTypes: true })

  const pages = await Promise.all(
    files
      .filter((file) => file.isFile() && file.name !== 'index.mdx')
      .map(async (file) => {
        const slug = file.name.replace(/\.mdx$/, '')
        const filePath = path.join(sourcePath, file.name)

        try {
          const fileContent = await fs.readFile(filePath, 'utf-8')

          // Basic validation - check if file has content
          if (!fileContent.trim()) {
            throw new Error('Empty file')
          }

          const compiled = await compileMDX({
            source: fileContent,
            filePath,
          })

          const frontmatter = frontmatterSchema.parse(compiled.frontmatter)

          return {
            slug,
            path: filePath,
            url: `/${source}/${slug}`,
            frontmatter,
          }
        } catch {
          return {
            slug,
            path: filePath,
            url: `/${source}/${slug}`,
            frontmatter: {
              title: slug
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (l) => l.toUpperCase()),
              description: '',
            },
          }
        }
      }),
  )

  return pages
}

export const getPage = cache(uncachedGetPage)
export const getPages = cache(uncachedGetPages)
