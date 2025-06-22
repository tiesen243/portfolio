import Link from 'next/link'

import { getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

const TITLE = 'Blogs'
const DESCRIPTION =
  'Explore my blog posts where I share insights, tutorials, and thoughts on various topics related to web development, design, and technology.'

export default async function BlogListPage() {
  const pages = await getPages('blogs')

  return (
    <article className="container flex min-h-[calc(100dvh-2rem)] flex-col gap-6 py-12">
      <div>
        <Typography variant="h3" component="h1">
          {TITLE}
        </Typography>
        <Typography className="text-muted-foreground">{DESCRIPTION}</Typography>
      </div>

      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link key={page.slug} href={page.url} className="group">
            <div className="flex items-start justify-between gap-4">
              <Typography
                variant="h4"
                component="h2"
                className="line-clamp-2 group-hover:underline"
              >
                {page.frontmatter.title}
              </Typography>

              <Typography className="text-muted-foreground shrink-0 text-sm">
                {formatDate(page.frontmatter.publishedAt)}
              </Typography>
            </div>

            <Typography className="text-muted-foreground line-clamp-3">
              {page.frontmatter.description}
            </Typography>

            <div className="mt-2 flex flex-wrap gap-1">
              {page.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </article>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['blogs', 'web development', 'design', 'technology'],
  openGraph: {
    url: '/blogs',
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
  },
})
