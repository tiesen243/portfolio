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
    h2: (props: Props) => <Typography variant="h4" component="h2" {...props} />,
    h3: (props: Props) => <Typography variant="h5" component="h3" {...props} />,
    h4: (props: Props) => <Typography variant="h6" component="h4" {...props} />,
    p: ({ className, ...props }: Props) => (
      <Typography
        className={cn('[&:not(:first-child)]:mt-6', className)}
        {...props}
      />
    ),
    ul: (props: Props) => <Typography variant="ul" {...props} />,
    ol: (props: Props) => <Typography variant="ol" {...props} />,
    blockquote: ({ className, ...props }: Props) => (
      <Typography
        variant="blockquote"
        className={cn('inline-flex', className)}
        {...props}
      />
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
            'hover:underline',
            className,
          )}
          {...(isExternalLink
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          {...props}
        />
      )
    },
    Callout,
    Tabs,
    Tab,
  }
}
