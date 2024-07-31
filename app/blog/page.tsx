import type { NextPage } from 'next'
import Link from 'next/link'

import { BlogCard } from '@/components/blog-card'
import { getPages } from '@/content'

interface Props {
  searchParams: { tag?: string }
}

const Page: NextPage<Props> = ({ searchParams }) => {
  const blogs = getPages()
  const tags = [...new Set(blogs.map((blog) => blog.data.tags).flat())]

  const renderBlogs = searchParams.tag
    ? blogs.filter((blog) => blog.data.tags.includes(searchParams.tag ?? ''))
    : blogs

  return (
    <main className="container my-4">
      <nav className="mb-4 flex gap-4">
        <Link
          href="/blog"
          className={searchParams.tag ? 'text-muted-foreground hover:underline' : ''}
        >
          All
        </Link>

        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${tag}`}
            className={searchParams.tag === tag ? '' : 'text-muted-foreground hover:underline'}
          >
            {tag}
          </Link>
        ))}
      </nav>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {renderBlogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </section>
    </main>
  )
}

export default Page
