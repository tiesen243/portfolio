'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

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
      className='order-last w-full max-w-lg md:order-0'
    >
      <FieldSet disabled={isSubmitting}>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input name='name' placeholder='Yukikaze' required />
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              name='email'
              placeholder='yukikaze@tiesen.id.vn'
              required
            />
          </Field>

          <Field>
            <FieldLabel>Message</FieldLabel>
            <Textarea
              name='message'
              placeholder='Write your message here...'
              required
            />
          </Field>

          <Field>
            <Button type='submit'>
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
