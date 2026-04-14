import { ImageZoom } from '@fumadocs/base-ui/components/image-zoom'
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
import { designs } from '@/lib/data/showcases'
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
          <Card
            key={project.url}
            className='group/project-card rounded-none bg-transparent ring-0 not-last:border-b'
            render={<Link href={project.url} />}
          >
            <CardHeader className='px-0'>
              <CardTitle className='underline-offset-4 group-hover/project-card:underline'>
                {project.data.title}
              </CardTitle>
              <CardDescription className='my-1'>
                {formatDate(project.data.publishedAt)}
              </CardDescription>
              <CardDescription>{project.data.description}</CardDescription>
            </CardHeader>

            <CardContent className='flex flex-wrap items-center gap-2 px-0'>
              {project.data.tags.map((tag) => (
                <Badge key={tag} variant='outline'>
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
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

        {designs.map((design) => (
          <ImageZoom
            key={design}
            src={design}
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
    url: '/projects',
    images: [`/api/og?title=${TITLE}&description=${DESCRIPTION}`],
  },
})
