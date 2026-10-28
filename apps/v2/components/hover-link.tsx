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
        'relative inline-block text-primary',
        'after:absolute after:bottom-0 after:left-0',
        'after:h-px after:w-full after:content-[""]',
        'after:origin-left after:scale-x-0',
        'after:bg-current after:transition-transform after:duration-300',
        'hover:after:scale-x-100',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
