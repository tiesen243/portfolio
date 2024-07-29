import { Infomations } from './infomations'
import { Skills } from './skills'
import { ViewMore } from './view-more'

export const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh space-y-4 pt-4">
    <section className="col-span-1 grid gap-8 md:grid-cols-12">
      <article className="md:col-span-8">
        <h1 className="w-fit bg-gradient-to-b from-primary via-primary to-muted bg-clip-text text-6xl font-extrabold text-transparent">
          Tran Tien
        </h1>

        <p className="mt-4 text-lg font-medium leading-7 md:text-3xl">
          I am a full stack web developer with a passion for creating interactive and responsive web
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
        <source src="/imgs/yuki.webm" type="video/webm" />
        <track kind="captions" />
      </video>
    </section>

    <Skills />
    <Infomations />
    <ViewMore />
  </section>
)
