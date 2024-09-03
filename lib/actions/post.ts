'use server'

import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

import { components } from '@/components/mdx'
import { client, urlFor, type Post as SanityPost } from '@/lib/actions/sanity.config'

export type Post = Omit<SanityPost, 'mainImage' | 'author' | 'body'> & {
  mainImage: { src: string; alt: string }
  author: Omit<SanityPost['author'], 'image'> & { image: string }
  body?: JSX.Element
}

const revalidate = 60 * 60

export const getPosts = async (): Promise<Post[]> => {
  const res = await client.fetch<Omit<SanityPost, 'body'>[]>(
    '*[_type == "post"] {_id, title, slug, description, mainImage, publishedAt, author->{_ref, _type, name, image}, categories[]->{_id, title}}',
    {},
    { next: { revalidate } },
  )

  const posts = res.map((post) => {
    const imageUrl = urlFor(post.mainImage).url()
    const authorImage = urlFor(post.author.image).url()

    return {
      ...post,
      mainImage: { src: imageUrl, alt: post.mainImage.alt },
      author: { ...post.author, image: authorImage },
    }
  })

  return posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export const getPost = async ({ slug }: { slug: string }): Promise<Post> => {
  const post = await client.fetch<SanityPost>(
    '*[_type == "post" && slug.current == $slug][0] {slug, title, description, publishedAt, mainImage, body, author->{_id, name, image}, categories[]->{_id, title}}',
    { slug },
    { next: { revalidate } },
  )

  const imageUrl = urlFor(post.mainImage).url()
  const authorImage = urlFor(post.author.image).url()

  const options: Options = {
    theme: { light: 'github-light-default', dark: 'github-dark-default' },
    keepBackground: false,
    bypassInlineCode: false,
  }

  const { content } = await compileMDX({
    source: post.body,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [[rehypePrettyCode, options]] },
    },
  })

  return {
    ...post,
    body: content,
    mainImage: { src: imageUrl, alt: post.mainImage.alt },
    author: { ...post.author, image: authorImage },
  }
}
