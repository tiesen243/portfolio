import { SchoolIcon, WorkflowIcon } from 'lucide-react'

import { educations, experiences } from '@/lib/data'

const informations = [
  {
    title: (
      <>
        <SchoolIcon /> <span>Educations</span>
      </>
    ),
    content: educations.map((item, idx) => (
      <li key={idx}>
        <time className="text-xs">{item.year}</time>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {item.school}
        </h4>
        {item.major && (
          <p className="text-sm leading-7">
            {item.major} - {item.GPA}
          </p>
        )}
      </li>
    )),
  },
  {
    title: (
      <>
        <WorkflowIcon /> <span>Experiences</span>
      </>
    ),
    content: experiences.map((item, idx) => (
      <li key={idx}>
        <time className="text-xs">{item.year}</time>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {item.company}
        </h4>
        <p className="text-sm leading-7">{item.position}</p>
      </li>
    )),
  },
]

export const InformationSection: React.FC = () => (
  <section className="container">
    <h2 className="sr-only">Educations and Experiences section</h2>

    {informations.map((item, idx) => (
      <section key={idx} className="relative my-8 rounded-lg border p-6">
        <h3 className="absolute -top-4 col-span-full inline-flex scroll-m-20 items-center gap-2 text-2xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <ul className="ml-6 list-disc [&>li]:mt-2">{item.content}</ul>
      </section>
    ))}
  </section>
)
