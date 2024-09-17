import { DocsLayout } from 'fumadocs-ui/layout'

import { source } from '@/content/source'

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <DocsLayout tree={source.pageTree}>{children}</DocsLayout>
)

export default BlogLayout
