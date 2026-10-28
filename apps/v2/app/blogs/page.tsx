import { FileTextIcon, PinIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import { cn } from '@yuki/ui/lib/utils'

import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
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
              icon: FileTextIcon,
              href: page.url,
              content: (
                <>
                  <div
                    className={cn(
                      'relative inline-flex w-fit gap-2',
                      'after:absolute after:bottom-0 after:left-0',
                      'after:h-px after:w-full after:origin-left',
                      'after:scale-x-0 after:bg-current',
                      'after:transition-transform after:duration-300 after:content-[""]',
                      'group-hover/tree-item:after:scale-x-100'
                    )}
                  >
                    <Typography>{page.metadata.title}</Typography>

                    {page.metadata.pinned && (
                      <PinIcon className='size-4 shrink-0 rotate-45' />
                    )}
                  </div>

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
