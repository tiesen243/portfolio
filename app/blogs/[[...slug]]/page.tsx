import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'

import { Badge } from '@/components/ui/badge'
import { source } from '@/content/source'
import { seo } from '@/lib/seo'

export default async function Page({ params }: Props) {
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsDescription className="mb-0">
        Published on {page.data.publishedAt.toDateString()}
      </DocsDescription>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>

      <div className="flex gap-2">
        {page.data.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <ImageZoom
        src={
          page.data.image ?? `/api/og?title=${page.data.title}&description=${page.data.description}`
        }
        alt={page.data.title}
        width={1200}
        height={630}
        className="rounded-lg object-cover shadow-lg"
      />

      <hr />

      <DocsBody className="prose-code:font-mono prose-pre:font-mono">
        <MDX components={{ ...defaultMdxComponents, Tabs, Tab }} />
      </DocsBody>
    </DocsPage>
  )
}

interface Props {
  params: { slug?: string[] }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
  const blog = source.getPage(params.slug)
  if (!blog) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []

  return seo({
    title: blog.data.title,
    description: blog.data.description,
    url: blog.url,
    images: [
      blog.data.image ?? '',
      `/api/og?title=${blog.data.title}&description=${blog.data.description}`,
      ...previousImages,
    ],
  })
}

export const generateStaticParams = async () => source.generateParams()
