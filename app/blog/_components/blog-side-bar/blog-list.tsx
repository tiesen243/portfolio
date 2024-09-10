import Link from 'next/link'

import { type Post } from '@/lib/actions/mdx'
import { cn } from '@/lib/utils'

export const BlogList: React.FC<{ posts: Post['meta'][]; slug: string }> = ({ posts, slug }) => (
  <ul className="list-none p-0">
    {posts.map((post) => (
      <li
        key={post.slug}
        className={cn(
          'mb-1 line-clamp-1 cursor-pointer rounded-lg px-4 py-2 text-lg transition-colors ease-linear hover:bg-accent hover:text-accent-foreground',
          post.slug === slug && 'bg-accent text-accent-foreground',
        )}
      >
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </li>
    ))}
  </ul>
)
