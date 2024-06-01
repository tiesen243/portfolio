import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const Buttons: React.FC = () => (
  <div className="grid grid-cols-2 gap-8 *:text-xl *:font-bold *:text-white *:transition-transform *:ease-linear hover:*:scale-105">
    <Button className="bg-yuki" asChild>
      <Link href="/#contact-form">Contact Me</Link>
    </Button>

    <Button
      className="animate-shimmer bg-[linear-gradient(110deg,var(--from),45%,var(--to),55%,var(--from))] bg-[length:200%_100%]"
      asChild
    >
      <Link href="/cv">My CV</Link>
    </Button>
  </div>
)
