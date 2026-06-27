import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import { Typography } from '@/components/ui/typography'
import { createMetadata } from '@/lib/create-metadata'
import { getPages } from '@/lib/source'

export default async function ProjectsPage() {
  const pages = await getPages('projects')

  return (
    <>
      <h1 className='sr-only'>Projects page</h1>
      <TerminalContent command='ls -la ~/projects'>
        <h2 className='sr-only'>Projects directory section</h2>

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

const title = 'Projects'
const description = 'A collection of projects and works.'
export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    images: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
    url: '/projects',
  },
})
