import { notFound } from 'next/navigation'
import { GithubIcon, Globe2Icon } from 'lucide-react'

import { projects } from '@/data'
import { createMetadata } from '@/lib/metadata'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug?: string }>
}) {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)
  if (!project) notFound()

  return (
    <main className="container flex flex-1 flex-col py-4">
      <article className="prose-lg prose-neutral dark:prose-invert prose flex-1">
        <div className="inline-flex w-full items-center justify-between">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-sm">{project.date}</p>
        </div>
        <p
          className="leading-7 [&:not(:first-child)]:mt-6"
          dangerouslySetInnerHTML={{
            __html: project.description.replaceAll('\n', '<br/>'),
          }}
        />

        <div className="mt-4">
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <Globe2Icon className="mr-2" /> Visit Site
          </a>
        )}

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-8 items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-xs transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
          <GithubIcon className="mr-2" /> View Source
        </a>
      </div>
    </main>
  )
}

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }))

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string }>
}) {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)
  if (!project) return notFound()

  return createMetadata({
    title: project.title,
    description: project.preview,
    openGraph: {
      images: [
        `/api/og?title=${encodeURIComponent(project.title)}&description=${encodeURIComponent(project.preview)}`,
      ],
      url: `/projects/${project.slug}`,
    },
  })
}
