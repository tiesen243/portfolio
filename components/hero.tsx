import Image from 'next/image'

import { buttonVariants } from '@/components/ui/button'
import Logo from '@/public/assets/tiesen.png'

export const Hero: React.FC = () => (
  <section className="flex flex-col items-center pb-8 text-center">
    <Image
      src={Logo}
      alt="Logo"
      className="mb-6 w-full max-w-[500px] px-4 drop-shadow-lg"
      priority
    />

    <p className="text-muted-foreground mb-6 h-fit p-2 text-lg text-pretty md:max-w-[80%] md:text-xl">
      I&apos;m Tran Tien, a Weeb Developer who loves to
      <b className="text-yuki font-medium"> code and watch anime</b>.
    </p>

    <div className="grid grid-cols-2 gap-12">
      <a
        href="https://gravatar.com/tiesen243"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({
          className:
            'border-secondary border transition-shadow hover:shadow-[4px_4px_2px_0_var(--color-primary)]',
        })}
      >
        Contact Me
      </a>

      <a
        href="/assets/cv.pdf"
        download="tiesen_cv.pdf"
        className={buttonVariants({
          variant: 'outline',
          className:
            'animate-shimmer from-background via-muted to-background bg-linear-120 from-0% via-45% to-55% bg-[length:200%_100%] hover:brightness-150',
        })}
      >
        Download CV
      </a>
    </div>
  </section>
)
