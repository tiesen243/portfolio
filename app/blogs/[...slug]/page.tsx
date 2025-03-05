import '@/styles/shiki.css'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX, parseFrontmatter } from '@fumadocs/mdx-remote'
import { findNeighbour } from 'fumadocs-core/server'
import * as Base from 'fumadocs-core/toc'
import { AlignLeftIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import type { Frontmatter } from '@/content'
import { mdxComponents } from '@/components/mdx'
import { Badge } from '@/components/ui/badge'
import { frontmatterShema, getPage, getPages } from '@/content'
import { createMetadata } from '@/lib/metadata'

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return notFound()

  const pages = await getPages()

  const { previous, next } = findNeighbour(
    {
      name: 'Blogs',
      children: pages.map((p) => ({
        type: 'page',
        name: p.frontmatter.title,
        url: `/blogs/${p.slug.join('/')}`,
      })),
    },
    `/blogs/${slug.join('/')}`,
  )

  const {
    frontmatter,
    body: MdxContent,
    toc,
  } = await compileMDX<Frontmatter>({
    filePath: page.path,
    source: page.content,
    mdxOptions: {
      rehypeCodeOptions: {
        themes: { light: 'github-light-high-contrast', dark: 'vesper' },
      },
    },
  })

  return (
    <main className="mx-auto max-w-[calc(100svh-16rem)]">
      <Base.AnchorProvider toc={toc}>
        <div className="fixed top-4 right-4 hidden h-full w-64 max-w-full flex-col gap-3 pe-3 xl:flex">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <AlignLeftIcon className="size-4" />
            <p>On this page</p>
          </div>
          {toc.map((item) => (
            <Base.TOCItem
              key={item.url}
              href={item.url}
              className={`text-muted-foreground data-[active=true]:text-foreground pl-${item.depth * 2}`}
            >
              {item.title}
            </Base.TOCItem>
          ))}
        </div>
      </Base.AnchorProvider>

      <article className="flex flex-col px-6 py-4">
        <mdxComponents.h1>{frontmatter.title}</mdxComponents.h1>
        <mdxComponents.p>{frontmatter.publishedAt.toDateString()}</mdxComponents.p>
        <mdxComponents.p>{frontmatter.description}</mdxComponents.p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
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

      <nav className="flex justify-between border-t px-6 py-8">
        {previous ? (
          <Link
            href={previous.url}
            className="text-muted-foreground hover:text-foreground flex flex-col items-start"
          >
            <span className="ml-8">Previous</span>
            <div className="flex items-center gap-2">
              <ChevronLeftIcon />
              <span className="text-foreground">
                {String(previous.name as unknown).length > 20
                  ? String(previous.name as unknown).slice(0, 20) + '...'
                  : previous.name}
              </span>
            </div>
          </Link>
        ) : (
          <a />
        )}

        {next ? (
          <Link
            href={next.url}
            className="text-muted-foreground hover:text-foreground flex flex-col items-end"
          >
            <span className="mr-8">Next</span>
            <div className="flex items-center gap-2">
              <span className="text-foreground">
                {String(next.name as unknown).length > 20
                  ? String(next.name as unknown).slice(0, 20) + '...'
                  : next.name}
              </span>
              <ChevronRightIcon />
            </div>
          </Link>
        ) : (
          <a />
        )}
      </nav>
    </main>
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
    keywords: frontmatter.tags,
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
