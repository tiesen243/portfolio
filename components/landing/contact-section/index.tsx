import { ContactForm } from './contact-form'
import { Socials } from './socials'

export const ContactSection: React.FC = () => (
  <section id="contact" className="min-h-dvh space-y-8 pt-4">
    <h1 className="w-fit bg-yuki bg-clip-text text-6xl font-extrabold text-transparent">Contact</h1>
    <Socials />
    <ContactForm />
  </section>
)
