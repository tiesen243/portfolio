import { notFound } from 'next/navigation'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'

import { createMetadata, metadataImage } from '@/lib/metadata'
import { source } from '@/lib/source'

export default async (props: { params: Promise<{ slug?: string[] }> }) => {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Tabs, Tab }} />
      </DocsBody>
    </DocsPage>
  )
}

export const generateStaticParams = () => source.generateParams()

export const generateMetadata = async (props: {
  params: Promise<{ slug?: string[] }>
}) => {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return metadataImage.withImage(
    page.slugs,
    createMetadata({
      title: page.data.title,
      description: page.data.description,
      openGraph: { url: page.url }
    }),
  )
}
