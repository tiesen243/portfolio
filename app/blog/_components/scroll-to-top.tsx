'use client'

import { ChevronsUp } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      size="icon"
      variant="secondary"
      className={cn(
        'fixed bottom-4 right-4 z-50',
        'transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <ChevronsUp />
    </Button>
  )
}
