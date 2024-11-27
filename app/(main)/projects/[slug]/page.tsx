import type { NextPage, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, Github, Globe2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'
import { seo } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = ({ params }) => {
  const project = projects.find((project) => project.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="container flex flex-1 flex-col py-4">
      <Link href="/projects" className="mb-4 flex gap-2">
        <ChevronLeft /> All Projects
      </Link>

      <article className="prose-lg prose-neutral dark:prose-invert prose flex-1">
        <h1>{project.title}</h1>
        <p className="mb-2">{project.description}</p>

        <div>
          {project.tags.map((tag) => (
            <span key={tag} className="mr-2 rounded-full border px-2 py-1 text-sm">
              {tag}
            </span>
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
