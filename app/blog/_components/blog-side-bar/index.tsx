import Link from 'next/link'

import { type Post } from '@/lib/actions/mdx'
import { BlogList } from './blog-list'
import { Toc } from './toc'

interface Props {
  post: Post
  posts: Post['meta'][]
  slug: string
}
export const BlogSideBar: React.FC<Props> = ({ post, posts, slug }) => (
  <section className="fixed z-50 hidden grid-cols-9 md:grid">
    <aside className="col-span-2 p-4">
      <Link href="/blog" className="text-xl font-medium">
        Blog | Tiesen
      </Link>
      <hr className="my-4" />
      <BlogList posts={posts} slug={slug} />
    </aside>

    <aside className="col-span-2 col-start-8 p-4 pl-0">
      <h2 className="pl-4 text-xl font-medium">Table of Contents</h2>
      <hr className="my-4 ml-4" />
      <Toc toc={post.toc} />
    </aside>
  </section>
)
