import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { baseOptions } from '@/app/layout.config'
import { projectsSource } from '@/lib/source'

export default function ProjectsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <DocsLayout tree={projectsSource.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  )
}
