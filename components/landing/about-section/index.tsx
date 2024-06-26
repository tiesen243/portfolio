import { Infomations } from './infomations'
import { Skills } from './skills'
import { ViewMore } from './view-more'

export const AboutSection: React.FC = () => (
  <section id="about" className="min-h-dvh space-y-4 pt-4">
    <section className="col-span-1 grid gap-8 md:grid-cols-12">
      <article className="md:col-span-8">
        <h1 className="w-fit bg-yuki bg-clip-text text-6xl font-extrabold text-transparent">
          About Me
        </h1>

        <p className="text-2xl font-medium leading-7 md:text-3xl">
          I am a full stack web developer with a passion for creating interactive and responsive web
          applications.
          <br /> I have experience working with TypeScript, Next.js, TailwindCSS, ElysiaJS, Prisma,
          MongoDb and more... Sometime I also work with Machine Learning. I am a quick learner and I
          am always looking to expand my knowledge and skill set.
        </p>
      </article>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="aspect-square w-full rounded-lg md:col-span-4"
      >
        <source src="/imgs/yuki.webm" type="video/webm" />
        <track kind="captions" />
      </video>
    </section>

    <Skills />
    <Infomations />
    <ViewMore />
  </section>
)
