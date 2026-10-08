import { TerminalIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import { cn } from '@yuki/ui/lib/utils'

import { NavigationDropdown } from '@/components/navigation-dropdown'
import { ToggleTheme } from '@/components/toggle-theme'
import data from '@/public/assets/data.json' with { type: 'json' }

export function Terminal({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      className={cn(
        'relative container flex flex-col gap-4 overflow-hidden border-primary/50 bg-transparent pt-18 pb-4 backdrop-blur-xs md:border md:bg-card/40',
        className
      )}
      {...props}
    >
      <nav className='absolute inset-0 flex h-14 w-full items-center gap-2 border-b border-primary/50 px-4 py-3 md:bg-primary/5'>
        <ul className='flex flex-1 items-center gap-2'>
          <li className='size-3 rounded-full bg-red-500/60' />
          <li className='size-3 rounded-full bg-yellow-500/60' />
          <li className='size-3 rounded-full bg-green-500/60' />
        </ul>

        <ToggleTheme />
        <NavigationDropdown />
      </nav>

      {children}

      <TerminalContent command='echo $COPYRIGHT'>
        <h2 className='sr-only'>Copyright section</h2>

        <Typography>
          ©
          {
            // oxlint-disable-next-line react/purity
            new Date().getFullYear()
          }{' '}
          {data.handle}. All rights reserved.
        </Typography>
      </TerminalContent>

      <TerminalContent command='_' />
    </main>
  )
}

export function TerminalContent({
  command,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & { command: string }) {
  return (
    <section
      className={cn('flex flex-wrap gap-1 pl-2 md:pl-6', className)}
      {...props}
    >
      <Typography className='-ml-6 inline-flex w-full items-center gap-1 text-primary'>
        <TerminalIcon className='size-5 shrink-0' /> {command}
      </Typography>

      {children}
    </section>
  )
}
