import { cn } from '@/lib/utils'

interface Props {
  items: string[]
  className?: string
}

export const Badges: React.FC<Props> = ({ items, className = '' }) => (
  <ul className={cn('flex list-none gap-2', className)}>
    {items.map((tag) => (
      <li
        key={tag}
        className="inline-block cursor-pointer whitespace-nowrap rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
      >
        {tag}
      </li>
    ))}
  </ul>
)
