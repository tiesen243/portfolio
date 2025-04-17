import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { blogsSource, projectsSource } from '@/lib/source'

export function GET(_request: NextRequest) {
  const blogPosts = blogsSource.getPages()
  const projects = projectsSource.getPages()

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Tiesen</title>
  <link>https://tiesen.id.vn</link>
  <description>My personal portfolio and blog</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <ttl>1800</ttl>
  <image>
    <url>https://tiesen.id.vn/assets/logo.svg</url>
    <title>Tiesen</title>
    <link>https://tiesen.id.vn</link>
  </image>
  ${blogPosts
    .map(
      (post) => `
    <item>
      <title>${post.data.title}</title>
      <link>${post.url}</link>
      <description>${post.data.description}</description>
      <pubDate>${new Date(post.data.published).toUTCString()}</pubDate>
      <guid isPermaLink="true">${post.url}</guid>
    </item>`,
    )
    .join('')}
  ${projects
    .map(
      (project) => `
    <item>
      <title>${project.data.title}</title>
      <link>${project.url}</link>
      <description>${project.data.description}</description>
      <guid isPermaLink="true">${project.url}</guid>
    </item>`,
    )
    .join('')}
</channel>
</rss>`

  return new NextResponse(feed, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}
