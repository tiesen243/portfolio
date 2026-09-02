import { Badge } from '@yuki/ui/components/badge'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@yuki/ui/components/card'
import { Typography } from '@yuki/ui/components/typography'
import Link from 'next/link'
import { useMemo } from 'react'

import { createMetadata } from '@/lib/metadata'
import { source } from '@/lib/source'
import { formatDate } from '@/lib/utils'

const TITLE = 'Blogs'
const DESCRIPTION =
  'Explore my blog posts where I share insights, tutorials, and thoughts on various topics related to web development, design, and technology.'

export default function BlogsPage() {
  const blogs = useMemo(
    () => source.getPages().filter((p) => p.url.startsWith('/blogs/')),
    []
  )

  return (
    <main className='flex flex-col gap-4 px-4 py-6 [grid-area:main] md:px-6 xl:px-8'>
      <Typography variant='h1'>{TITLE}</Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      {blogs.map((blog) => (
        <Link
          key={blog.url}
          href={blog.url}
          className='group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-none bg-transparent py-(--card-spacing) text-xs/relaxed text-card-foreground ring-0 ring-foreground/10 [--card-spacing:--spacing(4)] not-last:border-b has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none'
        >
          <CardHeader className='px-0'>
            <CardTitle className='underline-offset-4 group-hover/card:underline'>
              {blog.data.title}
            </CardTitle>
            <CardDescription className='my-1'>
              {formatDate(blog.data.publishedAt)}
            </CardDescription>
            <CardDescription>{blog.data.description}</CardDescription>
          </CardHeader>

          <CardContent className='flex flex-wrap items-center gap-2 px-0'>
            {blog.data.tags.map((tag) => (
              <Badge key={tag} variant='outline' className='rounded-md'>
                {tag}
              </Badge>
            ))}
          </CardContent>
        </Link>
      ))}
    </main>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    images: `/api/og?title=${encodeURIComponent(TITLE)}&description=${encodeURIComponent(DESCRIPTION)}`,
    url: '/blogs',
  },
})
