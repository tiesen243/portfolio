import type { ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeftIcon, GithubIcon, Globe2Icon } from 'lucide-react'

import { projects } from '@/data'
import { createMetadata } from '@/lib/metadata'

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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <Globe2Icon className="mr-2" /> Visit Site
          </a>
        )}

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="border-input inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
          <GithubIcon className="mr-2" /> View Source
        </a>
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

  return createMetadata({
    title: project.title,
    description: project.preview,
    openGraph: {
      images: [
        `/api/og?title=${project.title}&description=${project.preview}`,
        ...previousImages,
      ],
      url: `/projects/${project.slug}`,
    },
  })
}

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }))
