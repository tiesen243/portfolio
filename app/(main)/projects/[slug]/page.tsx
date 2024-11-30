import type { ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeftIcon, GithubIcon, Globe2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'
import { seo } from '@/lib/seo'

export default async ({ params }: { params: Promise<{ slug?: string }> }) => {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)
  if (!project) notFound()

  return (
    <main className="container flex flex-1 flex-col py-4">
      <Link href="/projects" className="mb-4 flex gap-2">
        <ChevronLeftIcon /> All Projects
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
              <Globe2Icon className="mr-2" /> Visit Site
            </a>
          </Button>
        )}

        <Button size="sm" variant="outline" asChild>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="mr-2" /> View Source
          </a>
        </Button>
      </div>
    </main>
  )
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug?: string }> },
  parent: ResolvingMetadata,
) {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)
  if (!project) return notFound()

  const previousImages = ((await parent).openGraph?.images ?? []) as string[]

  return seo({
    title: project.title,
    description: project.preview,
    url: `/projects/${project.slug}`,
    images: [`/api/og?title=${project.title}&description=${project.preview}`, ...previousImages],
  })
}

export const generateStaticParams = async () => projects.map((project) => ({ slug: project.slug }))
