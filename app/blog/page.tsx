import type { NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { getPages } from '@/content'
import { baseUrl } from '@/lib/site'

const description = 'A collection of my blog posts from various topics'
export const metadata = {
  title: 'Blog',
  description,
  openGraph: { images: `/og?title=Blog&desc=${description}`, url: `${baseUrl}/blog` },
  alternates: { canonical: `${baseUrl}/projects` },
}

const Page: NextPage = () => {
  const blogs = getPages()

  return (
    <main className="container my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.url} blog={blog} />
      ))}
    </main>
  )
}

export default Page
