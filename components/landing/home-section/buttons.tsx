import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const Buttons: React.FC = () => (
  <div className="grid grid-cols-2 gap-8  *:font-bold sm:*:text-lg">
    <Button
      size="lg"
      className="animate-shimmer bg-[linear-gradient(110deg,hsl(var(--primary)),45%,hsl(var(--muted-foreground)),55%,hsl(var(--primary)))] bg-[length:200%_100%] transition-colors"
      asChild
    >
      <Link href="/#contact">Contact Me</Link>
    </Button>

    <Button size="lg" variant="outline" asChild>
      <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="cv.pdf">
        Download CV
      </Link>
    </Button>
  </div>
)
