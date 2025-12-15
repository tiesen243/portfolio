import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { Typography } from '@yuki/ui/typography'

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
    code: ({ ...props }: Props) => (
      <code
        className='border-accent font-mono [&:not(:has(span))]:relative [&:not(:has(span))]:w-fit [&:not(:has(span))]:rounded-sm [&:not(:has(span))]:bg-accent/40 [&:not(:has(span))]:px-[0.3rem] [&:not(:has(span))]:py-[0.2rem] [&:not(:has(span))]:text-sm [&:not(:has(span))]:font-medium [&:not(:has(span))]:text-accent-foreground'
        {...props}
      />
    ),
    table: ({ ...props }: React.ComponentProps<'table'>) => (
      <div
        data-slot='table-container'
        className='relative mt-4 mb-6 w-full overflow-x-auto'
      >
        <table className='w-full caption-bottom border text-sm' {...props} />
      </div>
    ),
    thead: ({ ...props }: React.ComponentProps<'thead'>) => (
      <thead
        data-slot='table-header'
        className='bg-muted/50 [&_tr]:border-b'
        {...props}
      />
    ),
    tbody: ({ ...props }: React.ComponentProps<'tbody'>) => (
      <tbody
        data-slot='table-body'
        className='[&_tr:last-child]:border-0'
        {...props}
      />
    ),
    tfoot: ({ ...props }: React.ComponentProps<'tfoot'>) => (
      <tfoot
        data-slot='table-footer'
        className='border-t bg-muted/50 font-medium [&>tr]:last:border-b-0'
        {...props}
      />
    ),
    tr: ({ ...props }: React.ComponentProps<'tr'>) => (
      <tr
        data-slot='table-row'
        className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted [&_td]:last:border-none [&_th]:last:border-none'
        {...props}
      />
    ),
    th: ({ ...props }: React.ComponentProps<'th'>) => (
      <th
        data-slot='table-head'
        className='h-10 border-r px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
        {...props}
      />
    ),
    td: ({ ...props }: React.ComponentProps<'td'>) => (
      <td
        data-slot='table-cell'
        className='border-r p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
        {...props}
      />
    ),
    Callout,
    Tabs,
    Tab,
  }
}
