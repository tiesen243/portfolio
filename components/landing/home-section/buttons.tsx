import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const Buttons: React.FC = () => (
  <div className="grid grid-cols-2 gap-8 *:text-xl *:font-bold *:transition-transform *:ease-linear hover:*:scale-105">
    <Button
      className="animate-shimmer bg-[linear-gradient(110deg,var(--from),45%,var(--to),55%,var(--from))] bg-[length:200%_100%] text-white"
      asChild
    >
      <Link href="/#contact-form">Contact Me</Link>
    </Button>

    <Button variant="outline" asChild>
      <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="cv.pdf">
        Download CV
      </Link>
    </Button>
  </div>
)
