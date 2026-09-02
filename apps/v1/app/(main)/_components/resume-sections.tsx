import { Typography } from '@yuki/ui/components/typography'

import data from '@/data' with { type: 'json' }

export const CertificationSection: React.FC = () => (
  <section id='certification' className='container mt-6 flex flex-col'>
    <Typography variant='h3' className='mb-4'>
      Certifications
    </Typography>

    {data.certificates.map((certificate) => (
      <TimelineItem
        key={certificate.name}
        title={certificate.name}
        subtitle={`Issued by ${certificate.issuer} on ${certificate.date}`}
      >
        <Typography>{certificate.issuer}</Typography>
        <Typography
          as='a'
          href={certificate.credential}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          View Certificate
        </Typography>
      </TimelineItem>
    ))}
  </section>
)

export const EducationSection: React.FC = () => (
  <section id='education' className='container mt-6 flex flex-col'>
    <Typography variant='h3' className='mb-4'>
      Educations
    </Typography>

    {data.education.map((education) => (
      <TimelineItem
        key={education.institution}
        title={education.institution}
        subtitle={education.duration}
      >
        <Typography>
          {education.degree} {education.gpa && `- GPA: ${education.gpa}`}
        </Typography>
      </TimelineItem>
    ))}
  </section>
)

export const ExperienceSection: React.FC = () => (
  <section id='experience' className='container mt-6 flex flex-col'>
    <Typography variant='h3' className='mb-4'>
      Experiences
    </Typography>

    {data.experience.map((exp) => (
      <TimelineItem
        key={exp.company}
        title={exp.company}
        subtitle={exp.duration}
      >
        <Typography>{exp.role}</Typography>
        <Typography>{exp.description}</Typography>
      </TimelineItem>
    ))}
  </section>
)

function TimelineItem({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className='relative ml-4 border-l border-input p-8 pt-0 last:pb-0'>
      <div className='absolute top-0 -left-1.5 size-2.5 rounded-full bg-input' />
      <Typography variant='h4' className='-mt-2'>
        {title}
      </Typography>
      {subtitle && (
        <Typography className='text-muted-foreground'>{subtitle}</Typography>
      )}
      {children}
    </div>
  )
}
