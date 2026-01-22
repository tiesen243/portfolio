import type { Route } from 'next'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@yuki/ui/table'
import { Typography } from '@yuki/ui/typography'
import { Callout } from 'fumadocs-ui/components/callout'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

type Props = React.ComponentProps<'p'>

export function mdxComponents() {
  return {
    ...defaultMdxComponents,
    h1: ({ ...props }: Props) => <Typography variant='h1' {...props} />,
    h2: ({ ...props }: Props) => <Typography variant='h2' {...props} />,
    h3: ({ ...props }: Props) => <Typography variant='h3' {...props} />,
    h4: ({ ...props }: Props) => <Typography variant='h4' {...props} />,
    p: ({ ...props }: Props) => <Typography {...props} />,
    ul: ({ ...props }: Props) => <Typography variant='ul' {...props} />,
    ol: ({ ...props }: Props) => <Typography variant='ol' {...props} />,
    blockquote: ({ ...props }: Props) => (
      <Typography variant='blockquote' {...props} />
    ),
    caption: ({ ...props }: Props) => (
      <Typography variant='caption' {...props} />
    ),
    a: ({ href, ...props }: React.ComponentProps<'a'>) => {
      const isExternal = href?.startsWith('http') ?? false
      const Comp = isExternal ? 'a' : Link

      return (
        <Comp
          className='underline underline-offset-4 transition-colors hover:text-primary'
          href={href as Route}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        />
      )
    },
    img: ({ ...props }: ImageProps) => (
      <Image {...props} className='rounded-lg object-cover' />
    ),
    code: ({ ...props }: Props) => (
      <code
        className='border-accent font-mono [&:not(:has(span))]:relative [&:not(:has(span))]:w-fit [&:not(:has(span))]:rounded-sm [&:not(:has(span))]:border [&:not(:has(span))]:bg-accent/40 [&:not(:has(span))]:px-[0.3rem] [&:not(:has(span))]:py-[0.2rem] [&:not(:has(span))]:text-sm [&:not(:has(span))]:font-medium [&:not(:has(span))]:text-accent-foreground'
        {...props}
      />
    ),
    table: ({ ...props }: React.ComponentProps<'table'>) => (
      <div className='my-4 rounded-xl border bg-card text-sm'>
        <Table {...props} />
      </div>
    ),
    thead: ({ ...props }: React.ComponentProps<'thead'>) => (
      <TableHeader className='bg-muted' {...props} />
    ),
    tbody: ({ ...props }: React.ComponentProps<'tbody'>) => (
      <TableBody {...props} />
    ),
    tfoot: ({ ...props }: React.ComponentProps<'tfoot'>) => (
      <TableFooter {...props} />
    ),
    tr: ({ ...props }: React.ComponentProps<'tr'>) => (
      <TableRow className='last:[&_td]:pb-4' {...props} />
    ),
    th: ({ ...props }: React.ComponentProps<'th'>) => (
      <TableHead
        className='border-r p-3 text-card-foreground last:border-r-0'
        {...props}
      />
    ),
    td: ({ ...props }: React.ComponentProps<'td'>) => (
      <TableCell
        className='border-r p-3 text-card-foreground last:border-r-0'
        {...props}
      />
    ),
    Callout,
  }
}
