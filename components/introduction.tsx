import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

export const Introduction = () => (
  <div className="flex flex-col justify-between gap-4 md:flex-row">
    <article className="prose text-lg">
      <h2>
        Let me <span className="text-yuki">introduce</span> myself
      </h2>
      <p className="text-pretty">
        I fell in love with programming and anime and am fluent in{' '}
        <strong className="text-yuki">Typescript </strong>and
        <strong className="text-yuki"> Python</strong>.
        <br /> My field of interest are building new{' '}
        <strong className="text-yuki">web applications</strong> and also in areas related
        to <strong className="text-yuki">Artificial Intelligence</strong>.
        <br /> Whatever possible, I try to contribute to the open-source community with{' '}
        <strong className="text-yuki">Next.js</strong> and{' '}
        <strong className="text-yuki">Machine Learning</strong> projects.
      </p>

      <ul>
        <li>
          <strong>Name:</strong> Tran Tien
        </li>
        <li>
          <strong>Date of Birth:</strong> June 22, 2004
        </li>
        <li>
          <strong>Location:</strong> Sai Gon, Viet Nam
        </li>
        <li>
          <strong>Languages:</strong> Vietnamese, English
        </li>
      </ul>
    </article>

    <ImageZoom
      src={`https://gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d?s=400`}
      alt="Avatar"
      width={400}
      height={400}
      className="mx-auto rounded-lg shadow-lg md:mx-0"
      priority
    />
  </div>
)
