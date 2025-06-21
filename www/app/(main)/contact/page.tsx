import { basic } from '@yuki/data'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@yuki/ui/card'
import { MailIcon, MapPinIcon } from '@yuki/ui/icons'

import { createMetadata } from '@/lib/metadata'
import { ContactForm } from './page.client'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with me for inquiries or collaborations.',
  openGraph: { url: '/contact' },
})

export default function ContactPage() {
  return (
    <div className="from-background to-muted/20 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  You can also reach me through these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                        <info.icon className="text-primary h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href === '#' ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {basic.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border hover:border-primary/50 hover:bg-muted/50 group flex items-center space-x-3 rounded-lg border p-4 transition-all duration-200"
                    >
                      <social.icon className="size-6 transition-colors dark:invert" />
                      <span className="group-hover:text-primary font-medium transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

const contactInfo = [
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
]
