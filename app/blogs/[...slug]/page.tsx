import '@/styles/shiki.css'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { compileMDX, parseFrontmatter } from '@fumadocs/mdx-remote'

import type { Frontmatter } from '@/content'
import { mdxComponents } from '@/components/mdx'
import { Toc } from '@/components/toc'
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

  const {
    frontmatter,
    body: MdxContent,
    toc,
  } = await compileMDX<Frontmatter>({
    filePath: page.path,
    source: page.content,
    mdxOptions: {
      rehypeCodeOptions: {
        themes: { light: 'github-light-default', dark: 'tokyo-night' },
      },
    },
  })

  return (
    <>
      <Toc toc={toc} />
      <article className="container flex w-full max-w-[860px] flex-1 flex-col p-4 lg:px-8">
        <mdxComponents.h1>{frontmatter.title}</mdxComponents.h1>
        <mdxComponents.p>{frontmatter.publishedAt.toString()}</mdxComponents.p>
        <mdxComponents.p>{frontmatter.description}</mdxComponents.p>
        <div className="mt-4 flex flex-wrap items-center">
          {frontmatter.tags.map((tag) => (
            <span key={tag} className="mr-2 rounded-full border px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
        {frontmatter.image && (
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1120}
            height={630}
            className="mt-8 rounded-lg shadow-lg"
          />
        )}

        <hr className="mt-8" />

        <MdxContent components={{ ...mdxComponents }} />
      </article>
    </>
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
