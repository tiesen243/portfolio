import { getPages } from '@/lib/mdx'
import type { NextPage } from 'next'

import { BlogCard } from './_components/blog-card'
import { Nav } from './_components/nav'
import { getBaseUrl } from '@/lib/site'

interface Props {
  searchParams: { tag?: string }
}

const description =
  'A collection of my thoughts, ideas, and experiences. I love to write about things that matter. Check out my blogs!'
export const metadata = {
  title: 'Blog | Tiesen',
  description,
  openGraph: { images: `/api/og?title=Blog&desc=${description}`, url: `${getBaseUrl()}/blog` },
  alternates: { canonical: `${getBaseUrl()}/blog` },
}

const Page: NextPage<Props> = ({ searchParams }) => {
  const blogs = getPages()
  const tags = [...new Set(blogs.map((blog) => blog.data.tags).flat())]

  const renderBlogs = searchParams.tag
    ? blogs.filter((blog) => blog.data.tags.includes(searchParams.tag ?? ''))
    : blogs

  return (
    <main className="container my-4">
      <Nav tags={tags} currentTag={searchParams.tag} />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {renderBlogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </section>
    </main>
  )
}

export default Page
