import { MailIcon, MapPinIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import basic from '@/lib/data/basic'

export const ContactInfo: React.FC = () => (
  <section className='flex flex-col gap-4'>
    <h3 className='sr-only'>Contact Information</h3>

    <Card render={<section />}>
      <CardHeader>
        <CardTitle render={<h4 />}>Contact Information</CardTitle>
        <CardDescription>
          You can also reach me through the following channels. I&apos;m always
          open to connecting and would love to hear from you!
        </CardDescription>
      </CardHeader>

      <CardContent className='grid gap-4'>
        {[
          {
            icon: MailIcon,
            label: 'Email',
            value: basic.email,
            href: `mailto:${basic.email}`,
          },
          {
            icon: MapPinIcon,
            label: 'Location',
            value: basic.location,
            href: '#',
          },
        ].map((info) => (
          <div key={info.href} className='flex items-center gap-2'>
            <div className='grid size-12 place-items-center rounded-md border'>
              <info.icon className='size-6' />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-medium'>{info.label}</p>
              <a
                href={info.href}
                className='text-muted-foreground underline-offset-4 hover:text-ring hover:underline'
              >
                {info.value}
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    <Card render={<section />}>
      <CardHeader>
        <CardTitle render={<h4 />}>Follow Me</CardTitle>
        <CardDescription>
          Stay connected and follow me on social media to see my latest updates,
          projects, and insights. I share a lot of content related to web
          development, design, and technology.
        </CardDescription>
      </CardHeader>

      <CardContent className='grid grid-cols-2 gap-4'>
        {Object.entries(basic.socials).map(([name, url]) => (
          <Card
            key={name}
            className='flex-row items-center px-4 text-lg font-medium capitalize transition-colors hover:bg-ring/10 hover:text-ring hover:ring-ring [&_svg]:size-5 [&_svg]:fill-current'
            render={<a href={url} target='_blank' rel='noopener noreferrer' />}
          >
            {icons[name as keyof typeof icons] ?? null}
            {name}
          </Card>
        ))}
      </CardContent>
    </Card>
  </section>
)

const icons = {
  github: (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>GitHub</title>
      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
    </svg>
  ),
  facebook: (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>Facebook</title>
      <path d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' />
    </svg>
  ),
  linkedin: (
    <svg
      data-slug='linkedin-icon'
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>LinkedIn</title>
      <path d='M20.447 20.452h-3.556v-5.569c0-1.327-.025-3.033-1.85-3.033-1.85 0-2.134 1.445-2.134 2.938v5.664H9.35V9h3.415v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.291ZM5.337 7a2.07 2.07 0 1 1 .001-4.14A2.07 2.07 0 0 1 5.337 7Zm1.78 13.452H3.557V9h3.56v11.452Z' />
    </svg>
  ),
  x: (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>X</title>
      <path d='M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z' />
    </svg>
  ),
}
