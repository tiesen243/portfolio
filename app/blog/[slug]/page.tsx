import type { NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { getPost, getPosts } from '@/lib/actions/post'
import { seo } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const post = await getPost({ slug: params.slug })

  return (
    <article className="container prose prose-lg prose-neutral max-w-screen-lg flex-1 py-4 dark:prose-invert prose-code:font-mono">
      <h1 className="mb-0">{post.title}</h1>

      <div className="flex h-20 items-center gap-2">
        <Image
          src={post.author.image}
          alt={post.author.name}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="font-medium">{post.author.name}</span>
        <span className="text-muted-foreground">
          at {new Date(post.publishedAt).toDateString()}
        </span>
      </div>

      <p className="mt-0">{post.description}</p>

      <ul className="m-0 flex list-none gap-x-2 p-0">
        {post.categories.map((category) => (
          <Badge key={category._id}>{category.title}</Badge>
        ))}
      </ul>

      <Image
        src={post.mainImage.src}
        alt={post.mainImage.alt}
        width={1200}
        height={630}
        className="rounded-lg object-cover shadow-lg"
      />

      <hr />

      {post.body}
    </article>
  )
}

export default Page

export const generateMetadata = async ({ params }: Props, parent: ResolvingMetadata) => {
  const post = await getPost({ slug: params.slug })
  const previousImages = (await parent).openGraph?.images ?? []

  return seo({
    title: post.title,
    description: post.description,
    url: `blog/${params.slug}`,
    image: [post.mainImage.src, ...previousImages],
  })
}

export const generateStaticParams = async () => {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}
