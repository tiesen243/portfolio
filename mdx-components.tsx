import type { MDXComponents } from 'mdx/types'
import defaultComponents from 'fumadocs-ui/mdx'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...defaultComponents,
  ...components,
})
