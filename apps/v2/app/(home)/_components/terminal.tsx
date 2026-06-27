import { ToggleTheme } from '@/app/(home)/_components/toggle-theme'

export const Terminal = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
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

    <section className='p-4'>
      <h3 className='sr-only'>Terminal Content</h3>

      <ul className='flex min-h-0 flex-col gap-4'>{children}</ul>
    </section>
  </section>
)
