import { ImageZoom } from '@fumadocs/base-ui/components/image-zoom'
import { FileCodeIcon, PinIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import { cn } from '@yuki/ui/lib/utils'

import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import { createMetadata } from '@/lib/create-metadata'
import { getPages } from '@/lib/source'
import data from '@/public/assets/data.json' with { type: 'json' }

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
            children: [
              {
                content: 'designs',
                children: [],
              },
              ...pages.map((page) => ({
                icon: FileCodeIcon,
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
            ],
          }}
        />
      </TerminalContent>

      {data.designs.map((design) => (
        <TerminalContent
          key={design}
          command={`kitten icat ~/projects/designs/${design}.png`}
        >
          <h2 className='sr-only'>Designs section for {design}</h2>
          <ImageZoom
            src={`/assets/designs/${design}.png`}
            alt={`Design ${design}`}
            width={3000}
            height={1000}
            className='w-full object-cover md:w-2/3'
          />
        </TerminalContent>
      ))}
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
