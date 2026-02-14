import { chat, toolDefinition, toServerSentEventsResponse } from '@tanstack/ai'
import { openRouterText } from '@tanstack/ai-openrouter'
import { frontmatterSchema } from '@yuki/validators/mdx'

import { source } from '@/lib/source'
import { getBaseUrl } from '@/lib/utils'

const getBlogListDef = toolDefinition({
  name: 'get_blog_list',
  description:
    'Get a list of all blog posts or projects. Each item includes the title and URL.',
})

const getBlogList = getBlogListDef.server(() => {
  return source.getPageTree()
})

const findBlogPostDef = toolDefinition({
  name: 'get_blog_post_details',
  description:
    'Get details of a blog post by title. The title can be partial and is case-insensitive.',
  inputSchema: frontmatterSchema.pick({ title: true }).partial(),
})

const findBlogPost = findBlogPostDef.server(async ({ title }) => {
  const post = source.getPages().find((post) => {
    if (title && !post.data.title.toLowerCase().includes(title.toLowerCase()))
      return false
    return true
  })

  if (!post) return null

  return {
    title: post.data.title,
    description: post.data.description,
    content: await post.data.getText('raw'),
    tags: post.data.tags,
    publishedAt: post.data.publishedAt,
    url: `${getBaseUrl()}${post.url}`,
    slugs: post.slugs,
  }
})

export async function POST(request: Request) {
  const { messages, conversationId } = await request.json()

  try {
    const stream = chat({
      adapter: openRouterText('openrouter/auto'),
      messages,
      conversationId,
      tools: [getBlogList, findBlogPost],
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
