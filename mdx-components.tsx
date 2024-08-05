import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...defaultComponents,
  ...components,
  Tabs,
  Tab,
  Pre,
  CodeBlock,
})
