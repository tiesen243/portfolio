import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import { notFound } from 'next/navigation'

import { mdxComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { source } from '@/lib/source'
import { formatDate, getBaseUrl } from '@/lib/utils'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = source.getPage(slugs)
  if (!page) notFound()

  const { data } = page

  const MDXContent = data.body
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    image: data.image,
    inLanguage: 'en-US',
    keywords: data.tags.join(', '),
    datePublished: new Date(data.publishedAt).toISOString(),
    dateModified: new Date(data.publishedAt).toISOString(),
    author: { '@type': 'Person', name: 'Tiesen', url: getBaseUrl() },
    publisher: {
      '@type': 'Organization',
      name: 'Tiesen',
      logo: { '@type': 'ImageObject', url: `${getBaseUrl()}/logo.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${getBaseUrl()}${page.url}`,
    },
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replaceAll('<', '\\u003c'),
        }}
      />

      <main className='container min-h-[calc(100dvh-1.5rem)] max-w-[100ch] pt-8 pb-12'>
        <Typography variant='h1'>{data.title}</Typography>
        <Typography className='shrink-0 text-xs text-muted-foreground lg:text-sm'>
          {formatDate(data.publishedAt)}
        </Typography>
        <Typography className='text-muted-foreground'>
          {data.description}
        </Typography>

        <div className='my-4 flex flex-wrap gap-2'>
          {data.tags.map((tag) => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
        </div>

        {data.image && (
          <div className='relative mb-4 aspect-video w-full rounded-lg shadow-sm'>
            <ImageZoom
              src={data.image}
              alt={data.title}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='rounded-lg object-cover'
              width={1200}
              height={630}
            />
          </div>
        )}

        <InlineTOC items={data.toc} suppressHydrationWarning />

        <hr className='my-4' />

        <article className='[&_p]:text-justify [&:not(div)>figure]:mb-6'>
          <MDXContent components={mdxComponents()} />
        </article>
      </main>
    </>
  )
}

export function generateStaticParams() {
  const pages = source.getPages()
  return pages.map((page) => ({ slugs: page.slugs }))
}

export const generateMetadata = async ({
  params,
}: PageProps<'/[...slugs]'>) => {
  const { slugs } = await params

  const page = source.getPage(slugs)
  if (!page) notFound()

  const { data, url } = page

  return createMetadata({
    title: data.title,
    description: data.description,
    keywords: ['content', 'blog', 'article', ...data.tags],
    openGraph: {
      images: [
        ...(data.image ? [data.image] : []),
        `/api/og?title=${data.title}&description=${data.description}`,
      ],
      url,
    },
  })
}
