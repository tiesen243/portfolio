import type { NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/data'
import { seo } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata) => {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []

  return seo({
    title: project.name,
    description: project.description,
    image: [`/og?title=${project.name}&desc=${project.description}`, ...previousImages],
    url: `projects/${project.slug}`,
  })
}

const Page: NextPage<Props> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <article className="container prose prose-neutral my-4 max-w-screen-lg flex-1 dark:prose-invert prose-headings:mb-4 prose-p:my-2">
      <h1>{project.name}</h1>

      <ul className="flex gap-2 p-0">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
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
    </article>
  )
}

export default Page

export const generateStaticParams = async () =>
  projects.map((project) => ({
    slug: project.slug,
  }))
