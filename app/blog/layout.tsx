import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { source } from '@/lib/source'
import { baseOptions } from '../layout.config'

export default ({ children }: { children: React.ReactNode }) => (
  <DocsLayout tree={source.pageTree} {...baseOptions}>
    {children}
  </DocsLayout>
)
