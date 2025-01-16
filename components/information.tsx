import { LayersIcon, SchoolIcon, WorkflowIcon } from 'lucide-react'

import { skills } from '@/components/ui/icons'

const informations = [
  {
    title: (
      <h3 className="absolute -top-4 col-span-full inline-flex items-center gap-2">
        <LayersIcon /> Skills
      </h3>
    ),
    content: (
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-lg font-medium">
            <item.Icon className="size-8" />
            <span className="text-center">{item.name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: (
      <h3 className="absolute -top-4 col-span-full inline-flex items-center gap-2">
        <SchoolIcon /> Education
      </h3>
    ),
    content: (
      <ul>
        {[
          {
            school: 'Hoang Hoa Tham High School',
            major: '',
            year: '2019 - 2022',
            GPA: '',
          },
          {
            school: 'Industrial University of Ho Chi Minh City',
            major: 'Computer Engineering Technology',
            year: '2022 - Present',
            GPA: '3.01/4.0',
          },
        ].map((item, idx) => (
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
        {[
          {
            year: '2004 - Present',
            company: 'Work for myself',
            position: 'I have no experience ᗜ˰ᗜ',
          },
        ].map((item, idx) => (
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

export const Information: React.FC = () =>
  informations.map((item, idx) => (
    <div key={idx} className="prose relative my-6 rounded-lg border p-6">
      {item.title}
      {item.content}
    </div>
  ))
