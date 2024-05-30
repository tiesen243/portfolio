import type { NextPage } from 'next'

import { PostCard } from '@/components/post-card'
import { getPosts } from '@/contents'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ScrollToTop } from '@/components/scroll-to-top'

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
