import { DocsBody, DocsPage } from 'fumadocs-ui/page'
import type { NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getPage, getPages } from '@/content'
import { env } from '@/env'
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
    `/og?title=${blog.data.title}&desc=${blog.data.description}`,
    ...previousImages,
  ]

  return {
    title: blog.data.title,
    description: blog.data.description,
    openGraph: {
      images,
      type: 'article',
      url: `${getBaseUrl()}/${blog.url}`,
    },
    alternates: { canonical: `${getBaseUrl()}/${blog.url}` },
  }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const page = getPage(slug)
  if (!page) return notFound()

  const views = await fetch(`${env.API_URL}/view-count/${page.url.split('/').pop()}?theme=no`, {
    cache: 'no-store',
  }).then((res) => res.text())

  const MDX = page.data.exports.default

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      <DocsBody>
        <h1 className="mb-2">{page.data.title}</h1>
        <p className="mb-0 mt-2 text-muted-foreground">
          {page.data.date.toDateString()} • {views} views
        </p>
        <ul className="my-0 flex list-none gap-2">
          {page.data.tags.map((tag) => (
            <li
              key={tag}
              className="inline-block cursor-pointer whitespace-nowrap rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-0">{page.data.description}</p>
        <Image
          src={page.data.image}
          alt={page.url}
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
