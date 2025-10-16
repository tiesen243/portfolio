'use client'

import { useRef } from 'react'

import { Button } from '@yuki/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@yuki/ui/field'
import { useForm } from '@yuki/ui/hooks/use-form'
import { SendIcon } from '@yuki/ui/icons'
import { Input } from '@yuki/ui/input'
import { useNvimStatusline } from '@yuki/ui/nvim-statusline'
import { Textarea } from '@yuki/ui/textarea'
import { contactSchema } from '@yuki/validators/contact'

import { sendEmail } from '@/app/(main)/contact/page.action'

export function ContactForm() {
  const { mode, setMode } = useNvimStatusline()
  const previousMode = useRef(mode)

  const form = useForm({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    schema: contactSchema,
    onSubmit: sendEmail,
    onError: (error) => (alert(error.message), undefined),
    onSuccess: (data) => (alert(data.message), undefined),
  })

  const handleFocus = () => {
    previousMode.current = mode
    if (mode !== 'insert') setMode('insert')
  }

  return (
    <form
      className='rounded-xl border bg-card p-6 text-card-foreground shadow-md'
      onSubmit={form.handleSubmit}
    >
      <h3 className='sr-only'>Contact Form</h3>

      <FieldSet className='flex h-full flex-col'>
        <FieldLegend>Send a Message</FieldLegend>
        <FieldDescription>
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </FieldDescription>

        <FieldGroup className='flex-1 gap-4'>
          <form.Field
            name='name'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={meta.fieldId}>Name</FieldLabel>
                <Input
                  {...field}
                  placeholder='Yukikaze'
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e)
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <form.Field
            name='email'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={meta.fieldId}>Email</FieldLabel>
                <Input
                  {...field}
                  type='email'
                  placeholder='yuki@example.com'
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e)
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <form.Field
            name='subject'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={meta.fieldId}>Subject</FieldLabel>
                <Input
                  {...field}
                  placeholder='Project Inquiry'
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e)
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <form.Field
            name='message'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={meta.fieldId}>Message</FieldLabel>
                <Textarea
                  {...field}
                  placeholder='Tell me more about your project or question...'
                  onFocus={handleFocus}
                  onBlur={async (e) => {
                    await field.onBlur(e)
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />
        </FieldGroup>

        <Field>
          <Button className='w-full' disabled={form.state.isPending}>
            <SendIcon />
            Send Message
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}
