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
  params: { slug: [string, 'en' | 'vi'] }
}

export const generateStaticParams = async () => {
  const enPosts = await getPosts('en')
  const viPosts = await getPosts('vi')

  return [
    ...enPosts.map((post) => ({ slug: [post.slug, 'en'] })),
    ...viPosts.map((post) => ({ slug: [post.slug, 'vi'] })),
  ]
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const [slug, lang] = params.slug
  const { meta } = await getPost(lang, `${slug}.mdx`)

  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      images: [meta.image, ...previousImages],
      url: `${baseUrl}/blog/${slug}/${lang}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${slug}/${lang}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const [slug, lang] = params.slug
  const { content, meta } = await getPost(lang, `${slug}.mdx`)
  if (!meta.title) return notFound()
  const isEn = lang === 'en' || lang === undefined

  return (
    <>
      <div className="flex items-center justify-between">
        <BreadCrumbs
          className="top list-none"
          items={[
            { name: '~', href: '/#about' },
            { name: 'Blog', href: `/blog?lang=${lang}` },
            { name: meta.title, href: `/blog/${slug}?lang=${lang ?? 'en'}` },
          ]}
        />

        {meta.hasMultipleLang && (
          <Typography
            variant="link"
            href={`/blog/${slug}/${isEn ? 'vi' : 'en'}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {isEn ? 'Tiếng Việt' : 'English'}
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

      <article>
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
