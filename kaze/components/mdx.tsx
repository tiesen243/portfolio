import type { UrlObject } from 'node:url'
import type { ComponentProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { cn } from '@yuki/ui'
import { ExternalLinkIcon } from '@yuki/ui/icons'
import { Typography, typographyVariants } from '@yuki/ui/typography'

type Props = React.ComponentProps<'div'>

export function mdxComponents() {
  return {
    ...defaultMdxComponents,
    h2: ({ className, ...props }: Props) => (
      <Typography
        variant='h4'
        component='h2'
        className={cn('mt-4', className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }: Props) => (
      <Typography
        variant='h5'
        component='h3'
        className={cn('mt-3', className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }: Props) => (
      <Typography
        variant='h6'
        component='h4'
        className={cn('mt-2', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: Props) => (
      <Typography
        className={cn('[&:not(:first-child)]:mt-1', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }: Props) => (
      <Typography variant='ul' className={cn('mt-1', className)} {...props} />
    ),
    ol: ({ className, ...props }: Props) => (
      <Typography variant='ol' className={cn('mt-1', className)} {...props} />
    ),
    blockquote: ({ ...props }: Props) => (
      <Typography variant='blockquote' {...props} />
    ),
    caption: (props: Props) => <Typography variant='caption' {...props} />,
    a: ({
      href,
      className,
      children,
      ...props
    }: React.ComponentProps<'a'> & { href: string }) => {
      const isExternalLink = ['http://', 'https://', 'mailto:', 'tel:'].some(
        (protocol) => href.startsWith(protocol),
      )

      return (
        <Link
          href={href as unknown as UrlObject}
          className={cn(
            typographyVariants({ variant: 'p' }),
            'inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary',
            className,
          )}
          {...(isExternalLink
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          {...props}
        >
          {children} {isExternalLink && <ExternalLinkIcon className='size-4' />}
        </Link>
      )
    },
    img: ({ className, ...props }: ComponentProps<typeof Image>) => (
      <Image
        className={cn('my-4 rounded-xl drop-shadow-md', className)}
        {...props}
      />
    ),
    code: ({ className, ...props }: Props) => (
      <code
        className={cn(
          'font-mono [&:not(:has(span))]:relative [&:not(:has(span))]:w-fit [&:not(:has(span))]:rounded-md [&:not(:has(span))]:bg-primary/10 [&:not(:has(span))]:px-[0.3rem] [&:not(:has(span))]:py-[0.2rem] [&:not(:has(span))]:text-sm [&:not(:has(span))]:font-medium [&:not(:has(span))]:text-primary',
          className,
        )}
        {...props}
      />
    ),
    table: ({ className, ...props }: ComponentProps<'table'>) => (
      <table className={cn('w-full', className)} {...props} />
    ),
    tr: ({ className, ...props }: ComponentProps<'tr'>) => (
      <tr className={cn('m-0 border-t p-0', className)} {...props} />
    ),
    th: ({ className, ...props }: ComponentProps<'th'>) => (
      <th
        className={cn(
          'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: ComponentProps<'td'>) => (
      <td
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className,
        )}
        {...props}
      />
    ),
    Callout,
    Tabs,
    Tab,
  }
}
