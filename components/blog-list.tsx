import Link from 'next/link'

import { blogsSource } from '@/lib/source'

export const BlogList: React.FC = () => {
  const blogs = blogsSource
    .getPages()
    .filter((page) => page.url !== '/blogs')
    .sort(
      (a, b) =>
        new Date(b.data.lastModified ?? '').getTime() -
        new Date(a.data.lastModified ?? '').getTime(),
    )

  return (
    <ul className="not-prose grid gap-6">
      {blogs.map((blog) => (
        <li key={blog.url}>
          <Link href={blog.url} className="group">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight group-hover:underline first:mt-0">
              {blog.data.title}
            </h2>
            <time className="text-fd-muted-foreground block text-sm">
              {new Date(blog.data.lastModified ?? '').toDateString()}
            </time>
            <p className="text-fd-foreground text-lg">
              {blog.data.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
