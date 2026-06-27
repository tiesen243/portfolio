import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import { Typography } from '@/components/ui/typography'
import { createMetadata } from '@/lib/create-metadata'
import { getPages } from '@/lib/source'

export default async function BlogsPage() {
  const pages = await getPages('blogs')

  return (
    <>
      <h1 className='sr-only'>Blogs page</h1>

      <TerminalContent command='ls -la ~/blogs'>
        <h2 className='sr-only'>Blogs directory section</h2>

        <Tree
          node={{
            content: '.',
            children: pages.map((page) => ({
              href: page.url,
              content: (
                <>
                  <Typography className='group-hover/tree-item:underline'>
                    {page.metadata.title}
                  </Typography>
                  <Typography className='line-clamp-2 text-sm text-muted-foreground'>
                    {page.metadata.description}
                  </Typography>
                  <Typography className='text-sm text-muted-foreground'>
                    Published at: {page.metadata.publishedAt}
                  </Typography>
                </>
              ),
            })),
          }}
        />
      </TerminalContent>
    </>
  )
}

const title = 'Blogs'
const description = 'A collection of blog posts and articles.'
export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    images: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
    url: '/blogs',
  },
})
