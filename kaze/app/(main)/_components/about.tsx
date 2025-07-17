import Image from 'next/image'

import { basic } from '@yuki/data'
import { Typography } from '@yuki/ui/typography'

import { hash256 } from '@/lib/utils'

export async function AboutSection() {
  const hashedEmail = await hash256(basic.email)

  return (
    <section id="about" className="container min-h-dvh py-16">
      <h2 className="sr-only">About section</h2>

      <section className="grid md:grid-cols-3">
        <h3 className="sr-only">Basic Information section</h3>

        <section className="md:col-span-2">
          <Typography variant="h4">About Me</Typography>
          <Typography>
            Hi, I&apos;m Tiesen, a weeb devalopa with a passion for building
            innovative solutions. I love working with TypeScript and Next.js to
            create dynamic web applications. When I&apos;m not coding, you can
            find me exploring new technologies or contributing to open-source
            projects.
          </Typography>
          <Typography className="text-normal">
            Feel free to reach out if you want to collaborate or just chat about
            tech!
          </Typography>

          <Typography variant="ul">
            <li>
              <strong>Name:</strong> {basic.name}
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${basic.email}`} className="hover:underline">
                {basic.email}
              </a>
            </li>
            <li>
              <strong>Date of Birth:</strong> {basic.dateOfBirth}
            </li>
            <li>
              <strong>Location:</strong> {basic.location}
            </li>
            <li>
              <strong>Languages:</strong> {basic.languages.join(', ')}
            </li>
          </Typography>
        </section>

        <section className="relative aspect-square max-w-full">
          <h4 className="sr-only">Profile Picture section</h4>

          <Image
            src={`https://gravatar.com/avatar/${hashedEmail}?s=400`}
            alt={basic.nickname}
            className="rounded-xl object-cover"
            priority
            fill
          />
        </section>
      </section>

      <section className="mt-10">
        <h3 className="sr-only">Educations & Certifications section</h3>

        <section>
          <Typography variant="h4" className="mb-4">
            Educations
          </Typography>

          {basic.educations.map((education) => (
            <div
              key={education.school}
              className="border-primary relative border-l-1 pb-6 pl-8 last:pb-0"
            >
              <div className="bg-primary absolute top-0 -left-1.5 size-2.5 rounded-full" />
              <Typography variant="h5" className="font-medium">
                {education.school}
              </Typography>
              <Typography className="text-muted-foreground">
                {education.duration}
              </Typography>
              <Typography>
                {education.major} {education.gpa && `- GPA: ${education.gpa}`}
              </Typography>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <Typography variant="h4" className="mb-4">
            Certifications
          </Typography>

          {basic.certifications.map((certification) => (
            <div
              key={certification.name}
              className="border-primary relative border-l-1 pb-6 pl-8 last:pb-0"
            >
              <div className="bg-primary absolute top-0 -left-1.5 size-2.5 rounded-full" />
              <Typography variant="h5" className="font-medium">
                {certification.name}
              </Typography>
              <Typography className="text-muted-foreground">
                Issued by {certification.issuer} on {certification.date}
              </Typography>
              <Typography>{certification.description}</Typography>
              <Typography
                component="a"
                // @ts-expect-error - `href` is not recognized by Typography
                href={certification.link}
                className="text-sm hover:underline lg:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </Typography>
            </div>
          ))}
        </section>
      </section>

      <section className="mt-10">
        <h3 className="sr-only">Experience section</h3>

        <Typography variant="h4" className="mb-4">
          Experiences
        </Typography>

        {basic.experiences.map((exp) => (
          <div
            key={exp.company}
            className="border-primary relative border-l-1 pb-6 pl-8 last:pb-0"
          >
            <div className="bg-primary absolute top-0 -left-1.5 size-2.5 rounded-full" />
            <Typography variant="h5" className="font-medium">
              {exp.company}
            </Typography>
            <Typography className="text-muted-foreground">
              {exp.duration}
            </Typography>
            <Typography>{exp.position}</Typography>
            <Typography>{exp.description}</Typography>
          </div>
        ))}
      </section>
    </section>
  )
}
