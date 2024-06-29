import { siteConfig } from '@/lib/site'
import { Card, CardHeader } from '@/components/ui/card'

export const Socials: React.FC = () => (
  <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
    {siteConfig.socials.map((social) => (
      <li key={social.label} className="group">
        <a href={social.href} target="_blank" rel="noopener noreferrer">
          <Card className="transition-all ease-linear group-hover:bg-secondary">
            <CardHeader className="flex-row items-center justify-center gap-2 space-y-0 font-bold group-hover:text-yuki">
              <social.icon className="" />
              <span>{social.label}</span>
            </CardHeader>
          </Card>
        </a>
      </li>
    ))}
  </ul>
)

export const ContactInfo: React.FC = () => (
  <ul className="flex flex-col gap-2">
    {siteConfig.contact.map((c) => (
      <li key={c.label} className="flex items-center gap-2">
        <div className="aspect-square rounded bg-secondary p-2">
          <c.icon className="text-yuki" />
        </div>

        <div>
          <h3 className="font-medium">{c.label}</h3>
          <p className="text-muted-foreground">{c.value}</p>
        </div>
      </li>
    ))}
  </ul>
)
