import { type Post } from '@/lib/actions/mdx'
import { Toc } from './toc'
import { BlogList } from './blog-list'

interface Props {
  post: Post
  posts: Post['meta'][]
  slug: string
}
export const MobileSidebar: React.FC<Props> = ({ post, posts, slug }) => (
  <header className="fixed z-50 w-svw select-none border-b bg-background/70 py-2 shadow-lg backdrop-blur-xl md:hidden">
    <details className="container flex flex-col gap-2">
      <summary className="cursor-pointer list-none text-xl font-medium">Blog | Tiesen</summary>

      <details className="py-1 pl-2">
        <summary className="cursor-pointer list-none text-xl font-medium">Recent Posts</summary>
        <BlogList posts={posts} slug={slug} />
      </details>

      <details className="py-1 pl-2">
        <summary className="cursor-pointer list-none text-xl font-medium">
          Table of Contents
        </summary>
        <Toc toc={post.toc} />
      </details>

      <p className="mt-2 text-center text-muted-foreground">
        &copy; {new Date().getFullYear()} Tiesen. All rights reserved.
      </p>
    </details>
  </header>
)
