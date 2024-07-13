import Image from 'next/image'
import Link from 'next/link'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { env } from '@/env'

interface Props {
  blog: {
    url: string
    data: {
      image: string
      date: Date
      title: string
      description?: string
    }
  }
}

export const BlogCard: React.FC<Props> = async ({ blog }) => {
  const views = await fetch(`${env.API_URL}/view-count/${blog.url.split('/').pop()}?theme=no`, {
    cache: 'no-store',
  }).then((res) => res.text())

  return (
    <Link href={blog.url} className="rounded-lg shadow-lg hover:bg-secondary">
      <div className="aspect-video w-full">
        <Image src={blog.data.image} alt={blog.url} className="rounded-t-lg object-cover" fill />
      </div>

      <CardHeader>
        <CardDescription>
          {blog.data.date.toDateString()} • {views} views
        </CardDescription>
        <CardTitle>{blog.data.title}</CardTitle>
        <CardDescription className="line-clamp-1">{blog.data.description}</CardDescription>
      </CardHeader>
    </Link>
  )
}
