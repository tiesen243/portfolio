import { notFound } from 'next/navigation'

import { getPage, getPages } from '@yuki/content'
import { Typography } from '@yuki/ui/typography'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'

export default async function BlogPage({
  params,
}: Readonly<{ params: Promise<{ slugs: string[] }> }>) {
  const { slugs } = await params

  try {
    const { frontmatter, MDXContent } = await getPage('projects', slugs)

    return (
      <article className="container flex flex-col gap-4 py-12">
        <Typography variant="h2" component="h1">
          {frontmatter.title}
        </Typography>
        <Typography className="text-muted-foreground">
          {frontmatter.description}
        </Typography>

        <hr />

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
}: Readonly<{ params: { slugs: string[] } }>) => {
  const { slugs } = params

  try {
    const { frontmatter, url } = await getPage('projects', slugs)

    return createMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        url,
        images: [
          `/api/og?title=${frontmatter.title}&description=${frontmatter.description}`,
        ],
      },
    })
  } catch {
    return notFound()
  }
}
