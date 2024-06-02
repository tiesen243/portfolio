import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import { PostHeader } from '@/components/post-header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getPost, getPosts } from '@/content'
import { baseUrl } from '@/lib/site'

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
    openGraph: { images: [meta.image, ...previousImages], url: `${baseUrl}/blog/${params.slug}` },
    alternates: { canonical: `${baseUrl}/blog/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { meta, content } = await getPost(params.slug)
  const view = await fetch(`${process.env.API}/api/view-count/${params.slug}?theme=no`, {
    cache: 'no-store',
  }).then((res) => res.text())

  return (
    <>
      <Breadcrumbs
        items={[
          { label: '~', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: meta.title, href: `/blog/${params.slug}` },
        ]}
      />

      <article>
        <PostHeader meta={meta} view={view} />

        <hr className="my-4" />

        {content}
      </article>

      <ScrollToTop />
    </>
  )
}

export default Page
