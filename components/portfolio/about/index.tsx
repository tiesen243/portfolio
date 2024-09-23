import { Information } from './information'

export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh py-4">
    <div className="grid gap-4 md:grid-cols-2">
      <article className="prose prose-2xl prose-neutral dark:prose-invert">
        <h2 className="w-fit border-b bg-[linear-gradient(135deg,var(--yuki),69%,var(--kaze))] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="md:font-medium">
          I&apos;m Tran Tien, a weeb developer with a love for all things anime. I&apos;m passionate
          about creating software that makes a difference in the world. I&apos;m have experience in{' '}
          <span className="bg-gradient-to-br from-[#AB1D1C] to-foreground bg-clip-text text-transparent">
            Next.js
          </span>
          ,{' '}
          <span className="bg-gradient-to-br from-[#06B6D4] to-foreground bg-clip-text text-transparent">
            Tailwind CSS
          </span>
          ,{' '}
          <span className="bg-gradient-to-br from-[#2596BE] to-foreground bg-clip-text text-transparent">
            tRPC
          </span>
          , and{' '}
          <span className="bg-gradient-to-br from-[#3776AB] to-foreground bg-clip-text text-transparent">
            Python
          </span>
          . I also enjoy learning new things.
        </p>

        <ul>
          <li>
            Born on: <time dateTime="2004-06-22">June 22, 2004</time>
            {new Date().getDate() === 22 && new Date().getMonth() === 6 && (
              <span className="animate-pulse text-[#AB1D1C]"> (kyou wa tanjoubi desu!)</span>
            )}
          </li>
          <li>From: Vietnam</li>
          <li>Languages: English, Vietnamese</li>
        </ul>
      </article>

      <video autoPlay loop muted className="aspect-square w-full rounded-lg object-cover">
        <source src="/assets/yuki.webm" type="video/webm" />
      </video>
    </div>

    <Information />
  </section>
)
