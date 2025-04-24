import Image from 'next/image'

const emailHash =
  '48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d'

export const Introduction = () => (
  <section className="container flex flex-col justify-between gap-4 md:flex-row">
    <article className="prose text-lg">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Let me <span className="text-yuki">introduce</span> myself
      </h2>
      <p className="leading-7 text-pretty [&:not(:first-child)]:mt-6">
        I fell in love with programming and anime and am fluent in{' '}
        <strong className="text-yuki">Typescript </strong>and
        <strong className="text-yuki"> Python</strong>.
        <br /> My field of interest are building new{' '}
        <strong className="text-yuki">web applications</strong> and also in
        areas related to{' '}
        <strong className="text-yuki">Artificial Intelligence</strong>.
        <br /> Whatever possible, I try to contribute to the open-source
        community with <strong className="text-yuki">Next.js</strong> and{' '}
        <strong className="text-yuki">Machine Learning</strong> projects.
      </p>

      <ul className="ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Name:</strong> Tran Tien
        </li>
        <li>
          <strong>Date of Birth:</strong> June 22, 2004
        </li>
        <li>
          <strong>Location:</strong> Ho Chi Minh city, Viet Nam
        </li>
        <li>
          <strong>Languages:</strong> Vietnamese, English
        </li>
      </ul>
    </article>

    <Image
      src={`https://gravatar.com/avatar/${emailHash}?s=500`}
      alt="Avatar"
      width={500}
      height={500}
      className="mx-auto aspect-square rounded-lg shadow-lg md:mx-0"
      priority
    />
  </section>
)
