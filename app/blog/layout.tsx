import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layout'
import { RootProvider } from 'fumadocs-ui/provider'

import { ScrollToTop } from '@/components/scroll-to-top'
import { pageTree } from '@/content'

const docsOptions: DocsLayoutProps = {
  nav: { title: 'Blog | Tiesen', url: '/blog' },
  tree: pageTree,
}

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RootProvider>
    <DocsLayout {...docsOptions}>{children}</DocsLayout>
    <ScrollToTop />
  </RootProvider>
)

export default BlogLayout
