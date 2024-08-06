import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'

export const ContactSection: React.FC = () => (
  <section id="contact" className="mt-12 w-screen bg-secondary">
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-start py-6">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">Get in Touch</h2>

        <p className="text-sm text-muted-foreground">
          I&apos;m always excited to connect with new people and discuss potential collaborations or
          projects. Feel free to reach out using the form below.
        </p>

        <ContactInfo />
      </div>

      <ContactForm />
    </div>
  </section>
)
