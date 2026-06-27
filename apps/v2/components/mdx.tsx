import type { MDXComponents } from 'mdx/types'

import defaultMdxComponents from '@fumadocs/base-ui/mdx'

import { Typography } from '@/components/ui/typography'

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: (props) => <Typography variant='h1' {...props} />,
    h2: (props) => <Typography variant='h2' {...props} />,
    h3: (props) => <Typography variant='h3' {...props} />,
    h4: (props) => <Typography variant='h4' {...props} />,
    p: (props) => <Typography variant='p' {...props} />,
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
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
