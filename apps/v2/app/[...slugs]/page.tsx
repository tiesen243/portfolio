import { InlineTOC } from '@fumadocs/base-ui/components/inline-toc'
import { notFound } from 'next/navigation'

import { CopyMarkdownButton } from '@/app/[...slugs]/_components/copy-markdown-button'
import { OpenButton } from '@/app/[...slugs]/_components/open-button'
import { getMDXComponents } from '@/components/mdx'
import { TerminalContent } from '@/components/terminal'
import { Badge } from '@/components/ui/badge'
import { Typography } from '@/components/ui/typography'
import { createMetadata } from '@/lib/create-metadata'
import { getPage, getPages } from '@/lib/source'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) return notFound()

  const { metadata, toc, content: Content, plain } = page

  return (
    <TerminalContent command={`cat ~/${slugs.join('/')}`}>
      <div className='mb-4 flex flex-col gap-2'>
        <Typography variant='h1' className='mt-2 mb-4'>
          {metadata.title}
        </Typography>
        <Typography className='text-sm text-muted-foreground'>
          {metadata.description}
        </Typography>
        <Typography className='flex flex-wrap items-center gap-2'>
          Tags:{' '}
          {metadata.tags.map((tag) => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
        </Typography>
        <Typography>Published at: {metadata.publishedAt}</Typography>
      </div>

      <div className='mb-4 flex items-center gap-2'>
        <CopyMarkdownButton
          content={`# ${metadata.title}

${metadata.description}

Tags: ${metadata.tags.join(', ')}

Published at: ${metadata.publishedAt}


${plain}`}
        />
        <OpenButton slugs={slugs} />
      </div>

      <InlineTOC items={toc} className='w-full rounded-none' />

      <article className='max-w-full [&>a]:hover:underline [&>h2]:my-4 [&>h3]:my-3 [&>h4]:my-2 [&>ol]:my-2 [&>p]:my-2 [&>ul]:my-2'>
        <Content components={getMDXComponents()} />
      </article>
    </TerminalContent>
  )
}

export async function generateMetadata({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) return notFound()

  const { metadata } = page

  return createMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    openGraph: {
      images: `/api/og?title=${encodeURIComponent(metadata.title)}&description=${encodeURIComponent(metadata.description)}`,
      url: `/${slugs.join('/')}`,
    },
  })
}

export async function generateStaticParams() {
  const [blogs, projects] = await Promise.all([
    getPages('blogs'),
    getPages('projects'),
  ])
  const pages = [...blogs, ...projects]

  return pages.map((page) => ({
    slugs: page.url.split('/').filter(Boolean),
  }))
}
