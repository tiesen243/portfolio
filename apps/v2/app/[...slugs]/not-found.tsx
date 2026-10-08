'use client'

import { Button } from '@yuki/ui/components/button'
import { ArrowRightIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { TerminalContent } from '@/components/terminal'

export default function DocsNotFoundPage() {
  const pathname = usePathname()

  return (
    <>
      <h1 className='sr-only'>404 - Page Not Found</h1>

      <TerminalContent command={`ls ~${pathname}`} className='flex-col'>
        <Typography>
          ls: cannot access &apos;{pathname}&apos;: No such file or directory
        </Typography>
        <Button
          variant='outline'
          className='w-fit'
          nativeButton={false}
          render={<Link href='/' />}
        >
          <span>Take me home</span>
          <ArrowRightIcon
            data-icon='inline-end'
            className='transition-transform group-hover/button:translate-x-0.5'
          />
        </Button>
      </TerminalContent>
    </>
  )
}
