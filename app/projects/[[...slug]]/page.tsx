import { notFound } from 'next/navigation'
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'
import { ExternalLinkIcon } from 'lucide-react'

import { GithubIcon } from '@/components/ui/icons'
import { createMetadata } from '@/lib/metadata'
import { projectsSource } from '@/lib/source'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = projectsSource.getPage(params.slug)
  if (!page) return notFound()

  const MDXContent = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <div className="flex items-center justify-between gap-2">
        {page.data.due && (
          <time className="text-fd-muted-foreground text-sm">
            {page.data.due}
          </time>
        )}
        {page.data.members >= 1 && (
          <p className="text-fd-muted-foreground text-sm">
            {page.data.members} members
          </p>
        )}
      </div>
      <ul className="flex gap-2">
        {page.data.tags.map((tag) => (
          <li
            key={tag}
            className="bg-fd-primary text-fd-primary-foreground rounded-md px-2 py-1 text-xs"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end gap-2">
        {page.data.live && (
          <a
            href={page.data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-fd-secondary flex items-center gap-2 rounded border px-2 py-1 text-xs transition-colors"
          >
            <ExternalLinkIcon className="size-4" />
            Live
          </a>
        )}
        {page.data.repo && (
          <a
            href={page.data.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-fd-secondary flex items-center gap-2 rounded border px-2 py-1 text-xs transition-colors"
          >
            <GithubIcon className="size-4" />
            Repository
          </a>
        )}
      </div>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(projectsSource, page),
          }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return projectsSource.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = projectsSource.getPage(params.slug)
  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: page.url,
      images: {
        url: `/api/og?title=${encodeURIComponent(
          page.data.title,
        )}&description=${encodeURIComponent(page.data.description)}`,
        alt: page.data.title,
      },
      type: 'article',
    },
  })
}
