import { cn } from '@yuki/ui/lib/utils'
import Link from 'next/link'

export const HoverLink: React.FC<React.ComponentProps<'a'>> = ({
  href,
  className,
  children,
  ...props
}) => {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto')
  const Comp = isExternal ? 'a' : Link

  return (
    <Comp
      data-slot='hover-link'
      href={href ?? '#'}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'group/hover-link relative inline-block text-primary',
        className
      )}
      {...props}
    >
      {children}
      <span className='absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/hover-link:scale-x-100' />
    </Comp>
  )
}
