import { notFound } from 'next/navigation'

import { getPage, getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

export default async function BlogPage({
  params,
}: Readonly<{ params: Promise<{ slugs: string[] }> }>) {
  const { slugs } = await params

  try {
    const { frontmatter, MDXContent } = await getPage('blogs', slugs)

    return (
      <article className="container flex min-h-[calc(100dvh-1.5rem)] flex-col py-12 font-sans">
        <Typography variant="h2" component="h1">
          {frontmatter.title}
        </Typography>

        <Typography className="text-muted-foreground">
          {frontmatter.description}
        </Typography>

        <div className="mt-2 flex flex-wrap gap-1">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Typography className="text-muted-foreground mt-2 shrink-0 text-xs lg:text-sm">
          {formatDate(frontmatter.publishedAt)}
        </Typography>

        <hr className="my-4" />

        <MDXContent components={mdxComponents()} />
      </article>
    )
  } catch {
    return notFound()
  }
}

export async function generateStaticParams() {
  const pages = await getPages('blogs')
  return pages.map((page) => ({
    slugs: page.slug.split('/').filter(Boolean),
  }))
}

export const generateMetadata = async ({
  params,
}: Readonly<{ params: Promise<{ slugs: string[] }> }>) => {
  const { slugs } = await params

  try {
    const { frontmatter, url } = await getPage('blogs', slugs)

    return createMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      keywords: frontmatter.tags,
      openGraph: {
        url,
        images: `/api/og?title=${frontmatter.title}&description=${frontmatter.description}`,
      },
    })
  } catch {
    return notFound()
  }
}
