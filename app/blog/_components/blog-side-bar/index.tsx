import { type Post } from '@/lib/actions/mdx'
import { Toc } from './toc'

interface Props {
  post: Post
}

export const BlogSideBar: React.FC<Props> = ({ post }) => (
  <aside className="fixed inset-0 hidden w-1/5 p-4 xl:block">
    <h2 className="pl-4 text-xl font-medium">Table of Contents</h2>
    <hr className="my-4 ml-4" />
    <Toc toc={post.toc} />
  </aside>
)

export const MobileBlogSideBar: React.FC<Props> = ({ post }) => (
  <header className="fixed z-50 w-svw select-none border-b bg-background/70 py-2 shadow-lg backdrop-blur-xl xl:hidden">
    <details className="container flex flex-col gap-2">
      <summary className="cursor-pointer list-none text-xl font-medium">Table of Contents</summary>

      <Toc toc={post.toc} />

      <p className="mb-4 mt-2 text-center text-muted-foreground">
        &copy; {new Date().getFullYear()} Tiesen. All rights reserved.
      </p>
    </details>
  </header>
)
