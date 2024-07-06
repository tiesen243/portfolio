import type { Metadata, NextPage } from 'next'
import Link from 'next/link'

import { PostCard } from '@/components/post-card'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getPosts } from '@/content'
import { baseUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

const description = 'A collection of blog posts on various topics.'
export const metadata: Metadata = {
  title: 'Blog',
  description,
  openGraph: {
    images: `/og?title=Blog&desc=${description}`,
    url: `${baseUrl}/blog`,
  },
  alternates: { canonical: `${baseUrl}/blog` },
}

interface Props {
  searchParams: { tag?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  const posts = await getPosts()

  const tags = posts.reduce((acc, post) => {
    post.meta.tags.forEach((tag) => {
      if (!acc.includes(tag)) acc.push(tag)
    })
    return acc
  }, [] as string[])

  const renderPosts = posts.filter((post) => {
    if (!searchParams.tag) return true
    return post.meta.tags.includes(searchParams.tag)
  })

  return (
    <main className="container mb-4 flex-1">
      <Breadcrumbs
        items={[
          { label: '~', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />

      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>

      <ul className="my-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className={cn(
              'rounded-lg bg-primary px-2 py-0.5 text-sm text-primary-foreground transition-all hover:bg-primary/80',
              searchParams.tag === tag && 'bg-yuki text-white',
            )}
          >
            <Link href={searchParams.tag === tag ? '/blog' : `/blog?tag=${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {renderPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <ScrollToTop />
    </main>
  )
}

export default Page
