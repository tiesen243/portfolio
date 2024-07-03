import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import { PostHeader } from '@/components/post-header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getPost, getPosts } from '@/content'
import { baseUrl } from '@/lib/site'
import { getViews } from '@/lib/actions'

interface Props {
  params: { slug: string }
}

export const generateStaticParams = async () => {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { meta } = await getPost(params.slug)
  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [meta.image, ...previousImages],
      url: `${baseUrl}/blog/${params.slug}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { meta, content } = await getPost(params.slug)
  const views = await getViews(params.slug)

  return (
    <>
      <Breadcrumbs
        items={[
          { label: '~', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: meta.title, href: `/blog/${params.slug}` },
        ]}
      />

      <PostHeader meta={meta} views={views} />

      <article>{content}</article>

      <ScrollToTop />
    </>
  )
}

export default Page
