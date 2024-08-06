import { DocsLayout } from 'fumadocs-ui/layout'
import { RootProvider } from 'fumadocs-ui/provider'
import Image from 'next/image'

import { pageTree } from '@/lib/mdx'
import { ScrollToTop } from './_components/scroll-to-top'

const nav = {
  title: (
    <>
      <Image src="/images/logo.svg" alt="Tiesen" width={28} height={28} className="dark:invert" />
      <span className="text-xl font-semibold">Blog | Tiesen</span>
    </>
  ),
  url: '/blog',
}

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RootProvider>
    <DocsLayout tree={pageTree} nav={nav}>
      {children}
      <ScrollToTop />
    </DocsLayout>
  </RootProvider>
)

export default BlogLayout
