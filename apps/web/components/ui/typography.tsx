import type { VariantProps } from 'class-variance-authority'

import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('text-base font-normal', {
  variants: {
    variant: {
      h1: 'mb-4 scroll-m-20 text-3xl font-bold tracking-tight text-balance',
      h2: 'my-3 scroll-m-20 text-2xl font-semibold tracking-tight text-balance first:mt-0',
      h3: 'my-2 scroll-m-20 text-xl font-semibold tracking-tight text-balance first:mt-0',
      h4: 'my-1 scroll-m-20 text-lg font-semibold tracking-tight text-balance first:mt-0',
      p: 'leading-7 text-pretty not-first:mt-1',
      small: 'text-sm leading-none font-medium',
      ul: 'my-4 ml-6 list-disc text-base [&>li]:mt-1 [&>li]:first:mt-0',
      ol: 'my-4 ml-6 list-decimal text-base [&>li]:mt-1 [&>li]:first:mt-0',
      blockquote:
        'my-2 inline-flex border-l-2 pl-6 italic before:content-["“"] after:content-["”"]',
      code: 'relative w-fit rounded-sm border border-accent bg-accent/40 px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium text-accent-foreground',
      caption: 'block text-sm tracking-wide',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

interface TypographyProps
  extends
    useRender.ComponentProps<'p'>,
    VariantProps<typeof typographyVariants> {}

function Typography({
  className,
  variant = 'p',
  render,
  ...props
}: TypographyProps) {
  return useRender({
    defaultTagName: variant ?? 'p',
    props: mergeProps<'p'>(
      {
        className: cn(typographyVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'typography',
      variant,
    },
  })
}

export { Typography, typographyVariants }
