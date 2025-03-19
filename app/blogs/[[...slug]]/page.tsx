import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'

import { source } from '@/content'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/lib/utils'

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const page = source.getPage(slug)
  if (!page) notFound()

  const jsonLd = generateJsonLd({ page })
  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      {jsonLd && (
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {page.data.image && (
        <Image
          src={page.data.image}
          width={1200}
          height={630}
          alt={page.data.title}
          className="rounded-lg object-cover shadow-md"
        />
      )}

      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Tabs, Tab }} />
      </DocsBody>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const { title, description } = page.data

  return createMetadata({
    title,
    description,
    openGraph: {
      images: [
        `/api/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description ?? '')}`,
      ],
      url: `/blogs/${params.slug}`,
    },
  })
}

const generateJsonLd = ({
  page,
}: {
  page: ReturnType<(typeof source)['getPage']>
}) => {
  if (!page) return null

  const { title, description, tags } = page.data

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    keywords: tags.join(', '),
    datePublished: page.data.publishedAt.toISOString(),
    image: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description ?? '')}`,
    url: `${getBaseUrl()}/${page.url}`,
    author: {
      '@type': 'Person',
      name: 'Tran Tien',
    },
  }
}
