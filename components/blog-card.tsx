import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { env } from '@/env'
import { getLastModifiedTime } from '@/lib/utils'

interface Props {
  blog: {
    url: string
    data: { image: string; date: Date; title: string; description?: string; tags: string[] }
    file: { path: string }
  }
}

export const BlogCard: React.FC<Props> = async ({ blog }) => {
  const lastModified = await getLastModifiedTime(blog.file.path).then((time) => new Date(time))
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
        <CardDescription>{lastModified.toDateString()}</CardDescription>
        <CardTitle>{blog.data.title}</CardTitle>
        <CardDescription className="line-clamp-1">{blog.data.description}</CardDescription>

        <ul className="my-0 flex list-none gap-2">
          {blog.data.tags.map((tag) => (
            <li
              key={tag}
              className="inline-block whitespace-nowrap rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </CardHeader>
    </Link>
  )
}
