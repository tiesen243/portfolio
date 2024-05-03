import Image from 'next/image'
import Link from 'next/link'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { PostMeta } from '@/content'

export const BlogCard: React.FC<PostMeta & { lang: 'en' | 'vi' }> = (post) => (
  <Link href={`/blog/${post.lang}/${post.slug}`} passHref>
    <Card className="transition-colors ease-linear hover:bg-secondary">
      <CardHeader className="aspect-video w-full">
        <Image
          src={post.image ?? '/og.jpg'}
          alt={post.title}
          className="rounded-t-lg object-cover"
          fill
        />
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1 pt-4">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="line-clamp-1">{post.description}</CardDescription>
        <CardDescription className="text-sm text-muted-foreground">
          {post.date.toDateString()}
        </CardDescription>
      </CardFooter>
    </Card>
  </Link>
)
