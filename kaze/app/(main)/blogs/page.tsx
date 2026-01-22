import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'
import Link from 'next/link'

import { createMetadata } from '@/lib/metadata'
import { source } from '@/lib/source'
import { formatDate } from '@/lib/utils'

const TITLE = 'Blogs'
const DESCRIPTION =
  'Explore my blog posts where I share insights, tutorials, and thoughts on various topics related to web development, design, and technology.'

export default function BlogListPage() {
  const pages = source.getPages()

  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] max-w-[100ch] flex-col pt-8 pb-12 text-lg'>
      <Typography variant='h1'>{TITLE}</Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      <div className='mt-12 flex flex-col gap-8'>
        {pages
          .filter((page) => page.url.startsWith('/blogs'))
          .map((page) => (
            <Link
              key={page.slugs.join('/')}
              href={page.slugs.join('/') as '/blogs/[...slug]'}
              className='group/blog'
              aria-label={`Read blog post: ${page.data.title}`}
            >
              <div className='flex items-start justify-between gap-4'>
                <Typography
                  variant='h2'
                  className='my-0 line-clamp-1 group-hover/blog:underline'
                >
                  {page.data.title}
                </Typography>

                <Typography className='shrink-0 text-sm text-muted-foreground'>
                  {formatDate(page.data.publishedAt)}
                </Typography>
              </div>

              <Typography className='line-clamp-2 text-muted-foreground'>
                {page.data.description}
              </Typography>

              <div className='mt-2 flex flex-wrap gap-2'>
                {page.data.tags.map((tag) => (
                  <Badge key={tag} variant='outline'>
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
      </div>
    </main>
  )
}

export const metadata = createMetadata({
  description: DESCRIPTION,
  keywords: ['blogs', 'web development', 'design', 'technology'],
  openGraph: {
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
    url: '/blogs',
  },
  title: TITLE,
})
