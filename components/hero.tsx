import Image from 'next/image'

import Logo from '@/public/assets/tiesen.png'

export const Hero: React.FC = () => (
  <div
    style={{
      background:
        'repeating-linear-gradient(to bottom, transparent, hsl(var(--fd-secondary)/.2) 500px, transparent 1000px)',
    }}
    className="flex flex-col items-center pb-8 text-center"
  >
    <Image
      src={Logo}
      alt="Logo"
      className="mb-6 w-full max-w-[500px] px-4 drop-shadow-lg"
      priority
    />

    <p className="mb-6 h-fit text-pretty p-2 text-lg text-muted-foreground md:max-w-[80%] md:text-xl">
      I'm Tran Tien, a Weeb Developer who loves to
      <b className="font-medium text-yuki"> code and watch anime</b>.
    </p>

    <div className="grid grid-cols-2 gap-8">
      <a
        href="https://gravatar.com/tiesen243"
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 rounded-md border bg-primary px-4 py-2 text-sm text-primary-foreground transition duration-200 hover:shadow-[4px_4px_0px_0px_hsl(var(--fd-primary))]"
      >
        Contact Me
      </a>

      <a
        href="/assets/cv.pdf"
        download="tiesen_cv.pdf"
        className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,hsl(var(--fd-secondary)),45%,hsl(var(--fd-accent)),55%,hsl(var(--fd-secondary)))] bg-[length:200%_100%] px-6 text-sm font-medium text-secondary-foreground transition-colors hover:border-muted-foreground focus:outline-none"
      >
        Download CV
      </a>
    </div>
  </div>
)
