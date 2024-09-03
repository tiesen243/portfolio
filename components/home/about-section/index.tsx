import { Infomation } from './infomation'
import { SkillMarquee } from './skill-marquee'
import { ViewMore } from './view-more'

export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh space-y-8 py-4">
    <div className="col-span-1 grid gap-8 md:grid-cols-12">
      <article className="prose prose-2xl prose-neutral dark:prose-invert prose-headings:mb-4 prose-p:mt-2 md:col-span-8">
        <h1 className="bg-gradient-to-b from-primary via-primary to-muted bg-clip-text text-transparent">
          Tran Tien
        </h1>

        <p className="font-medium">
          I am a web developer with a passion for creating interactive and responsive web
          applications. I have experience working with TypeScript, Next.js, TailwindCSS, tRPC,
          ElysiaJS, Prisma, MongoDb and more... Sometime I also work with Machine Learning. I am a
          quick learner and I am always looking to expand my knowledge and skill set.
        </p>
      </article>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="aspect-square w-full rounded-lg md:col-span-4"
      >
        <source src="/images/yuki.webm" type="video/webm" />
        <track kind="captions" />
      </video>
    </div>

    <SkillMarquee />
    <Infomation />
    <ViewMore />
  </section>
)
