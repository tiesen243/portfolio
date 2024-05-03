import { type Icon, softwares, libraries } from '@/lib/data'
import { cn } from '@/lib/utils'

export const Skills: React.FC = () =>
  [softwares, libraries].map((data, i) => (
    <div
      key={i}
      className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      {Array.from({ length: 2 }).map((_, j) => (
        <ul
          key={j}
          className={cn(
            'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2',
            i === 0 ? 'animate-infinite-scroll' : 'animate-infinite-scroll-reverse',
          )}
          aria-hidden={j > 0}
        >
          {data.map((d, idx) => (
            <Item key={idx} {...d} />
          ))}
        </ul>
      ))}
    </div>
  ))

const Item: React.FC<Icon> = (data) => (
  <li className="flex basis-auto select-none items-center gap-2 rounded-lg bg-secondary px-4 py-2 shadow-lg">
    <data.icon className={`h-8 w-8 ${!data.color && 'dark:invert'}`} fill={data.color} />
    <span className="whitespace-nowrap text-xl font-bold">{data.label}</span>
  </li>
)
