import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

import * as card from '@/components/ui/card'
import * as tabs from '@/components/ui/tabs'
import { education, hobbies, skills } from '@/lib/data'
import { Typography } from '../ui/typography'

export const Infomation: React.FC = () => (
  <tabs.Tabs defaultValue={tabsContents[0].id} className="overflow-auto">
    {tabsContents.map((tab) => (
      <tabs.TabsList key={tab.id} className="bg-transparent">
        <tabs.TabsTrigger
          value={tab.id}
          className="rounded-none border-b-2 border-primary/0 transition-all data-[state=active]:border-primary"
          aria-label={`Switch to ${tab.id}`}
        >
          {tab.label}
        </tabs.TabsTrigger>
      </tabs.TabsList>
    ))}

    {tabsContents.map((tab) => (
      <tabs.TabsContent key={tab.id} value={tab.id}>
        <card.Card>
          <card.CardHeader>{tab.content}</card.CardHeader>
        </card.Card>
      </tabs.TabsContent>
    ))}
  </tabs.Tabs>
)

const className = 'flex items-center font-bold gap-1 [&>svg]:size-4 [&>svg]:md:size-6'
const tabsContents = [
  {
    id: 'skills',
    label: (
      <div className={className}>
        <NotebookIcon /> <span>Skills</span>
      </div>
    ),
    content: (
      <Typography
        variant="ul"
        className="my-0 grid grid-cols-3 gap-4 text-xl font-medium md:grid-cols-4 lg:grid-cols-6 [&>li]:mt-0"
      >
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Typography>
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
            <p className="text-muted-foreground">Majors: {item.major}</p>
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
        <li>I have no experience yet :))</li>
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
      <Typography variant="ul" className="my-0 text-xl font-medium">
        {hobbies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Typography>
    ),
  },
]
