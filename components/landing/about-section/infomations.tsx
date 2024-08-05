import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

import { Card, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { education, hobbies, skills } from '@/lib/data'

export const Infomations: React.FC = async () => (
  <Tabs defaultValue={tabsContents.at(0)?.id} className="overflow-auto">
    {tabsContents.map((tab) => (
      <TabsList key={tab.id} className="bg-transparent">
        <TabsTrigger
          value={tab.id}
          className="rounded-none border-b-2 border-primary/0 transition-all data-[state=active]:border-primary data-[state=active]:text-primary"
          aria-label={`Switch to ${tab.id}`}
        >
          {tab.label}
        </TabsTrigger>
      </TabsList>
    ))}

    {tabsContents.map((tab) => (
      <TabsContent key={tab.id} value={tab.id}>
        <Card className="min-h-56">
          <CardHeader>{tab.content}</CardHeader>
        </Card>
      </TabsContent>
    ))}
  </Tabs>
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
      <ul className="my-1 grid grid-cols-3 gap-x-4 gap-y-4 text-xl font-medium md:my-10 md:grid-cols-4 md:gap-y-8 lg:grid-cols-6">
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
          <li key={item}>- {item}</li>
        ))}
      </ul>
    ),
  },
]
