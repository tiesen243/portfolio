export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh py-4">
    <div className="grid gap-4 md:grid-cols-2">
      <article className="prose prose-2xl prose-neutral dark:prose-invert">
        <h2 className="border-b">About Me</h2>
        <p className="md:text-3xl md:font-medium">
          I&apos;m Tran Tien, a weeb developer with a love for all things anime. I&apos;m passionate
          about creating software that makes a difference in the world. I&apos;m have experience in{' '}
          <span className="bg-[linear-gradient(135deg,#AB1D1C,69%,hsl(var(--foreground)))] bg-clip-text text-transparent">
            Next.js
          </span>
          ,{' '}
          <span className="bg-[linear-gradient(135deg,#06B6D4,69%,hsl(var(--foreground)))] bg-clip-text text-transparent">
            Tailwind CSS
          </span>
          ,{' '}
          <span className="bg-[linear-gradient(135deg,#2596BE,69%,hsl(var(--foreground)))] bg-clip-text text-transparent">
            tRPC
          </span>
          , and{' '}
          <span className="bg-[linear-gradient(135deg,#3776AB,69%,hsl(var(--foreground)))] bg-clip-text text-transparent">
            Python
          </span>
          . Some of my hobbies include watching anime, playing video games, and reading manga. I
          also enjoy learning new things.
        </p>
      </article>

      <video autoPlay loop muted className="aspect-square w-full rounded-lg object-cover shadow-lg">
        <source src="/images/yuki.webm" type="video/webm" />
      </video>
    </div>
  </section>
)
