import Link from 'next/link'

import { source } from '@/content'

export const BlogList = () => {
  const pages = source.getPages().filter((page) => page.slugs.length >= 1)

  return (
    <div className="not-prose grid gap-8">
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
  )
}
