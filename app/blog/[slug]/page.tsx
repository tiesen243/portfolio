import type { NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'

import { getPost, getPosts } from '@/lib/post'
import { seo } from '@/lib/seo'

const Page: NextPage<Props> = async ({ params }) => {
  const post = await getPost({ slug: params.slug })
  if (!post) return notFound()

  return (
    <article className="container prose prose-lg prose-neutral py-4 dark:prose-invert prose-pre:bg-transparent">
      <h1 className="mb-0">{post.meta.title}</h1>

      <span className="text-muted-foreground">
        {new Date(post.meta.publishedAt).toDateString()}
      </span>

      <p className="mt-0">{post.meta.description}</p>

      <ul className="m-0 flex list-none gap-x-2 p-0">
        {post.meta.tags.map((tag, idx) => (
          <Badge key={idx}>{tag}</Badge>
        ))}
      </ul>

      <Image
        src={post.meta.image!}
        alt={post.meta.slug}
        width={1200}
        height={630}
        className="rounded-lg object-cover shadow-lg"
      />

      <hr />

      {post.content}
    </article>
  )
}

export default Page

interface Props {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata) => {
  const post = await getPost({ slug: params.slug })
  if (!post) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []

  return seo({
    title: post.meta.title,
    description: post.meta.description,
    url: `blog/${params.slug}`,
    image: [post.meta.image!, ...previousImages],
  })
}

export const generateStaticParams = async () => {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
