import Image from 'next/image'
import Link from 'next/link'

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
    <article className="container flex min-h-[calc(100dvh-1.5rem)] flex-col gap-8 py-12">
      <div>
        <Typography variant="h3" component="h1">
          {TITLE}
        </Typography>
        <Typography className="text-muted-foreground">{DESCRIPTION}</Typography>
      </div>

      <section className="flex flex-col gap-4">
        <Typography variant="h4" component="h2">
          Featured Projects
        </Typography>

        {pages.map((page) => (
          <Link key={page.slug} href={page.url} className="group/project">
            <div className="flex items-start justify-between gap-4">
              <Typography
                variant="h4"
                component="h2"
                className="line-clamp-2 group-hover/project:underline"
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
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Typography variant="h4" component="h2" className="lg:col-span-2">
          Design Showcase
        </Typography>

        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`design-${image.split('/').pop()?.split('.')[0] ?? index}`}
            className="w-full rounded-lg object-cover"
            width={3000}
            height={1000}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    url: '/projects',
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
  },
})

const images = [
  '/assets/images/showcases/tiesen-v2.png',
  '/assets/images/showcases/goldenglow.png',
  '/assets/images/showcases/lin-yushia.png',
  '/assets/images/showcases/tiesen-v1.png',
]
