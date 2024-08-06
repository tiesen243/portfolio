import { Badges } from '@/components/ui/badges'
import { getLastModifiedTime } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

interface Blog {
  url: string
  data: {
    title: string
    description?: string
    tags: string[]
    image: string
  }
  file: { path: string }
}

export const BlogCard: React.FC<{ blog: Blog }> = async ({ blog }) => {
  const lastModified = await getLastModifiedTime(blog.file.path).then((time) => new Date(time))

  return (
    <Link
      key={blog.url}
      href={blog.url}
      className="rounded-lg border bg-card shadow-md hover:bg-secondary"
    >
      <Image
        src={blog.data.image}
        alt={blog.data.title}
        width={1200}
        height={630}
        className="aspect-video rounded-t-lg object-cover"
      />

      <div className="flex flex-col gap-1 p-4">
        <time className="text-muted-foreground">{lastModified.toDateString()}</time>
        <h2 className="line-clamp-1 scroll-m-20 text-2xl font-semibold tracking-tight">
          {blog.data.title}
        </h2>
        <p className="line-clamp-1 text-sm leading-7 text-muted-foreground">
          {blog.data.description}
        </p>
        <Badges items={blog.data.tags} />
      </div>
    </Link>
  )
}
