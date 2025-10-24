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
    <article className='container flex min-h-[calc(100dvh-1.5rem)] max-w-[80ch] flex-col py-8'>
      <Typography variant='h3' component='h1'>
        {TITLE}
      </Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      <section className='mt-12 flex flex-col gap-8'>
        <Typography variant='h4' component='h2'>
          Featured Projects
        </Typography>

        {pages.map((page) => (
          <Link
            key={page.slugs.join('/')}
            href={page.slugs.join('/') as '/projects/[...slug]'}
            className='group/project'
          >
            <div className='flex items-start justify-between gap-4'>
              <Typography
                variant='h4'
                component='h2'
                className='line-clamp-1 group-hover/project:underline'
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
      </section>

      <section className='mt-12 grid gap-6'>
        <Typography variant='h4' component='h2'>
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
    </article>
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
  '/assets/images/showcases/tiesen-v2.png',
  '/assets/images/showcases/goldenglow.png',
  '/assets/images/showcases/lin-yushia.png',
  '/assets/images/showcases/tiesen-v1.png',
]
