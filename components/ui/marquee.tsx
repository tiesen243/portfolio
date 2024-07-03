import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  isReverse?: boolean
}

export const Marquee: React.FC<MarqueeProps> = ({ children, isReverse = false }) => (
  <div className="z-10 w-full cursor-default overflow-hidden">
    <div className="relative flex max-w-[90vw] overflow-hidden py-5">
      <div className="absolute z-10 h-[calc(100%-2.5rem)] w-10 bg-gradient-to-r from-background to-transparent md:w-20" />
      <ul
        className={cn(
          'flex w-max gap-8 [--duration:30s]',
          isReverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        {children}
        {children}
      </ul>
      <div className="absolute right-0 z-10 h-[calc(100%-2.5rem)] w-10 bg-gradient-to-l from-background to-transparent md:w-20" />
    </div>
  </div>
)
