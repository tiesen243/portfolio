import { unstable_cache } from 'next/cache'

import { getPages } from '@/content'
import { BlogsLayoutClient } from './layout.client'

export default async function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pages = await unstable_cache(getPages, ['pages'], {
    revalidate: 60 * 60 * 24,
  })()

  const navs = [
    {
      label: 'Navigations',
      items: [
        { url: '/', name: 'Home' },
        { url: '/projects', name: 'Projects' },
        { url: '/blogs', name: 'Blogs' },
      ],
    },
    {
      label: 'Blogs',
      items: pages
        .map((page) => ({
          name: page.frontmatter.title,
          url: `/blogs/${page.slug.join('/')}`,
        }))
        .filter((page) => page.name),
    },
  ]

  return (
    <BlogsLayoutClient navs={navs}>
      <main className="mx-auto max-w-[calc(100svh-16rem)]">{children}</main>

      <footer className="border-t py-6">
        <div className="flex items-center justify-center gap-4">
          <p>Copyright (c) {new Date().getFullYear()} Tiesen. All Rights Reserved.</p>
        </div>
      </footer>
    </BlogsLayoutClient>
  )
}
