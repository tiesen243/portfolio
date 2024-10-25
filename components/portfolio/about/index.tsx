import { Information } from './information'

export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh py-4">
    <div className="grid gap-4 md:grid-cols-2">
      <article className="prose prose-2xl prose-neutral dark:prose-invert">
        <h2 className="w-fit border-b bg-[linear-gradient(135deg,var(--yuki),69%,var(--kaze))] bg-clip-text text-transparent">
          About Me
        </h2>

        <p>
          I'm Tran Tien, a passionate developer currently honing my skills in{' '}
          <span className="bg-gradient-to-br from-[var(--yuki)] to-foreground bg-clip-text text-transparent">
            Next.js
          </span>
          . My ultimate goal is to become a well-rounded{' '}
          <span className="bg-gradient-to-br from-[var(--kaze)] to-foreground bg-clip-text text-transparent">
            full-stack
          </span>{' '}
          developer.
          <br /> I'm actively engaged in learning and expanding my knowledge base in both{' '}
          <span className="bg-gradient-to-br from-[var(--yuki)] to-foreground bg-clip-text text-transparent">
            Next.js
          </span>{' '}
          and{' '}
          <span className="bg-gradient-to-br from-[var(--kaze)] to-foreground bg-clip-text text-transparent">
            Machine Learning
          </span>
          . This combination is particularly exciting to me as it unlocks possibilities for creating
          dynamic and intelligent web applications.
        </p>

        <ul>
          <li>
            Born on: <time dateTime="2004-06-22">June 22, 2004</time>
            {new Date().getDate() === 22 && new Date().getMonth() === 6 && (
              <span className="animate-pulse text-[var(--yuki)]"> (kyou wa tanjoubi desu!)</span>
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
