'use client'

import { usePathname } from 'next/navigation'

import { TerminalContent } from '@/components/terminal'
import { Typography } from '@/components/ui/typography'

export default function DocsNotFoundPage() {
  const pathname = usePathname()

  return (
    <>
      <h1 className='sr-only'>404 - Page Not Found</h1>

      <TerminalContent command={`ls ~${pathname}`}>
        <Typography>
          ls: cannot access '{pathname}': No such file or directory
        </Typography>
      </TerminalContent>
    </>
  )
}
