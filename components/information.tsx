import Image from 'next/image'
import { SchoolIcon, WorkflowIcon } from 'lucide-react'

import { educations, experiences, skills } from '@/data'
import { cn } from '@/lib/utils'

const informations = [
  {
    title: (
      <>
        <SchoolIcon /> Education
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
        <WorkflowIcon /> Experiences
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

export const Information: React.FC = () => (
  <>
    <ul className="my-6 grid grid-cols-3 gap-4 lg:grid-cols-6">
      {skills.map((item, idx) => (
        <li
          key={idx}
          className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-3 font-medium whitespace-nowrap shadow-lg select-none md:gap-4 md:text-lg"
        >
          <Image
            src={item.icon}
            alt={`${item.title} icon`}
            width={24}
            height={24}
            className={cn('m-0 size-4 md:size-6', item.invert && 'dark:invert')}
            priority
          />
          <span>{item.title}</span>
        </li>
      ))}
    </ul>

    {informations.map((item, idx) => (
      <div key={idx} className="relative my-8 rounded-lg border p-6">
        <h3 className="absolute -top-4 col-span-full inline-flex scroll-m-20 items-center gap-2 text-2xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <ul className="ml-6 list-disc [&>li]:mt-2">{item.content}</ul>
      </div>
    ))}
  </>
)
