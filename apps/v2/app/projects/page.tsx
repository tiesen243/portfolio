import Image from 'next/image'

import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import { Typography } from '@/components/ui/typography'
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
          <Image
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
