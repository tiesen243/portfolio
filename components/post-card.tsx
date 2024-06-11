import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Post } from '@/content'

export const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Link href={`/blog/${post.slug}`} passHref>
    <Card className="flex h-full flex-col hover:bg-secondary">
      <CardHeader className="space-y-0 p-0 pb-6">
        <Image
          src={post.meta.image}
          alt={post.slug}
          width={1200}
          height={630}
          className="aspect-video rounded-t-lg object-cover"
        />
      </CardHeader>

      <CardContent className="flex-1">
        <CardTitle>{post.meta.title}</CardTitle>
        <CardDescription>{new Date(post.meta.date).toDateString()}</CardDescription>
        <CardDescription className="line-clamp-1">{post.meta.description}</CardDescription>
      </CardContent>

      <CardFooter className="gap-1 overflow-x-auto">
        {post.meta.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  </Link>
)
