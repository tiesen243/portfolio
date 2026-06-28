'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { TerminalContent } from '@/components/terminal'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export default function DocsNotFoundPage() {
  const pathname = usePathname()

  return (
    <>
      <h1 className='sr-only'>404 - Page Not Found</h1>

      <TerminalContent command={`ls ~${pathname}`} className='flex-col'>
        <Typography>
          ls: cannot access '{pathname}': No such file or directory
        </Typography>
        <Button
          variant='outline'
          className='w-fit'
          data-icon='inline-end'
          render={<Link href='/' />}
          nativeButton={false}
        >
          <span>Take me home</span>
          <ArrowRightIcon className='transition-transform group-hover/button:translate-x-0.5' />
        </Button>
      </TerminalContent>
    </>
  )
}
