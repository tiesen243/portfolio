import { ImageZoom } from '@fumadocs/base-ui/components/image-zoom'
import { Badge } from '@yuki/ui/components/badge'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@yuki/ui/components/card'
import { Typography } from '@yuki/ui/components/typography'
import Link from 'next/link'
import { useMemo } from 'react'

import data from '@/data' with { type: 'json' }
import { createMetadata } from '@/lib/metadata'
import { source } from '@/lib/source'
import { formatDate } from '@/lib/utils'

const TITLE = 'Projects'
const DESCRIPTION =
  "Discover my projects, showcasing a range of applications and tools I've built. Each project includes a description, key features, and the technologies used, providing insight into my work and expertise in web development and design."

export default function BlogsPage() {
  const projects = useMemo(
    () => source.getPages().filter((p) => p.url.startsWith('/projects/')),
    []
  )

  return (
    <main className='flex flex-col gap-4 px-4 py-6 [grid-area:main] md:px-6 xl:px-8'>
      <Typography variant='h1'>{TITLE}</Typography>
      <Typography className='text-muted-foreground'>{DESCRIPTION}</Typography>

      <section id='applications'>
        <Typography variant='h2'>Applications</Typography>
        <Typography className='text-muted-foreground'>
          Explore my application projects, where I demonstrate my skills in
          building functional and user-friendly applications. These projects
          highlight my ability to solve real-world problems through innovative
          solutions and effective use of technology.
        </Typography>

        {projects.map((project) => (
          <Link
            key={project.url}
            href={project.url}
            className='group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-none bg-transparent py-(--card-spacing) text-xs/relaxed text-card-foreground ring-0 ring-foreground/10 [--card-spacing:--spacing(4)] not-last:border-b has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none'
          >
            <CardHeader className='px-0'>
              <CardTitle className='underline-offset-4 group-hover/card:underline'>
                {project.data.title}
              </CardTitle>
              <CardDescription className='my-1'>
                {formatDate(project.data.publishedAt)}
              </CardDescription>
              <CardDescription>{project.data.description}</CardDescription>
            </CardHeader>

            <CardContent className='flex flex-wrap items-center gap-2 px-0'>
              {project.data.tags.map((tag) => (
                <Badge key={tag} variant='outline' className='rounded-md'>
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Link>
        ))}
      </section>

      <section id='designs' className='[&_img]:mt-4'>
        <Typography variant='h2'>Designs</Typography>
        <Typography className='text-muted-foreground'>
          Take a look at some of the social media cover photos I&apos;ve
          designed. These graphics showcase my creativity and attention to
          detail, focusing on creating visually appealing assets to enhance
          personal branding and online presence.
        </Typography>

        {data.designs.map((design) => (
          <ImageZoom
            key={design}
            src={`/assets/designs/${design}.png`}
            alt='Design project'
            width={3000}
            height={1000}
            className='rounded-lg border object-cover'
          />
        ))}
      </section>
    </main>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    images: `/api/og?title=${encodeURIComponent(TITLE)}&description=${encodeURIComponent(DESCRIPTION)}`,
    url: '/projects',
  },
})
