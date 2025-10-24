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
    <article className='container flex min-h-[calc(100dvh-1.5rem)] max-w-[80ch] flex-col py-8'>
      <Typography variant='h3' component='h1'>
        {TITLE}
      </Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      <div className='mt-12 flex flex-col gap-8'>
        {pages.map((page) => (
          <Link
            key={page.slugs.join('/')}
            href={page.slugs.join('/') as '/blogs/[...slug]'}
            className='group/blog'
          >
            <div className='flex items-start justify-between gap-4'>
              <Typography
                variant='h4'
                component='h2'
                className='line-clamp-1 group-hover/blog:underline'
              >
                {page.frontmatter.title}
              </Typography>

              <Typography className='shrink-0 text-sm text-muted-foreground'>
                {formatDate(page.frontmatter.publishedAt)}
              </Typography>
            </div>

            <Typography className='line-clamp-3 text-muted-foreground'>
              {page.frontmatter.description}
            </Typography>

            <div className='mt-2 flex flex-wrap gap-1'>
              {page.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant='outline'>
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
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
    url: '/blogs',
  },
})
