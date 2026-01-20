'use client'

import { Button } from '@yuki/ui/button'
import { Card } from '@yuki/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@yuki/ui/field'
import { useForm } from '@yuki/ui/hooks/use-form'
import { SendIcon } from '@yuki/ui/icons'
import { Input } from '@yuki/ui/input'
import { useNvimStatusline } from '@yuki/ui/nvim-statusline'
import { Textarea } from '@yuki/ui/textarea'
import { toast } from '@yuki/ui/toast'
import { Typography } from '@yuki/ui/typography'
import { contactSchema } from '@yuki/validators/contact'
import { useRef } from 'react'

import { sendEmail } from '@/app/(main)/contact/page.action'

export function ContactForm() {
  const { mode, setMode } = useNvimStatusline()
  const previousMode = useRef(mode)

  const { formId, FormField, handleSubmit, state } = useForm({
    defaultValues: { email: '', message: '', name: '', subject: '' },
    onSubmit: sendEmail,
    onSuccess: (data) => toast.add({ title: data.message, type: 'success' }),
    onError: (error) =>
      toast.add({
        title: 'Error Sending Message',
        description: error.message,
        type: 'error',
      }),
    schema: contactSchema,
  })

  const handleFocus = () => {
    previousMode.current = mode
    if (mode !== 'insert') setMode('insert')
  }

  return (
    <Card id={formId} render={<form onSubmit={handleSubmit} />}>
      <h3 className='sr-only'>Contact Form</h3>

      <FieldSet className='h-full px-6'>
        <Typography variant='h5' render={<legend />} className='my-0'>
          Send a Message
        </Typography>
        <Typography className='text-muted-foreground [&:not(:first-child)]:mt-1'>
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </Typography>

        <FieldGroup className='flex-1'>
          <FormField
            name='name'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={field.id}>Name</FieldLabel>
                <Input
                  {...field}
                  placeholder='Yukikaze'
                  onFocus={handleFocus}
                  onBlur={() => {
                    field.onBlur()
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <FormField
            name='email'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={field.id}>Email</FieldLabel>
                <Input
                  {...field}
                  type='email'
                  placeholder='yuki@example.com'
                  onFocus={handleFocus}
                  onBlur={() => {
                    field.onBlur()
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <FormField
            name='subject'
            render={({ meta, field }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={field.id}>Subject</FieldLabel>
                <Input
                  {...field}
                  placeholder='Project Inquiry'
                  onFocus={handleFocus}
                  onBlur={() => {
                    field.onBlur()
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <FormField
            name='message'
            render={({ meta, field }) => (
              <Field className='flex-1' data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={field.id}>Message</FieldLabel>
                <Textarea
                  {...field}
                  className='h-full resize-none'
                  placeholder='Tell me more about your project or question...'
                  onFocus={handleFocus}
                  onBlur={() => {
                    field.onBlur()
                    if (mode === 'insert') setMode(previousMode.current)
                  }}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />

          <Field>
            <Button type='submit' disabled={state.isPending}>
              <SendIcon /> Send Message
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </Card>
  )
}
