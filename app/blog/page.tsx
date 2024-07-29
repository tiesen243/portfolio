import type { NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { getPages } from '@/content'

const Page: NextPage = () => {
  const blogs = getPages()

  return (
    <main className="container my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.url} blog={blog} />
      ))}
    </main>
  )
}

export default Page
