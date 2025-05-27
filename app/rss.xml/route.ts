import { NextResponse } from 'next/server'
import { Feed } from 'feed'

import { createMetadata, getBaseUrl } from '@/lib/metadata'
import { blogsSource, projectsSource } from '@/lib/source'

export const revalidate = false

export function GET() {
  const meta = createMetadata()

  const feed = new Feed({
    title: meta.title,
    description: meta.description ?? '',
    id: getBaseUrl(),
    link: getBaseUrl(),

    image: `${getBaseUrl()}/assets/design/tiesen-v2.png`,
    favicon: `${getBaseUrl()}/assets/logo.png`,
    copyright: 'All rights reserved 2025, Tiesen',
  })

  const allPages = [
    ...projectsSource.getPages(),
    ...blogsSource.getPages(),
  ].sort((a, b) => {
    return (
      new Date(b.data.lastModified ?? '').getTime() -
      new Date(a.data.lastModified ?? '').getTime()
    )
  })

  const author = [
    {
      name: 'Tiesen',
      email: 'ttien56906@gmail.com',
      link: getBaseUrl(),
      avatar:
        'https://gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d',
    },
  ]

  for (const page of allPages) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${getBaseUrl()}${page.url}`,
      date: new Date(page.data.lastModified ?? ''),
      author,
    })
  }

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
