import { chat, toolDefinition, toServerSentEventsResponse } from '@tanstack/ai'
import { openRouterText } from '@tanstack/ai-openrouter'
import { frontmatterSchema } from '@yuki/validators/mdx'

import { source } from '@/lib/source'
import { getBaseUrl } from '@/lib/utils'

const getBlogPostsDef = toolDefinition({
  name: 'get_blog_posts',
  description: 'Get blog posts for a given title or tags',
  inputSchema: frontmatterSchema.pick({ title: true, content: true }).partial(),
})

const getBlogPosts = getBlogPostsDef.server(({ title, content }) => {
  const posts = source.getPages().filter(async (post) => {
    if (title && !post.data.title.toLowerCase().includes(title.toLowerCase()))
      return false
    if (
      content &&
      !(await post.data.getText('raw'))
        .toLowerCase()
        .includes(content.toLowerCase())
    )
      return false
    return true
  })

  return Promise.all(
    posts.map(async (post) => ({
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      content: await post.data.getText('raw'),
      publishedAt: post.data.publishedAt,
      url: `${getBaseUrl()}${post.url}`,
    })),
  )
})

export async function POST(request: Request) {
  const { messages, conversationId } = await request.json()

  try {
    const stream = chat({
      adapter: openRouterText('openrouter/auto'),
      messages,
      conversationId,
      tools: [getBlogPosts],
    })

    return toServerSentEventsResponse(stream)
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An error occurred',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
