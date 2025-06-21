import { Button } from '@yuki/ui/button'
import { SendIcon } from '@yuki/ui/icons'
import { Input } from '@yuki/ui/input'
import { Label } from '@yuki/ui/label'
import { Textarea } from '@yuki/ui/textarea'
import { Typography } from '@yuki/ui/typography'

export function ContactForm() {
  return (
    <section className="bg-card text-card-foreground rounded-xl border py-6 shadow-md">
      <h2 className="sr-only">Contact Form</h2>

      <section className="px-6">
        <Typography variant="h5" component="h3">
          Send a Message
        </Typography>
        <Typography className="text-muted-foreground">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </Typography>
      </section>

      <form className="space-y-6 p-6 pb-0">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me more about your project or question..."
            rows={9}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          <SendIcon />
          Send Message
        </Button>
      </form>
    </section>
  )
}
