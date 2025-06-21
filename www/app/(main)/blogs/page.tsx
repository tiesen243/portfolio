import Link from 'next/link'

import { getPages } from '@yuki/content'
import { Typography } from '@yuki/ui/typography'

export default async function BlogListPage() {
  const pages = await getPages('blogs')
  return (
    <article className="container flex flex-col gap-6 py-12">
      <Typography variant="h3" component="h1">
        Blog Posts
      </Typography>
      <Typography className="text-muted-foreground">
        Explore my blog posts where I share insights, tutorials, and thoughts on
        various topics related to web development, design, and technology.
      </Typography>

      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/blogs/${page.slug}`}
            className="border-b pb-4"
          >
            <Typography variant="h4" component="h2">
              {page.frontmatter.title}
            </Typography>
            <Typography className="text-muted-foreground">
              {page.frontmatter.description}
            </Typography>
          </Link>
        ))}
      </div>
    </article>
  )
}
