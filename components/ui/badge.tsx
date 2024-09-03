import * as React from 'react'

import { cn } from '@/lib/utils'

const Badge = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      {...props}
      className={cn(
        'inline-block rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground',
        className,
      )}
    />
  ),
)

Badge.displayName = 'Badge'

export { Badge }
