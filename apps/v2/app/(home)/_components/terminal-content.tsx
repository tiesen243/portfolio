import { Typography } from '@/components/ui/typography'

export const TerminalContent = (props: {
  command: string
  children?: React.ReactNode
}) => (
  <li>
    <Typography className='text-primary'>$ {props.command}</Typography>

    <div className='pt-2 pl-6'>{props.children}</div>
  </li>
)
