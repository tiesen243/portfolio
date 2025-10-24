import Image from 'next/image'
import { notFound } from 'next/navigation'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'

import { getPage, getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) notFound()

  const { frontmatter, toc, MDXContent } = page

  return (
    <article className='container flex min-h-[calc(100dvh-1.5rem)] max-w-prose flex-col py-8 font-sans'>
      <Typography variant='h2' component='h1'>
        {frontmatter.title}
      </Typography>

      <Typography className='text-muted-foreground'>
        {frontmatter.description}
      </Typography>

      <div className='mt-2 flex flex-wrap gap-1'>
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant='outline'>
            {tag}
          </Badge>
        ))}
      </div>

      <Typography className='mt-2 shrink-0 text-xs text-muted-foreground lg:text-sm'>
        {formatDate(frontmatter.publishedAt)}
      </Typography>

      {frontmatter.image && (
        <div className='relative mt-4 aspect-video w-full'>
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            sizes='(max-width: 768px) 100vw, 50vw'
            className='rounded-lg object-cover shadow-md'
            priority
            fill
          />
        </div>
      )}
      <hr className='my-4' />

      <InlineTOC items={toc} />

      <MDXContent components={mdxComponents()} />
    </article>
  )
}

export async function generateStaticParams() {
  const pages = await getPages()
  return pages.map((page) => ({ slugs: page.slugs }))
}

export const generateMetadata = async ({
  params,
}: PageProps<'/[...slugs]'>) => {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) notFound()

  const { frontmatter, url } = page

  return createMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: ['content', 'blog', 'article', ...frontmatter.tags],
    openGraph: {
      images: [
        ...(frontmatter.image ? [frontmatter.image] : []),
        `/api/og?title=${frontmatter.title}&description=${frontmatter.description}`,
      ],
      url,
    },
  })
}
