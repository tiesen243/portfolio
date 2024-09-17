import type { NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Github, Globe2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { seo } from '@/lib/seo'
import { projects } from '../_data'

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = ({ params }) => {
  const project = projects.find((project) => project.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="container min-h-dvh max-w-screen-lg flex-1 py-4">
      <article className="prose prose-lg prose-neutral dark:prose-invert">
        <h1>{project.title}</h1>
        <p className="mb-2">{project.description}</p>

        <div>
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="mr-2 cursor-default">
              {tag}
            </Badge>
          ))}
        </div>
      </article>

      <div className="my-4 flex items-center justify-end gap-4">
        {project.link && (
          <Button size="sm" variant="default" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Globe2 className="mr-2" /> Visit Site
            </a>
          </Button>
        )}

        <Button size="sm" variant="outline" asChild>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2" /> View Source
          </a>
        </Button>
      </div>

      <ImageZoom
        src={`/api/og?title=${project.title}&description=${project.preview}`}
        alt={project.title}
        width={1200}
        height={630}
        className="rounded-lg shadow-lg"
      />
    </main>
  )
}

export default Page

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
  const project = projects.find((project) => project.slug === params.slug)
  if (!project) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []

  return seo({
    title: project.title,
    description: project.preview,
    url: `/projects/${project.slug}`,
    images: [`/api/og?title=${project.title}&description=${project.preview}`, ...previousImages],
  })
}

export const generateStaticParams = async () => projects.map((project) => ({ slug: project.slug }))
