import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import type { Post } from '@/content'

export const PostHeader: React.FC<{ meta: Post['meta']; view: string }> = ({ meta, view }) => (
  <>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl">{meta.title}</h1>

    <p className="my-4 text-sm text-muted-foreground">
      {new Date(meta.date).toDateString()} • {view} views
    </p>
    <p>{meta.description}</p>

    <span className="my-4 flex items-center gap-1">
      {meta.tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </span>

    <Image
      src={meta.image}
      alt={meta.title}
      width={1920}
      height={1080}
      className="rounded-lg shadow-lg"
    />
  </>
)
