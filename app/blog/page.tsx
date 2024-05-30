import type { Metadata, NextPage } from 'next'

import { PostCard } from '@/components/post-card'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getPosts } from '@/contents'
import { baseUrl } from '@/lib/site'

const description = 'A collection of blog posts on various topics.'
export const metadata: Metadata = {
  title: 'Blog',
  description,
  openGraph: { images: `/og?title=Blog&desc=${description}`, url: `${baseUrl}/blog` },
  alternates: { canonical: `${baseUrl}/blog` },
}

const Page: NextPage = async () => {
  const posts = await getPosts()
  return (
    <>
      <Breadcrumbs
        items={[
          { label: '~', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <ScrollToTop />
    </>
  )
}

export default Page
