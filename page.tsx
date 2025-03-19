import Link from 'next/link'

import { source } from '@/content'
import { createMetadata } from '@/lib/metadata'

export default function BlogPage() {
  const pages = source.getPages()

  return (
    <main className="container">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>

      <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        I am a passionate writer and love to share my thoughts and ideas with
        the world. I believe that everyone has a story to tell and I am excited
        to share mine with you. I hope you enjoy reading my blog and find it
        informative and entertaining.
      </p>

      <div className="mt-4 grid gap-8">
        {pages.map((page) => (
          <Link key={page.slugs.join('-')} href={page.url} className="group">
            <time className="text-muted-foreground">{page.data.icon}</time>
            <h2 className="scroll-m-20 pt-1 pb-2 text-3xl font-semibold tracking-tight transition-colors group-hover:underline">
              {page.data.title}
            </h2>
            <p className="leading-7">{page.data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export const metadata = createMetadata({
  title: 'Blogs',
  description: 'A collection of blogs written by me.',
  openGraph: {
    images: [
      `/api/og?title=Blogs&description=${encodeURIComponent('A collection of blogs written by me.')}`,
    ],
    url: '/blogs',
  },
})
