import Image from 'next/image'
import Link from 'next/link'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { env } from '@/env'
import { EyeIcon } from 'lucide-react'

interface Props {
  blog: {
    url: string
    data: { image: string; date: Date; title: string; description?: string }
  }
}

export const BlogCard: React.FC<Props> = async ({ blog }) => {
  const views = await fetch(`${env.API_URL}/view-count/${blog.url.split('/').pop()}?theme=no`).then(
    (res) => res.text(),
  )

  return (
    <Link href={blog.url} className="h-fit rounded-lg border shadow-lg hover:bg-secondary">
      <div className="aspect-video w-full">
        <Image src={blog.data.image} alt={blog.url} className="rounded-t-lg object-cover" fill />
        <span className="absolute bottom-2 right-2 flex items-center gap-2 rounded-md bg-black/20 px-2 py-1 text-sm text-white backdrop-blur-xl">
          <EyeIcon size={12} /> {views}
        </span>
      </div>

      <CardHeader>
        <CardDescription>{blog.data.date.toDateString()}</CardDescription>
        <CardTitle>{blog.data.title}</CardTitle>
        <CardDescription className="line-clamp-1">{blog.data.description}</CardDescription>
      </CardHeader>
    </Link>
  )
}
