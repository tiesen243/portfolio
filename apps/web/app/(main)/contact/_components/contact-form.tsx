'use client'

import { sendMessage } from '@/app/(main)/contact/page.action'
import { contactSchema } from '@/app/(main)/contact/page.lib'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/toast'
import { useForm } from '@/hooks/use-form'

export const ContactForm: React.FC = () => {
  const form = useForm({
    defaultValues: { email: '', name: '', subject: '', message: '' },
    schema: contactSchema,
    onSubmit: sendMessage,
    onSuccess: () => toast.add({ type: 'success', title: 'Message Sent' }),
  })

  return (
    <Card render={<form id={form.formId} onSubmit={form.handleSubmit} />}>
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
        <CardDescription>
          Fill out the form below to get in touch with me. I look forward to
          hearing from you and will respond as soon as possible!
        </CardDescription>
      </CardHeader>

      <CardContent className='group/field-group @container/field-group flex w-full flex-1 flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4'>
        {fields.map(({ name, label, placeholder }) => (
          <form.Field
            key={name}
            name={name}
            render={({ field, meta }) => (
              <Field data-invalid={meta.errors.length > 0}>
                <FieldLabel htmlFor={field.id}>{label}</FieldLabel>
                <Input
                  {...field}
                  placeholder={placeholder}
                  disabled={form.state.isPending}
                />
                <FieldError id={meta.errorId} errors={meta.errors} />
              </Field>
            )}
          />
        ))}

        <form.Field
          name='message'
          render={({ field, meta }) => (
            <Field data-invalid={meta.errors.length > 0} className='flex-1'>
              <FieldLabel htmlFor={field.id}>Message</FieldLabel>
              <Textarea
                {...field}
                placeholder='Your message here...'
                disabled={form.state.isPending}
                className='flex-1'
              />
              <FieldError id={meta.errorId} errors={meta.errors} />
            </Field>
          )}
        />

        <Button type='submit' disabled={form.state.isPending}>
          Send Message
        </Button>
      </CardContent>
    </Card>
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
