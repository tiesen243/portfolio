import { getPage, getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) notFound()

  const { frontmatter, toc, MDXContent } = page

  return (
    <main className='container min-h-[calc(100dvh-1.5rem)] max-w-[100ch] pt-8 pb-12'>
      <Typography variant='h1'>{frontmatter.title}</Typography>
      <Typography className='shrink-0 text-xs text-muted-foreground lg:text-sm'>
        {formatDate(frontmatter.publishedAt)}
      </Typography>
      <Typography className='text-muted-foreground'>
        {frontmatter.description}
      </Typography>

      <div className='my-4 flex flex-wrap gap-2'>
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant='outline'>
            {tag}
          </Badge>
        ))}
      </div>

      {frontmatter.image && (
        <div className='relative mb-4 aspect-video w-full rounded-lg shadow-sm'>
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            sizes='(max-width: 768px) 100vw, 50vw'
            className='rounded-lg object-cover'
            priority
            fill
          />
        </div>
      )}

      <InlineTOC items={toc} />

      <hr className='my-4' />

      <article className='[&_figure]:mb-6 [&_p]:text-justify'>
        <MDXContent components={mdxComponents()} />
      </article>
    </main>
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
    description: frontmatter.description,
    keywords: ['content', 'blog', 'article', ...frontmatter.tags],
    openGraph: {
      images: [
        ...(frontmatter.image ? [frontmatter.image] : []),
        `/api/og?title=${frontmatter.title}&description=${frontmatter.description}`,
      ],
      url,
    },
    title: frontmatter.title,
  })
}
