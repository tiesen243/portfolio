import type { NextPage } from 'next'

import { BlogCard } from '@/app/blog/_components/blog-card'
import { Filters } from '@/app/blog/_components/filters'
import { getPosts } from '@/lib/post'
import { seo } from '@/lib/seo'

interface Props {
  searchParams: { tag: string }
}

export const metadata = seo({
  title: 'Blog',
  description: 'A collection of blog posts.',
  url: 'blog',
  image: '/og?title=Blog&desc=A collection of blog posts.',
})

const Page: NextPage<Props> = async ({ searchParams }) => {
  const posts = await getPosts()
  const tags = [...new Set(posts.map((blog) => blog.tags).flat())]

  const filteredPosts = searchParams.tag
    ? posts.filter((post) => post.tags.some((c) => c === searchParams.tag))
    : posts

  return (
    <main className="container flex-1 py-4">
      <Filters tags={tags} currentTag={searchParams.tag} />

      <section className="mt-4 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} blog={post} />
        ))}
      </section>
    </main>
  )
}

export default Page
