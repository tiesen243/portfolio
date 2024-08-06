import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { DocsBody, DocsPage } from 'fumadocs-ui/page'
import type { NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { Badges } from '@/components/ui/badges'
import { env } from '@/env'
import { getLastModifiedTime, getPage, getPages } from '@/lib/mdx'
import { getBaseUrl } from '@/lib/site'

interface Props {
  params: { slug?: string[] }
}

export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata) => {
  const blog = getPage(params.slug)
  if (!blog) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []
  const images = [
    blog.data.image,
    `/api/og?title=${blog.data.title}&desc=${blog.data.description}`,
    ...previousImages,
  ]

  return {
    title: blog.data.title,
    description: blog.data.description,
    keywords: blog.data.tags,
    openGraph: { images, type: 'article', url: `${getBaseUrl()}/${blog.url}` },
    alternates: { canonical: `${getBaseUrl()}/${blog.url}` },
  }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const blog = getPage(slug)
  if (!blog) return notFound()

  const lastModified = await getLastModifiedTime(blog.file.path).then((time) => new Date(time))
  const views = await fetch(`${env.API_URL}/view-count/${blog.url.split('/').pop()}?theme=no`, {
    cache: 'no-store',
  }).then((res) => res.text())

  const MDX = blog.data.exports.default

  return (
    <DocsPage toc={blog.data.exports.toc} full={blog.data.full}>
      <DocsBody>
        <h1 className="mb-2">{blog.data.title}</h1>
        <p className="mb-0 mt-2 text-muted-foreground">
          {lastModified.toDateString()} • {views} views
        </p>

        <Badges items={blog.data.tags} className="my-0" />

        <p className="mt-0">{blog.data.description}</p>

        <ImageZoom
          src={blog.data.image}
          alt={blog.url}
          width={1920}
          height={1080}
          className="rounded-lg object-cover shadow-lg"
        />

        <hr />

        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export default Page

export const generateStaticParams = async () =>
  getPages().map((page) => ({
    slug: page.slugs,
  }))
