import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import { Typography } from '@/components/ui/typography'
import { getPages } from '@/lib/source'

export default async function ProjectsPage() {
  const pages = await getPages('projects')

  return (
    <TerminalContent command='ls -la ~/projects'>
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
  )
}
