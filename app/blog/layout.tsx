import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layout'
import { RootProvider } from 'fumadocs-ui/provider'
import Image from 'next/image'
import Link from 'next/link'

import { ScrollToTop } from '@/components/scroll-to-top'
import { pageTree } from '@/content'
import { getBaseUrl } from '@/lib/site'

const description = 'A collection of my blog posts from various topics'
export const metadata = {
  title: 'Blog',
  description,
  openGraph: { images: `/og?title=Blog&desc=${description}`, url: `${getBaseUrl()}/blog` },
  alternates: { canonical: `${getBaseUrl()}/blog` },
}

const docsOptions: DocsLayoutProps = {
  nav: {
    title: (
      <div className="flex gap-2">
        <Image src="/imgs/logo.svg" alt="Tiesen" width={28} height={28} className="dark:invert" />
        <span className="text-lg font-bold">Blog | Tiesen</span>
      </div>
    ),
    url: '/blog',
  },
  sidebar: {
    footer: <Link href="/">&copy; {new Date().getFullYear()} Tiesen</Link>,
  },
  tree: pageTree,
}

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RootProvider>
    <DocsLayout {...docsOptions}>{children}</DocsLayout>
    <ScrollToTop />
  </RootProvider>
)

export default BlogLayout
