import cn from 'cnfast'

import { Typography } from '@/components/ui/typography'

export const TerminalContent = (props: {
  command: string
  className?: string
  children?: React.ReactNode
}) => (
  <li>
    <Typography className='text-primary'>$ {props.command}</Typography>

    <div className={cn('pt-2 pl-6', props.className)}>{props.children}</div>
  </li>
)
