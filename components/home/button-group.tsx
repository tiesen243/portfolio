import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const ButtonGroup: React.FC = () => (
  <div className="mt-4 flex items-center justify-center gap-4 [&>*]:text-xl [&>*]:font-bold [&>*]:transition-all [&>*]:ease-linear">
    <Button className="bg-gradient-yuki text-white hover:scale-105" asChild>
      <Link href="/#contact-form">Contact Me</Link>
    </Button>

    <Button
      className="animate-shimmer border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-white hover:scale-105"
      asChild
    >
      <Link href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
        Download CV
      </Link>
    </Button>
  </div>
)
