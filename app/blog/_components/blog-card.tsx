import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import type { Post } from '@/lib/post'

export const BlogCard: React.FC<{ blog: Post['meta'] }> = ({ blog }) => (
  <Link
    href={`/blog/${blog.slug}`}
    className="rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-secondary"
  >
    <Image src={blog.image!} alt={blog.slug} width={1200} height={630} className="rounded-t-lg" />

    <div className="flex flex-col gap-2 p-6 pt-4">
      <span className="text-muted-foreground">{new Date(blog.publishedAt).toDateString()}</span>
      <h3 className="line-clamp-1 text-2xl font-semibold leading-none tracking-tight">
        {blog.title}
      </h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">{blog.description}</p>
      <ul className="flex items-center gap-2">
        {blog.tags.map((tag, idx) => (
          <Badge key={idx}>{tag}</Badge>
        ))}
      </ul>
    </div>
  </Link>
)
