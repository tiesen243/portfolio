import type { MdxContent } from '@fumadocs/mdx-remote/client'

import { createCompiler } from '@fumadocs/mdx-remote'
import fs from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'
import * as z from 'zod'

import { github } from '@/lib/contants'
import { getBaseUrl } from '@/lib/utils'

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
  plain: string
  toc: {
    title: React.ReactNode
    url: string
    depth: number
    _step?: number
  }[]
  url: string
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
      plain: source.replace(/---[\s\S]*?---/, '').trim(),
      toc: compiledContent.toc,
      url: `/${slugs.join('/')}`,
    }
  } catch {
    return null
  }
}

const uncachedGetLLMFull = (
  pages: Awaited<ReturnType<typeof uncachedGetPages>>
) => {
  let llmFull = '# Documentation\n\n'

  for (const page of pages)
    llmFull += `## ${page.metadata.title}
${page.metadata.description}
URL: ${getBaseUrl()}${page.url}\n\n`

  return llmFull
}

const uncachedGetLLMText = (
  page: Awaited<ReturnType<typeof uncachedGetPage>>
) => {
  if (!page) return null

  const { metadata, url, plain } = page

  return `# ${metadata.title}

URL: ${getBaseUrl()}${url}
Source: https://raw.githubusercontent.com/${github.username}/${github.repository}/main/docs/${url.slice(1)}.mdx

${plain}`
}

export const getPages = cache(uncachedGetPages)
export const getPage = cache(uncachedGetPage)
export const getLLMFull = cache(uncachedGetLLMFull)
export const getLLMText = cache(uncachedGetLLMText)
