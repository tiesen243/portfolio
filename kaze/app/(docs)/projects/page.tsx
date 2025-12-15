import Link from 'next/link'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

import { getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

const TITLE = 'Projects'
const DESCRIPTION =
  'Explore my projects where I showcase my work, experiments, and contributions to various open-source initiatives. Each project highlights my skills in web development, design, and problem-solving.'

export default async function ProjectListPage() {
  const pages = await getPages('projects')

  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] max-w-[100ch] flex-col pt-8 pb-12 text-lg'>
      <Typography variant='h1'>{TITLE}</Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      <section className='mt-12 flex flex-col gap-8'>
        <Typography variant='h2' className='mb-0'>
          Featured Projects
        </Typography>

        {pages.map((page) => (
          <Link
            key={page.slugs.join('/')}
            href={page.slugs.join('/') as '/projects/[...slug]'}
            className='group/project'
            aria-label={`View project: ${page.frontmatter.title}`}
          >
            <div className='flex items-start justify-between gap-4'>
              <Typography
                variant='h3'
                className='my-0 line-clamp-1 group-hover/project:underline'
              >
                {page.frontmatter.title}
              </Typography>

              <Typography className='shrink-0 text-sm text-muted-foreground'>
                {formatDate(page.frontmatter.publishedAt)}
              </Typography>
            </div>

            <Typography className='line-clamp-2 text-muted-foreground'>
              {page.frontmatter.description}
            </Typography>

            <div className='mt-2 flex flex-wrap gap-2'>
              {page.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant='outline'>
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <section className='mt-12 grid gap-8'>
        <Typography variant='h2' className='mb-0'>
          Design Showcase
        </Typography>

        {images.map((image, index) => (
          <ImageZoom
            key={image}
            src={image}
            alt={`design-${image.split('/').pop()?.split('.')[0] ?? index}`}
            className='w-full rounded-lg object-cover'
            width={3000}
            height={1000}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        ))}
      </section>
    </main>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['projects', 'web development', 'design', 'open-source'],
  openGraph: {
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
    url: '/projects',
  },
})

const images = [
  '/assets/images/designs/tiesen-v3.png',
  '/assets/images/designs/tiesen-v2.png',
  '/assets/images/designs/goldenglow.png',
  '/assets/images/designs/lin-yushia.png',
  '/assets/images/designs/tiesen-v1.png',
]
