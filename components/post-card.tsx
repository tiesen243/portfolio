import Link from 'next/link'

import type { Post } from '@/content'
import Image from 'next/image'
import { CardDescription, CardTitle } from './ui/card'

export const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Link href={`/blog/${post.slug}`} className="w-full rounded-lg shadow-lg hover:bg-secondary">
    <div className="aspect-video w-full">
      <Image
        src={post.meta.image}
        alt={post.meta.title}
        className="rounded-t-lg object-cover"
        fill
      />
    </div>

    <div className="p-4">
      <small className="mb-2 flex gap-2">
        {post.meta.tags.map((tag, idx) => (
          <p key={idx}>{tag}</p>
        ))}
      </small>

      <CardTitle>{post.meta.title}</CardTitle>
      <CardDescription className="mt-2 line-clamp-1">{post.meta.description}</CardDescription>

      <small className="text-xs text-muted-foreground">
        {new Date(post.meta.date).toDateString()}
      </small>
    </div>
  </Link>
)
