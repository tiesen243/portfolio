import type { Metadata, NextPage } from 'next'

import { PostHeader } from '@/components/post-header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getPost, getPosts } from '@/contents'

interface Props {
  params: { slug: string }
}

export const generateStaticParams = async () => {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getPost(params.slug)
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { images: meta.image, url: `/blog/${params.slug}` },
    alternates: { canonical: `/blog/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { meta, content } = await getPost(params.slug)
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
        <PostHeader meta={meta} />

        <hr className="my-4" />

        {content}
      </article>

      <ScrollToTop />
    </>
  )
}

export default Page
