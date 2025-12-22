import * as z from 'zod'

export const frontmatterSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  image: z.string().optional(),
  publishedAt: z.union([z.string(), z.date()]),
  tags: z.array(z.string()),
  title: z.string().min(1, 'Title is required'),
})

export type Frontmatter = z.infer<typeof frontmatterSchema>
