import type { NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { getBaseUrl } from '@/lib/site'
import { projects } from '@/lib/data'
import { Badges } from '@/components/ui/badges'

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
      images: [`/api/og?title=${project.name}&desc=${project.preview}`, ...previousImages],
    },
    alternates: { canonical: `${getBaseUrl()}/projects/${project.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="container my-4 flex-1">
      <article className="prose prose-neutral dark:prose-invert prose-headings:mb-4 prose-p:my-2">
        <h1>{project.name}</h1>

        <Badges items={project.stack} className="mt-4" />

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
      </article>
    </main>
  )
}

export default Page

export const generateStaticParams = async () =>
  projects.map((project) => ({
    slug: project.slug,
  }))
