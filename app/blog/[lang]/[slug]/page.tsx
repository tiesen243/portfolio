import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ScrollToTop } from '@/components/scroll-to-top'
import { Badge } from '@/components/ui/badge'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { Typography } from '@/components/ui/typography'
import { getPost, getPosts } from '@/content'
import { baseUrl } from '@/lib/site'

interface Props {
  params: { lang: 'en' | 'vi'; slug: string }
}

export const generateStaticParams = async () => {
  const en = await getPosts('en')
  const vi = await getPosts('vi')

  return [
    ...en.map((post) => ({ lang: 'en', slug: post.slug })),
    ...vi.map((post) => ({ lang: 'vi', slug: post.slug })),
  ]
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { lang, slug } = params
  const { meta } = await getPost(lang, `${slug}.mdx`)

  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      images: [meta.image, ...previousImages],
      url: `${baseUrl}/blog/${lang}/${params.slug}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${lang}/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { lang, slug } = params
  const { content, meta } = await getPost(lang, `${slug}.mdx`)
  if (!meta.title) return notFound()

  return (
    <>
      <div className="flex items-center justify-between">
        <BreadCrumbs
          className="top list-none"
          items={[
            { name: '~', href: '/#about' },
            { name: 'Blog', href: `/blog/${lang}` },
            { name: meta.title, href: `/blog/${lang}/${slug}` },
          ]}
        />

        {meta.hasMultipleLang && (
          <Typography
            variant="link"
            href={`/blog/${lang === 'en' ? 'vi' : 'en'}/${slug}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {lang === 'en' ? 'Tiếng Việt' : 'English'}
          </Typography>
        )}
      </div>

      <article className="mx-auto flex max-w-screen-md flex-col items-center">
        <Typography variant="h1">{meta.title}</Typography>
        <Typography className="text-muted-foreground [&:not(:first-child)]:mt-0">
          {meta.date.toDateString()}
        </Typography>
        <Typography className="[&:not(:first-child)]:mt-0">{meta.description}</Typography>
      </article>

      <section className="my-2 flex cursor-default select-none items-center justify-center gap-2">
        {meta.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </section>

      <article className="mx-auto max-w-screen-md">
        <Image
          src={meta.image}
          width={1920}
          height={1080}
          alt={meta.title}
          className="rounded-lg"
        />

        {content}
      </article>

      <ScrollToTop />
    </>
  )
}

export default Page
