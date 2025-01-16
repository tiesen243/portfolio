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
    <Image src={Logo} alt="Logo" className="mb-6 w-full max-w-[500px] px-4" priority />

    <p className="mb-6 h-fit text-pretty p-2 text-lg text-muted-foreground md:max-w-[80%] md:text-xl">
      I'm Tran Tien, a Weeb Developer who loves to
      <b className="font-medium text-fd-foreground"> code and watch anime</b>.
    </p>
  </div>
)
