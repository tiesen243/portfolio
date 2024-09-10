import type { NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { BlogSideBar } from '@/app/blog/_components/blog-side-bar'
import { Badge } from '@/components/ui/badge'

import { getPost, getPosts } from '@/lib/actions/mdx'
import { seo } from '@/lib/seo'
import { MobileSidebar } from '../_components/blog-side-bar/moblile'

const Page: NextPage<Props> = async ({ params }) => {
  const post = await getPost({ slug: params.slug })
  if (!post) return notFound()

  const posts = await getPosts()

  return (
    <main>
      <BlogSideBar post={post} posts={posts} slug={params.slug} />
      <MobileSidebar post={post} posts={posts} slug={params.slug} />

      <section className="mt-10 grid-cols-9 md:mt-0 md:grid">
        <article className="container prose prose-lg prose-neutral max-w-screen-lg py-4 dark:prose-invert md:col-span-5 md:col-start-3">
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
      </section>
    </main>
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
