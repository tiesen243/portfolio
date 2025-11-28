import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email(),
  subject: z.string().min(3, 'Subject must be at least 3 characters long'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})
export type ContactSchema = z.infer<typeof contactSchema>
