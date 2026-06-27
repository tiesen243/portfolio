import cn from 'cnfast'

import { ToggleTheme } from '@/components/toggle-theme'
import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }

export function Terminal({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      className={cn(
        'relative container flex flex-col gap-4 overflow-hidden border border-primary/50 bg-card/50 pt-18 pb-4 backdrop-blur-sm',
        className
      )}
      {...props}
    >
      <div className='absolute inset-0 flex h-14 w-full items-center gap-2 border-b border-primary/50 bg-primary/5 px-4 py-3'>
        <div className='flex gap-2'>
          <div className='size-3 rounded-full bg-red-500/60' />
          <div className='size-3 rounded-full bg-yellow-500/60' />
          <div className='size-3 rounded-full bg-green-500/60' />
        </div>
        <span className='ml-4 line-clamp-1 flex-1 text-xs text-muted-foreground'>
          {data.handle}@portfolio — zsh
        </span>

        <ToggleTheme />
      </div>

      {children}

      <TerminalContent command='echo $COPYRIGHT'>
        <h2 className='sr-only'>Copyright section</h2>

        <Typography>
          ©{new Date().getFullYear()} {data.handle}. All rights reserved.
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
    <section className={cn('flex flex-wrap gap-1 pl-6', className)} {...props}>
      <Typography className='-ml-5 basis-full text-primary'>
        $ {command}
      </Typography>

      {children}
    </section>
  )
}
