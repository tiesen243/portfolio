import type { MDXComponents } from 'mdx/types'

import { Callout } from '@fumadocs/base-ui/components/callout'
import * as TabComponents from '@fumadocs/base-ui/components/tabs'
import defaultMdxComponents from '@fumadocs/base-ui/mdx'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...TabComponents,
    ...components,
    h1: (props) => <Typography variant='h1' {...props} />,
    h2: (props) => <Typography variant='h2' {...props} />,
    h3: (props) => <Typography variant='h3' {...props} />,
    h4: (props) => <Typography variant='h4' {...props} />,
    p: (props) => <Typography variant='p' {...props} />,
    a: ({ className, ...props }) => {
      const isExternalLink =
        typeof props.href === 'string' &&
        (props.href.startsWith('http') || props.href.startsWith('mailto:'))

      return (
        <Typography
          as={Link}
          className={cn('underline hover:text-primary', className)}
          {...(isExternalLink && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          // oxlint-disable-next-line typescript/no-explicit-any
          {...(props as any)}
        />
      )
    },
    ul: (props) => (
      <Typography
        variant='ul'
        {...(props as React.ComponentProps<typeof Typography>)}
      />
    ),
    ol: (props) => (
      <Typography
        variant='ol'
        {...(props as React.ComponentProps<typeof Typography>)}
      />
    ),
    table: ({ className, ...props }) => (
      <div
        data-slot='table-container'
        className='relative w-full overflow-x-auto bg-card'
      >
        <table
          data-slot='table'
          className={cn('w-full caption-bottom text-sm', className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead
        data-slot='table-header'
        className={cn(
          'bg-secondary text-secondary-foreground [&_tr]:border-b',
          className
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        data-slot='table-body'
        className={cn('[&_tr:last-child]:border-0', className)}
        {...props}
      />
    ),
    tfoot: ({ className, ...props }) => (
      <tfoot
        data-slot='table-footer'
        className={cn(
          'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
          className
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        data-slot='table-row'
        className={cn(
          'border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted',
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        data-slot='table-head'
        className={cn(
          'h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground has-[[role=checkbox]]:pr-0',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        data-slot='table-cell'
        className={cn(
          'p-2 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0',
          className
        )}
        {...props}
      />
    ),
    caption: ({ className, ...props }) => (
      <caption
        data-slot='table-caption'
        className={cn('mt-4 text-sm text-muted-foreground', className)}
        {...props}
      />
    ),
    Callout: ({ className, ...props }) => (
      <Callout className={cn('rounded-none', className)} {...props} />
    ),
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
