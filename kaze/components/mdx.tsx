import type { ComponentProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { cn } from '@yuki/ui'
import { Typography, typographyVariants } from '@yuki/ui/typography'

type Props = React.ComponentProps<'div'>

export function mdxComponents() {
  return {
    ...defaultMdxComponents,
    h2: ({ className, ...props }: Props) => (
      <Typography
        variant="h4"
        component="h2"
        className={cn('mt-4', className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }: Props) => (
      <Typography
        variant="h5"
        component="h3"
        className={cn('mt-3', className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }: Props) => (
      <Typography
        variant="h6"
        component="h4"
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
      <Typography variant="ul" className={cn('mt-1', className)} {...props} />
    ),
    ol: ({ className, ...props }: Props) => (
      <Typography variant="ol" className={cn('mt-1', className)} {...props} />
    ),
    blockquote: (props: Props) => (
      <Typography variant="blockquote" {...props} />
    ),
    caption: (props: Props) => <Typography variant="caption" {...props} />,
    a: ({
      className,
      href,
      ...props
    }: React.ComponentProps<'a'> & { href: string }) => {
      const isExternalLink = ['http://', 'https://', 'mailto:', 'tel:'].some(
        (protocol) => href.startsWith(protocol),
      )

      return (
        <Link
          href={href}
          className={cn(
            typographyVariants({ variant: 'p' }),
            'hover:text-normal underline underline-offset-4',
            className,
          )}
          {...(isExternalLink
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          {...props}
        />
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
          '[&:not(:has(span))]:bg-muted [&:not(:has(span))]:text-normal [&:not(:has(span))]:relative [&:not(:has(span))]:w-fit [&:not(:has(span))]:rounded-md [&:not(:has(span))]:px-[0.3rem] [&:not(:has(span))]:py-[0.2rem] [&:not(:has(span))]:font-mono [&:not(:has(span))]:text-sm [&:not(:has(span))]:font-medium',
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
