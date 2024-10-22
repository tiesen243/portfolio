import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { Home } from 'lucide-react'

import { source } from '@/content/source'

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <DocsLayout
    tree={source.pageTree}
    githubUrl="https://github.com/tiesen243"
    links={[{ text: 'Home', url: '/', icon: <Home /> }]}
    nav={{ title: <p className="text-xl font-bold">Tiesen | Blog</p> }}
  >
    {children}
  </DocsLayout>
)

export default BlogLayout
