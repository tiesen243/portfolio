import Image from 'next/image'
import Link from 'next/link'

import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import type { Post } from '@/content'
import { Badge } from './ui/badge'

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <Card className="group aspect-video">
        <Image
          src={post.meta.image}
          alt={post.slug}
          className="aspect-video rounded-lg object-cover drop-shadow-lg"
          fill
        />

        <div className="absolute bottom-0 left-0 z-10 w-fit rounded-lg p-4">
          <CardTitle className="rounded-lg bg-white/20 px-4 py-2 text-white backdrop-blur-xl">
            <span className="line-clamp-1">{post.meta.title}</span>
          </CardTitle>
        </div>

        <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between rounded-lg bg-background/40 p-4 opacity-0 backdrop-blur-xl transition-opacity group-hover:opacity-100">
          <CardDescription>{post.meta.description}</CardDescription>

          <div>
            {post.meta.tags.map((tag) => (
              <Badge key={tag} className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}
