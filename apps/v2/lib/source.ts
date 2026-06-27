import type { MdxContent } from '@fumadocs/mdx-remote/client'

import { createCompiler } from '@fumadocs/mdx-remote'
import fs from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'
import * as z from 'zod'

const DOCS_PATH = path.resolve(process.cwd(), '../../docs')

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.string().array().default([]),
  publishedAt: z.coerce
    .date()
    .transform((data) =>
      Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(data)
    ),
})

const compiler = createCompiler({
  rehypeCodeOptions: {
    themes: {
      dark: 'github-dark-default',
      light: 'github-light-default',
    },
  },
})

const uncachedGetPages = async (
  dir: 'blogs' | 'projects'
): Promise<
  {
    name: string
    url: string
    metadata: z.infer<typeof frontmatterSchema>
  }[]
> => {
  try {
    const files = await fs.readdir(path.join(DOCS_PATH, dir))

    const promises = files.map(async (file) => {
      const filePath = path.join(DOCS_PATH, dir, file)

      const fileName = path.parse(file).name
      const source = await fs.readFile(filePath, 'utf-8')

      const compiledContent = await compiler.compile({
        filePath,
        source,
      })

      return {
        name: fileName,
        url: `/${dir}/${fileName}`,
        metadata: frontmatterSchema.parse(compiledContent.frontmatter),
      }
    })

    return Promise.all(promises)
  } catch {
    return []
  }
}

const uncachedGetPage = async (
  slugs: string[]
): Promise<{
  metadata: z.infer<typeof frontmatterSchema>
  content: MdxContent
  toc: {
    title: React.ReactNode
    url: string
    depth: number
    _step?: number
  }[]
} | null> => {
  try {
    const filePath = path.join(DOCS_PATH, `${slugs.join('/')}.mdx`)
    const source = await fs.readFile(filePath, 'utf-8')

    const compiledContent = await compiler.compile({
      filePath,
      source,
    })

    return {
      metadata: frontmatterSchema.parse(compiledContent.frontmatter),
      content: compiledContent.body,
      toc: compiledContent.toc,
    }
  } catch {
    return null
  }
}

export const getPages = cache(uncachedGetPages)
export const getPage = cache(uncachedGetPage)
