import { notFound } from 'next/navigation'

import { getMDXComponents } from '@/components/mdx'
import { TerminalContent } from '@/components/terminal'
import { Badge } from '@/components/ui/badge'
import { Typography } from '@/components/ui/typography'
import { getPage } from '@/lib/source'

export default async function DocsPage({ params }: PageProps<'/[...slugs]'>) {
  const { slugs } = await params

  const page = await getPage(slugs)
  if (!page) return notFound()

  const { metadata, content: Content } = page

  return (
    <TerminalContent command={`cat ~/${slugs.join('/')}`}>
      <div className='mb-4 flex flex-col gap-2'>
        <Typography variant='h1'>{metadata.title}</Typography>
        <Typography className='text-sm text-muted-foreground'>
          {metadata.description}
        </Typography>
        <Typography className='flex flex-wrap items-center gap-2'>
          Tags:{' '}
          {metadata.tags.map((tag) => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
        </Typography>
        <Typography>Published at: {metadata.publishedAt}</Typography>
      </div>

      <article className='[&>h2]:my-4 [&>h3]:my-3 [&>h4]:my-2 [&>ol]:my-2 [&>p]:my-2 [&>ul]:my-2'>
        <Content components={getMDXComponents()} />
      </article>
    </TerminalContent>
  )
}
