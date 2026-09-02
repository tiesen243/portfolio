'use client'

import { Button } from '@yuki/ui/components/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@yuki/ui/components/field'
import { Input } from '@yuki/ui/components/input'
import { Textarea } from '@yuki/ui/components/textarea'
import * as React from 'react'

import { sendEmail } from '@/app/(main)/contact/page.action'

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = React.useCallback(async (event: React.SubmitEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target)

    const response = await sendEmail({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    })

    if (response) setIsSubmitted(true)
    setIsSubmitting(false)
    event.target.reset()
  }, [])

  React.useEffect(() => {
    if (isSubmitted) setTimeout(() => setIsSubmitted(false), 3000)
  }, [isSubmitted])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-(--card-spacing) overflow-hidden rounded-lg bg-card py-(--card-spacing) text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none'
    >
      <FieldSet disabled={isSubmitting} className='px-4'>
        <FieldLegend>Send a message</FieldLegend>
        <FieldDescription>
          Fill out the form below to get in touch with me. I look forward to
          hearing from you and will respond as soon as possible!
        </FieldDescription>

        <FieldGroup>
          {fields.map((field) => (
            <Field key={field.name}>
              <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                type={field.name === 'email' ? 'email' : 'text'}
                placeholder={field.placeholder}
                className='rounded-md'
                required
              />
            </Field>
          ))}

          <Field>
            <FieldLabel htmlFor='message'>Message</FieldLabel>
            <Textarea
              id='message'
              name='message'
              placeholder='Your message here...'
              className='rounded-md'
              required
            />
          </Field>

          <Field>
            <Button type='submit' className='rounded-md'>
              {isSubmitting && 'Submitting...'}
              {isSubmitted && 'Submitted!'}
              {!isSubmitting && !isSubmitted && 'Submit'}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

const fields = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'IJN Yukikaze',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'yukikaze@example.com',
  },
  {
    name: 'subject',
    label: 'Subject',
    placeholder: 'Project Inquiry',
  },
] as const
