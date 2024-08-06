import type { MDXComponents } from 'mdx/types'

import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultComponents from 'fumadocs-ui/mdx'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...defaultComponents,
  ...components,
  Tabs,
  Tab,
})
