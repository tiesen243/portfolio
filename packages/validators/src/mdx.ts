import * as z from 'zod/v4'

export const frontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
})

export type Frontmatter = z.infer<typeof frontmatterSchema>
