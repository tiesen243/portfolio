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
        <Link href="/" className="text-lg font-bold">
          Tiesen | Blog
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground">
            All posts
          </Link>
          <Button onClick={handleToggle} variant="ghost" size="sm" className="z-20">
            On this page <MenuIcon className="ml-2" />
          </Button>
        </div>

        {isOpen && <div className="fixed inset-0 z-10 h-dvh w-svw" onClick={handleToggle} />}

        <div
          onClick={handleToggle}
          className={cn(
            'fixed right-8 top-14 z-20 w-fit rounded-lg border bg-background/70 p-4 pl-0 backdrop-blur-xl transition-all ease-linear',
            isOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-20 opacity-0',
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
