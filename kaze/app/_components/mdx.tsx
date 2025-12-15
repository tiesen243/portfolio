import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { cn } from '@yuki/ui'

type Props = React.ComponentProps<'div'>

export function mdxComponents() {
  return {
    ...defaultMdxComponents,
    code: ({ className, ...props }: Props) => (
      <code
        className={cn(
          'border-accent font-mono [&:not(:has(span))]:relative [&:not(:has(span))]:w-fit [&:not(:has(span))]:bg-accent/20 [&:not(:has(span))]:px-[0.3rem] [&:not(:has(span))]:py-[0.2rem] [&:not(:has(span))]:text-sm [&:not(:has(span))]:font-medium [&:not(:has(span))]:text-accent-foreground',
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
