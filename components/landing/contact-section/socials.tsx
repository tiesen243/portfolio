import { siteConfig } from '@/lib/site'
import { Card, CardHeader } from '@/components/ui/card'

export const Socials: React.FC = () => (
  <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
    {siteConfig.socials.map((social) => (
      <li key={social.label} className="group">
        <a href={social.href} target="_blank" rel="noopener noreferrer">
          <Card className="transition-all ease-linear group-hover:bg-secondary">
            <CardHeader className="flex-row items-center justify-center gap-2 font-bold group-hover:text-[var(--to)] ">
              <social.icon className="" />
              <span>{social.label}</span>
            </CardHeader>
          </Card>
        </a>
      </li>
    ))}
  </ul>
)
