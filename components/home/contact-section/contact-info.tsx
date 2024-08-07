import { siteConfig } from '@/lib/site'

export const ContactInfo: React.FC = () => (
  <ul className="flex flex-col gap-2 pt-4 md:pt-8">
    {siteConfig.contact.map((c) => (
      <li key={c.label} className="flex items-center gap-2">
        <div className="aspect-square rounded-lg bg-primary/10 p-2">
          <c.icon />
        </div>

        <div>
          <h3 className="font-medium">{c.label}</h3>
          <p className="text-muted-foreground">{c.value}</p>
        </div>
      </li>
    ))}
  </ul>
)
