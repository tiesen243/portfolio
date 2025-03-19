import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { baseConfigs } from '@/app/layout.config'
import { source } from '@/content'

export default function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseConfigs}>
      {children}
    </DocsLayout>
  )
}
