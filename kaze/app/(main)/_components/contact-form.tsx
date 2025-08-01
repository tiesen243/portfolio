'use client'

import { useRef } from 'react'

import { Button } from '@yuki/ui/button'
import { useForm } from '@yuki/ui/form'
import { SendIcon } from '@yuki/ui/icons'
import { Input } from '@yuki/ui/input'
import { useNvimStatusline } from '@yuki/ui/nvim-statusline'
import { Textarea } from '@yuki/ui/textarea'
import { Typography } from '@yuki/ui/typography'
import { contactSchema } from '@yuki/validators/contact'

import { sendEmail } from '@/app/(main)/contact/page.action'

export function ContactForm() {
  const { mode, setMode } = useNvimStatusline()
  const previousMode = useRef(mode)

  const form = useForm({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    validator: contactSchema,
    onSubmit: sendEmail,
  })

  const handleFocus = () => {
    previousMode.current = mode
    setMode('insert')
  }

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

      <form
        className="grid gap-4 p-6 pb-0"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          <form.Field
            name="name"
            render={({ field }) => (
              <div className="space-y-2">
                <form.Label>Name</form.Label>
                <form.Control {...field}>
                  <Input
                    placeholder="Yukikaze"
                    onFocus={handleFocus}
                    onBlur={async (e) => {
                      await field.onBlur(e)
                      setMode(previousMode.current)
                    }}
                  />
                </form.Control>
                <form.Message />
              </div>
            )}
          />

          <form.Field
            name="email"
            render={({ field }) => (
              <div className="space-y-2">
                <form.Label>Email</form.Label>
                <form.Control {...field}>
                  <Input
                    type="email"
                    placeholder="yuki@example.com"
                    onFocus={handleFocus}
                    onBlur={async (e) => {
                      await field.onBlur(e)
                      setMode(previousMode.current)
                    }}
                  />
                </form.Control>
                <form.Message />
              </div>
            )}
          />
        </div>

        <form.Field
          name="subject"
          render={({ field }) => (
            <div className="space-y-2">
              <form.Label>Subject</form.Label>
              <form.Control {...field}>
                <Input
                  placeholder="Project Inquiry"
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e)
                    setMode(previousMode.current)
                  }}
                />
              </form.Control>
              <form.Message />
            </div>
          )}
        />

        <form.Field
          name="message"
          render={({ field }) => (
            <div className="space-y-2">
              <form.Label>Message</form.Label>
              <form.Control {...field}>
                <Textarea
                  placeholder="Tell me more about your project or question..."
                  rows={5}
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e as never)
                    setMode(previousMode.current)
                  }}
                />
              </form.Control>
              <form.Message />
            </div>
          )}
        />

        <Button className="w-full" disabled={form.state.isPending}>
          <SendIcon />
          Send Message
        </Button>
      </form>
    </section>
  )
}
