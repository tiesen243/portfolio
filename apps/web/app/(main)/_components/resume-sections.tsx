import { Typography } from '@/components/ui/typography'
import basic from '@/lib/data/basic'

export const CertificationSection: React.FC = () => (
  <section id='certification' className='container mt-6 flex flex-col gap-0'>
    <Typography variant='h3'>Certifications</Typography>

    {basic.certifications.map((certification) => (
      <TimelineItem
        key={certification.name}
        title={certification.name}
        subtitle={`Issued by ${certification.issuer} on ${certification.date}`}
      >
        <Typography>{certification.description}</Typography>
        <Typography
          render={
            <a
              href={certification.link}
              target='_blank'
              rel='noopener noreferrer'
            />
          }
          className='hover:underline'
        >
          View Certificate
        </Typography>
      </TimelineItem>
    ))}
  </section>
)

export const EducationSection: React.FC = () => (
  <section id='education' className='container mt-6 flex flex-col gap-0'>
    <Typography variant='h3'>Educations</Typography>

    {basic.educations.map((education) => (
      <TimelineItem
        key={education.school}
        title={education.school}
        subtitle={education.duration}
      >
        <Typography>
          {education.major} {education.gpa && `- GPA: ${education.gpa}`}
        </Typography>
      </TimelineItem>
    ))}
  </section>
)

export const ExperienceSection: React.FC = () => (
  <section id='experience' className='container mt-6 flex flex-col gap-0'>
    <Typography variant='h3'>Experiences</Typography>

    {basic.experiences.map((exp) => (
      <TimelineItem
        key={exp.company}
        title={exp.company}
        subtitle={exp.duration}
      >
        <Typography>{exp.position}</Typography>
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
    <div className='relative ml-4 border-l border-primary p-8 pt-0 last:pb-0'>
      <div className='absolute top-0 -left-1.5 size-2.5 rounded-full bg-primary' />
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
