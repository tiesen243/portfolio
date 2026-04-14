import type { Metadata } from 'next'

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from '@fumadocs/base-ui/layouts/notebook/page'
import { createRelativeLink } from '@fumadocs/base-ui/mdx'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getMDXComponents } from '@/components/mdx'
import { createMetadata } from '@/lib/metadata'
import { appName, gitConfig } from '@/lib/shared'
import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source'
import { formatDate, getBaseUrl } from '@/lib/utils'

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDXContent = page.data.body
  const markdownUrl = getPageMarkdownUrl(page).url

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.data.title,
    description: page.data.description,
    url: page.url,
    author: {
      '@type': 'Person',
      name: 'Tiesen',
      url: 'https://tiesen.id.vn',
    },
    publisher: {
      '@type': 'Organization',
      name: appName,
      logo: {
        '@type': 'ImageObject',
        url: `${getBaseUrl()}/icon-512.png`,
      },
    },
    image: getPageImage(page).url,
  }

  return (
    <>
      <script
        type='application/ld+json'
        // oxlint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replaceAll('<', '\\u003c'),
        }}
      />

      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className='mb-0'>
          {formatDate(page.data.publishedAt)}
        </DocsDescription>
        <DocsDescription className='mb-0'>
          {page.data.description}
        </DocsDescription>
        {page.data.image && (
          <Image
            src={page.data.image}
            alt={page.data.title}
            className='my-4 rounded-md object-cover'
            width={1200}
            height={630}
            sizes='(max-width: 768px) 100vw, 1200px'
          />
        )}
        <div className='flex flex-row items-center gap-2 border-b pb-6'>
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/apps/web/content/${page.path}`}
          />
        </div>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(
  props: PageProps<'/[...slug]'>
): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  })
}
