import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { baseOptions } from '@/app/layout.config'
import { source } from '@/lib/source'

export default ({ children }: { children: React.ReactNode }) => (
  <DocsLayout tree={source.pageTree} {...baseOptions}>
    {children}
  </DocsLayout>
)
