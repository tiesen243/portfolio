import type { NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { getBaseUrl } from '@/lib/site'
import { projects } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata) => {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []
  const previousKeywords = (await parent).keywords ?? []

  return {
    title: `${project.name} - Projects`,
    description: project.description,
    keywords: [...project.stack, ...previousKeywords],
    openGraph: {
      type: 'article',
      url: `${getBaseUrl()}/projects/${project.slug}`,
      images: [`/og?title=${project.name}&desc=${project.preview}`, ...previousImages],
    },
    alternates: { canonical: `${getBaseUrl()}/projects/${project.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="container my-4 flex-1">
      <h1 className="text-4xl font-bold">{project.name}</h1>

      <ul className="mt-4 flex items-center gap-2 whitespace-nowrap">
        {project.stack.map((tag) => (
          <li
            key={tag}
            className="inline-block cursor-default rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-x-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          View Source
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Demo
          </a>
        )}
      </div>

      <hr className="my-4" />

      <p className="text-lg">{project.description}</p>
    </main>
  )
}

export default Page

export const generateStaticParams = async () =>
  projects.map((project) => ({
    slug: project.slug,
  }))
