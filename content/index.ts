import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { parseFrontmatter } from '@fumadocs/mdx-remote'
import { z } from 'zod'

export const frontmatterShema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  publishedAt: z.date(),
  tags: z.array(z.string()),
})

export type Frontmatter = z.infer<typeof frontmatterShema>

/**
 * Get Page content
 */
export async function getPage(slugs: string[] = []): Promise<
  | {
      path: string
      content: string
    }
  | undefined
> {
  try {
    let file = path.join('content', 'blogs', ...slugs)

    const stats = await fs.stat(file).catch(() => null)

    if (stats?.isDirectory()) file = path.join(file, 'index.mdx')
    else file = file + '.mdx'

    return {
      path: file,
      content: (await fs.readFile(file)).toString(),
    }
  } catch {
    return undefined
  }
}

interface Page {
  slug: string[]
  path: string
  frontmatter: Frontmatter
}

export async function getPages(): Promise<Page[]> {
  const files = await fs.readdir(path.join('content', 'blogs'))

  return await Promise.all(
    files.map(async (f) => {
      const file = path.join('content', 'blogs', f)
      const slugs = file.split(path.sep).filter(Boolean).slice(2)
      const last = slugs[slugs.length - 1] ?? ''

      slugs[slugs.length - 1] = last.slice(0, -path.extname(last).length)
      if (slugs[slugs.length - 1] === 'index') slugs.pop()

      const content = (await fs.readFile(file, 'utf-8')).toString()
      const frontmatter = frontmatterShema.parse(
        parseFrontmatter(content).frontmatter,
      )

      return {
        path: file,
        slug: slugs,
        frontmatter,
      }
    }),
  ).then((pages) =>
    pages
      .sort(
        (a, b) =>
          b.frontmatter.publishedAt.getTime() -
          a.frontmatter.publishedAt.getTime(),
      )
      .filter((page) => page.slug.length),
  )
}
