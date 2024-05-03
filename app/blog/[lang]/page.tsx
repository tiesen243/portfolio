import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { getPosts } from '@/content'
import { baseUrl } from '@/lib/site'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

const desc = {
  en: 'A collection of my thoughts and experiences. I write about programming, and life.',
  vi: 'Một bộ sưu tập về suy nghĩ và kinh nghiệm của tôi. Tôi viết về lập trình và cuộc sống.',
}

interface Props {
  params: { lang: 'en' | 'vi' }
}

export const generateStaticParams = () => [{ lang: 'en' }, { lang: 'vi' }]

export const generateMetadata = async (
  { params: { lang } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const previousImages = (await parent).openGraph?.images ?? []
  return {
    title: 'Blog',
    description: desc[lang],
    openGraph: {
      images: [`/og?title=Blog&desc=${desc[lang]}`, ...previousImages],
      url: `${baseUrl}/blog/${lang}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${lang}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const posts = await getPosts(params.lang)
  const tabs = [
    { id: 'en', label: 'English' },
    { id: 'vi', label: 'Vietnamese' },
  ]

  return (
    <>
      <BreadCrumbs
        items={[
          { name: '~', href: '/#about' },
          { name: 'Blog', href: `/blog/${params.lang}` },
        ]}
      />

      <Tabs defaultValue={params.lang} className="mb-4">
        <TabsList className="bg-transparent">
          {tabs.map((tab) => (
            <Link key={tab.id} href={`/blog/${tab.id}`} passHref>
              <TabsTrigger
                value={tab.id}
                className="rounded-none border-b-2 border-primary/0 transition-all data-[state=active]:border-primary"
              >
                {tab.label}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} lang={params.lang} />
        ))}
      </section>
    </>
  )
}

export default Page
