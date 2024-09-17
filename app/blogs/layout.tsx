import { DocsLayout } from 'fumadocs-ui/layout'
import { RootProvider } from 'fumadocs-ui/provider'

import { source } from '@/content/source'

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RootProvider>
    <DocsLayout tree={source.pageTree}>{children}</DocsLayout>
  </RootProvider>
)

export default BlogLayout
