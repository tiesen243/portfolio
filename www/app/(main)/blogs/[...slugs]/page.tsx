import { getPage, getPages } from '@yuki/content'
import { Typography } from '@yuki/ui/typography'

import { mdxComponents } from '@/components/mdx'

export default async function BlogPage({
  params,
}: Readonly<{ params: Promise<{ slugs: string[] }> }>) {
  const { slugs } = await params
  const { frontmatter, MDXContent } = await getPage('blogs', slugs)

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
}

export async function generateStaticParams() {
  const pages = await getPages('blogs')
  return pages.map((page) => ({
    slugs: page.slug.split('/').filter(Boolean),
  }))
}
