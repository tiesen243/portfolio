import cn from 'cnfast'

import { ToggleTheme } from '@/components/toggle-theme'
import { Typography } from '@/components/ui/typography'

export const Terminal: React.FC<React.ComponentProps<'section'>> = ({
  className,
  children,

  ...props
}) => (
  <section className='border border-primary/50 bg-card/50 backdrop-blur-sm'>
    <h2 className='sr-only'>Terminal</h2>

    <section className='flex items-center gap-2 border-b border-primary/50 bg-primary/5 px-4 py-3'>
      <h3 className='sr-only'>Terminal Header</h3>

      <div className='flex gap-2'>
        <div className='size-3 rounded-full bg-red-500/60' />
        <div className='size-3 rounded-full bg-yellow-500/60' />
        <div className='size-3 rounded-full bg-green-500/60' />
      </div>
      <span className='ml-4 flex-1 text-xs text-foreground/60'>
        tiesen243@portfolio — zsh
      </span>

      <ToggleTheme />
    </section>

    <section className={cn('flex flex-col gap-4 p-4', className)} {...props}>
      <h3 className='sr-only'>Terminal Content</h3>

      {children}
    </section>
  </section>
)

export const TerminalContent: React.FC<
  React.ComponentProps<'div'> & { command: string }
> = ({ command, className, children, ...props }) => (
  <div className={cn('flex flex-wrap gap-1 pl-6', className)} {...props}>
    <Typography className='-ml-6 basis-full text-primary'>
      $ {command}
    </Typography>
    {children}
  </div>
)
