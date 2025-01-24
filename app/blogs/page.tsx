import Link from 'next/link'
import { parseFrontmatter } from '@fumadocs/mdx-remote'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { frontmatterShema, getPage, getPages } from '@/content'
import { createMetadata } from '@/lib/metadata'

export default async function BlogPage() {
  const pages = await getPages()

  return (
    <article className="container pt-4 pb-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>

      <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        I am a passionate writer and love to share my thoughts and ideas with the world. I
        believe that everyone has a story to tell and I am excited to share mine with you.
        I hope you enjoy reading my blog and find it informative and entertaining.
      </p>

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
    </article>
  )
}

export const metadata = createMetadata({
  title: 'Blogs',
  description: 'A collection of blogs written by me.',
  openGraph: {
    images: [
      `/api/og?title=Blogs&description=${encodeURIComponent('A collection of blogs written by me.')}`,
    ],
    url: '/blogs',
  },
})
