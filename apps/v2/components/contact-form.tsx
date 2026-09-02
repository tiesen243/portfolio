'use client'

import { Button } from '@yuki/ui/components/button'
import {
  FieldSet,
  FieldGroup,
  Field,
  FieldLabel,
} from '@yuki/ui/components/field'
import { Input } from '@yuki/ui/components/input'
import { Textarea } from '@yuki/ui/components/textarea'
import * as React from 'react'

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
      className='order-last w-full max-w-lg border bg-card p-4 shadow-sm min-[62rem]:order-0'
    >
      <FieldSet disabled={isSubmitting}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input id='name' name='name' placeholder='Yukikaze' required />
          </Field>

          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='yukikaze@tiesen.id.vn'
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor='message'>Message</FieldLabel>
            <Textarea
              id='message'
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
