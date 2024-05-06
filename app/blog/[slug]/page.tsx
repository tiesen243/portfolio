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
  params: { slug: string }
  searchParams: { lang: 'en' | 'vi' }
}

export const generateStaticParams = async () => {
  const en = await getPosts('en')
  const vi = await getPosts('vi')

  return [
    ...en.map((post) => ({ slug: `${post.slug}?lang=en` })),
    ...vi.map((post) => ({ slug: `${post.slug}?lang=vi` })),
  ]
}

export const generateMetadata = async (
  { params: { slug }, searchParams: { lang } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { meta } = await getPost(lang, `${slug}.mdx`)

  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      images: [meta.image, ...previousImages],
      url: `${baseUrl}/blog/${slug}?lang=${lang}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${lang}/${slug}` },
  }
}

const Page: NextPage<Props> = async ({ params: { slug }, searchParams: { lang } }) => {
  const { content, meta } = await getPost(lang, `${slug}.mdx`)
  if (!meta.title) return notFound()

  return (
    <>
      <div className="flex items-center justify-between">
        <BreadCrumbs
          className="top list-none"
          items={[
            { name: '~', href: '/#about' },
            { name: 'Blog', href: `/blog?lang=${lang}` },
            { name: meta.title, href: `/blog/${slug}?lang=${slug}` },
          ]}
        />

        {meta.hasMultipleLang && (
          <Typography
            variant="link"
            href={`/blog/${slug}?lang=${lang === 'en' ? 'vi' : 'en'}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {lang === 'en' ? 'Tiếng Việt' : 'English'}
          </Typography>
        )}
      </div>

      <article>
        <Typography variant="h1">{meta.title}</Typography>
        <Typography className="text-muted-foreground [&:not(:first-child)]:mt-0">
          {meta.date.toDateString()}
        </Typography>
        <Typography className="[&:not(:first-child)]:mt-0">{meta.description}</Typography>
      </article>

      <section className="mt-2 flex cursor-default select-none gap-2">
        {meta.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </section>

      <article className="">
        <Image
          src={meta.image}
          width={1920}
          height={1080}
          alt={meta.title}
          className="my-4 rounded-lg"
        />

        {content}
      </article>

      <ScrollToTop />
    </>
  )
}

export default Page
