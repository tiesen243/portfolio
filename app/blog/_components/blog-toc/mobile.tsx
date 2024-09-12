import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Mobile: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <section className="sticky inset-0 z-50 w-svw select-none border-b bg-background/70 py-2 shadow-lg backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4">
        <Button onClick={handleToggle} variant="ghost" size="sm" className="z-20">
          <MenuIcon className="mr-2" /> On this page
        </Button>

        {isOpen && <div className="fixed inset-0 z-10 h-dvh w-svw" onClick={handleToggle} />}

        <div
          onClick={handleToggle}
          className={cn(
            'fixed left-8 top-14 z-20 w-fit min-w-60 rounded-lg border bg-card p-4 pl-2 transition-all ease-linear',
            isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0',
          )}
        >
          {children}
        </div>

        <Link href="/blog" className="text-muted-foreground hover:text-foreground">
          All posts
        </Link>
      </div>
    </section>
  )
}
