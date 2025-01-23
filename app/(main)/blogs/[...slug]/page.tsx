import '@/styles/shiki.css'

import { notFound } from 'next/navigation'
import { compileMDX, parseFrontmatter } from '@fumadocs/mdx-remote'

import type { Frontmatter } from '@/content'
import { mdxComponents } from '@/components/mdx'
import { frontmatterShema, getPage, getPages } from '@/content'
import { createMetadata } from '@/lib/metadata'

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await params).slug
  const page = await getPage(slug)
  if (!page) return notFound()

  const { frontmatter, body: MdxContent } = await compileMDX<Frontmatter>({
    filePath: page.path,
    source: page.content,
    mdxOptions: {
      rehypeCodeOptions: {
        themes: { light: 'github-light-default', dark: 'tokyo-night' },
      },
    },
  })

  return (
    <article className="container flex w-full max-w-[860px] flex-1 flex-col p-4 lg:px-8">
      <mdxComponents.h1>{frontmatter.title}</mdxComponents.h1>
      <mdxComponents.p>{frontmatter.description}</mdxComponents.p>
      <MdxContent components={{ ...mdxComponents }} />
    </article>
  )
}

export async function generateStaticParams() {
  return (await getPages()).map((page) => ({ slug: page.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = await getPage(params.slug)
  if (!page) notFound()

  const frontmatter = frontmatterShema.parse(parseFrontmatter(page.content).frontmatter)

  return createMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: [
        `/api/og?title=${encodeURIComponent(
          frontmatter.title,
        )}&description=${encodeURIComponent(frontmatter.description)}`,
      ],
      url: `/blogs/${params.slug}`,
    },
  })
}
