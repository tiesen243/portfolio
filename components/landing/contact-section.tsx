import { Card, CardHeader } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'

export const ContactSection: React.FC = () => (
  <section id="contact" className="container space-y-8 pt-4">
    <h1 className="w-fit bg-yuki bg-clip-text text-6xl font-extrabold text-transparent">Contact</h1>
    <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {siteConfig.socials.map((social) => (
        <li key={social.label} className="group">
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            <Card className="transition-colors ease-linear group-hover:bg-secondary">
              <CardHeader className="flex-row items-center justify-center gap-2 space-y-0 font-bold group-hover:text-yuki">
                <social.icon />
                <span>{social.label}</span>
              </CardHeader>
            </Card>
          </a>
        </li>
      ))}
    </ul>
  </section>
)
