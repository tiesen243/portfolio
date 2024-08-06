import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

import { education, hobbies, skills } from '@/lib/data'

export const Infomation: React.FC = () =>
  contents.map((item) => (
    <div key={item.id} className="rounded-lg border p-8 shadow-md">
      <h2 className="absolute -top-4 left-6 text-2xl font-bold">{item.label}</h2>
      {item.content}
    </div>
  ))

const className = 'flex items-center font-bold gap-1 [&>svg]:size-4 [&>svg]:md:size-6'
const contents = [
  {
    id: 'skills',
    label: (
      <div className={className}>
        <NotebookIcon /> <span>Skills</span>
      </div>
    ),
    content: (
      <ul className="grid grid-cols-4 gap-4 text-xl font-bold md:grid-cols-6">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    id: 'education',
    label: (
      <div className={className}>
        <SchoolIcon /> <span>Education</span>
      </div>
    ),
    content: (
      <ul className="space-y-4">
        {education.map((item) => (
          <li key={item.id}>
            <time className="text-muted-foreground">{item.time}</time>
            <h3 className="text-xl font-medium">{item.school}</h3>
            {item.major && <p className="text-muted-foreground">Majors: {item.major}</p>}
            {item.gpa && <p className="text-muted-foreground">GPA: {item.gpa}</p>}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'experience',
    label: (
      <div className={className}>
        <ActivityIcon /> <span>Experience</span>
      </div>
    ),
    content: (
      <ul className="space-y-4">
        <li>I have no experience yet UwU</li>
      </ul>
    ),
  },
  {
    id: 'hobbies',
    label: (
      <div className={className}>
        <HeartIcon /> <span>Hobbies</span>
      </div>
    ),
    content: (
      <ul className="my-0 text-lg font-medium">
        {hobbies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
]
