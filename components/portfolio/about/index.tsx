import { cn } from 'fumadocs-ui/components/api'

export const AboutSection: React.FC = () => (
  <section className="container grid min-h-dvh grid-cols-2 gap-4">
    <article className="prose prose-2xl prose-neutral dark:prose-invert">
      <h2>About Me</h2>
      <p>
        I&apos;m Tran Tien, a weeb developer with a love for all things anime. I&apos;m passionate
        about creating software that makes a difference in the world. I&apos;m have experience in
        <GradientText text="React" color="#61DAFB" />,{' '}
        <GradientText text="Next.js" color="#000000" />,
      </p>
    </article>

    <video autoPlay loop muted className="aspect-square w-full rounded-lg object-cover shadow-lg">
      <source src="/images/yuki.webm" type="video/webm" />
    </video>
  </section>
)

const GradientText: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <span
    className={cn(
      'bg-gradient-to-r',
      `from-${color}`,
      `to-${color}`,
      'bg-clip-text',
      'text-transparent',
    )}
  >
    {text}
  </span>
)
