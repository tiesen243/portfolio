import Link from 'next/link'
import { useMemo } from 'react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { createMetadata } from '@/lib/metadata'
import { source } from '@/lib/source'
import { formatDate } from '@/lib/utils'

const TITLE = 'Blogs'
const DESCRIPTION =
  'Explore my blog posts where I share insights, tutorials, and thoughts on various topics related to web development, design, and technology.'

export default function BlogsPage() {
  const blogs = useMemo(
    () => source.getPages().filter((p) => p.url.startsWith('/blogs')),
    []
  )

  return (
    <main className='flex flex-col gap-4 px-4 py-6 [grid-area:main] md:px-6 xl:px-8'>
      <Typography variant='h1'>{TITLE}</Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      {blogs.map((blog) => (
        <Card
          key={blog.url}
          className='group/blog-card rounded-none bg-transparent ring-0 not-last:border-b'
          render={<Link href={blog.url} />}
        >
          <CardHeader className='px-0'>
            <CardTitle className='underline-offset-4 group-hover/blog-card:underline'>
              {blog.data.title}
            </CardTitle>
            <CardDescription className='my-1'>
              {formatDate(blog.data.publishedAt)}
            </CardDescription>
            <CardDescription>{blog.data.description}</CardDescription>
          </CardHeader>

          <CardContent className='flex flex-wrap items-center gap-2 px-0'>
            {blog.data.tags.map((tag) => (
              <Badge key={tag} variant='outline'>
                {tag}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </main>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    url: '/blogs',
    images: [`/api/og?title=${TITLE}&description=${DESCRIPTION}`],
  },
})
