import { notFound } from 'next/navigation'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import { EditOnGitHub } from 'fumadocs-ui/page'

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
    const { frontmatter, toc, url, MDXContent } = await getPage('blogs', slugs)

    return (
      <article className="container flex min-h-[calc(100dvh-1.5rem)] max-w-[80ch] flex-col py-8 font-sans">
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

        <InlineTOC items={toc} />

        <MDXContent components={mdxComponents()} />

        <div className="flex justify-end">
          <EditOnGitHub
            href={`https://github.com/tiesen243/portfolio/blob/main/packages/content${url}.mdx`}
            className="w-fit"
          />
        </div>
      </article>
    )
  } catch {
    notFound()
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
    notFound()
  }
}
