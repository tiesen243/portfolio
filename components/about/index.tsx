import { Information } from './information'

export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh py-4">
    <div className="grid gap-4 md:grid-cols-2">
      <article className="prose">
        <h2>About Me</h2>

        <p>
          I'm Tran Tien, a passionate developer currently honing my skills in Next.js . My ultimate
          goal is to become a well-rounded full-stack developer.
          <br /> I'm actively engaged in learning and expanding my knowledge base in both Next.js
          and Machine Learning . This combination is particularly exciting to me as it unlocks
          possibilities for creating dynamic and intelligent web applications.
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
