import Image from 'next/image'
import { SchoolIcon, WorkflowIcon } from 'lucide-react'

import { educations, experiences, skills } from '@/data'

const informations = [
  {
    title: (
      <h3 className="absolute -top-4 col-span-full inline-flex items-center gap-2">
        <SchoolIcon /> Education
      </h3>
    ),
    content: (
      <ul>
        {educations.map((item, idx) => (
          <li key={idx}>
            <time className="text-xs">{item.year}</time>
            <h4 className="mt-0">{item.school}</h4>
            {item.major && (
              <p className="text-sm">
                {item.major} - {item.GPA}
              </p>
            )}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: (
      <h3 className="absolute -top-4 col-span-full inline-flex items-center gap-2">
        <WorkflowIcon /> Experiences
      </h3>
    ),
    content: (
      <ul>
        {experiences.map((item, idx) => (
          <li key={idx}>
            <time className="text-xs">{item.year}</time>
            <h4 className="mt-0">{item.company}</h4>
            <p className="text-sm">{item.position}</p>
          </li>
        ))}
      </ul>
    ),
  },
]

export const Information: React.FC = () => (
  <>
    <ul className="my-6 grid grid-cols-3 gap-4 lg:grid-cols-6">
      {skills.map((item, idx) => (
        <li
          key={idx}
          className="flex select-none items-center gap-4 rounded-lg bg-secondary px-4 py-3 font-medium text-secondary-foreground shadow-lg md:text-lg"
        >
          <Image
            src={item.icon}
            alt={item.title}
            width={24}
            height={24}
            className="m-0 drop-shadow-xl"
            priority
          />
          <span className="text-center">{item.title}</span>
        </li>
      ))}
    </ul>

    {informations.map((item, idx) => (
      <div key={idx} className="prose relative my-6 rounded-lg border p-6">
        {item.title}
        {item.content}
      </div>
    ))}
  </>
)
