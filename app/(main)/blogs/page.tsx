import Link from 'next/link'
import { parseFrontmatter } from '@fumadocs/mdx-remote'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { frontmatterShema, getPage, getPages } from '@/content'

export default async function BlogPage() {
  const pages = await getPages()

  return (
    <main className="container flex-1 py-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>

      <div className="mt-4 grid gap-4">
        {pages.map(async (page) => {
          const source = await getPage(page.slug)
          if (!source) return null

          const frontmatter = frontmatterShema.parse(
            parseFrontmatter(source.content).frontmatter,
          )

          return (
            <Link href={`/blogs/${page.slug}`} key={page.path}>
              <Card className="hover:bg-secondary transition-colors">
                <CardHeader>
                  <CardTitle>{frontmatter.title}</CardTitle>
                  <CardDescription>{frontmatter.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
