import Image from 'next/image'
import { notFound } from 'next/navigation'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'

import { getPage, getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  try {
    const { frontmatter, toc, MDXContent } = await getPage(slugs)

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

        {frontmatter.image && (
          <div className="relative mt-4 aspect-video w-full">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover shadow-md"
              priority
              fill
            />
          </div>
        )}
        <hr className="my-4" />

        <InlineTOC items={toc} />

        <MDXContent components={mdxComponents()} />
      </article>
    )
  } catch {
    return notFound()
  }
}

export async function generateStaticParams() {
  const pages = await Promise.all([getPages('blogs'), getPages('projects')])
  return pages.flat().map((page) => ({
    slugs: page.slug.split('/').filter(Boolean),
  }))
}

export const generateMetadata = async ({
  params,
}: PageProps<'/[...slugs]'>) => {
  const { slugs } = await params

  try {
    const { frontmatter, url } = await getPage(slugs)

    return createMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      keywords: ['content', 'blog', 'article', ...frontmatter.tags],
      openGraph: {
        images: [
          ...(frontmatter.image ? [frontmatter.image] : []),
          `/api/og?title=${frontmatter.title}&description=${frontmatter.description}`,
        ],
        url,
      },
    })
  } catch {
    notFound()
  }
}
