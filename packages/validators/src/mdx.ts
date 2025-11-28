import * as z from 'zod'

export const frontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().optional(),
  tags: z.array(z.string()),
  publishedAt: z.union([z.string(), z.date()]),
})

export type Frontmatter = z.infer<typeof frontmatterSchema>
