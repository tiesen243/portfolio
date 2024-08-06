import { Marquee } from '@/components/ui/marquee'
import { type Icon, libraries, softwares } from '@/lib/data'
import { cn } from '@/lib/utils'

export const SkillMarquee: React.FC = () => (
  <>
    <Marquee>
      {softwares.map((item) => (
        <Item key={item.label} item={item} />
      ))}
    </Marquee>

    <Marquee isReverse>
      {libraries.map((item) => (
        <Item key={item.label} item={item} />
      ))}
    </Marquee>
  </>
)

const Item: React.FC<{ item: Icon }> = ({ item }) => (
  <li className="relative flex h-full w-fit items-center justify-start gap-4 rounded-lg px-4 py-2 hover:bg-accent">
    <item.icon fill={item.color} className={cn('w-10', item.color === '#000' && 'dark:invert')} />
    <span className="whitespace-nowrap text-lg font-bold">{item.label}</span>
  </li>
)
