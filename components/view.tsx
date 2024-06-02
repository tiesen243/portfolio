import { getViews } from '@/lib/actions'

export const View: React.FC<{ slug: string }> = async ({ slug }) => {
  const views = await getViews(slug)
  return <>{views} views</>
}
