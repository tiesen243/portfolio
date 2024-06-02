import { db } from '@/prisma'
import { ImageResponse } from 'next/og'
import { type NextRequest, NextResponse } from 'next/server'

type Theme = 'asoul' | 'gelbooru' | 'gelbooru-h' | 'moebooru' | 'moebooru-h' | 'rule34' | 'no'

interface Props {
  params: {
    slug: string
  }
}

const imageUrl = 'https://raw.githubusercontent.com/tiesen243/tiesen243/main/theme'

export const GET = async (req: NextRequest, { params: { slug } }: Props) => {
  const theme = (req.nextUrl.searchParams.get('theme') as Theme) ?? 'gelbooru'

  /* Check if view exists
   * If not, create a new view with 0 value
   * If exists, increment the view by 1
   */
  const isExisted = await db.view.findUnique({ where: { slug } })
  if (!isExisted) await db.view.create({ data: { slug } })
  else await db.view.update({ where: { slug }, data: { count: { increment: 1 } } })

  // Get the view count
  const view = await db.view.findUnique({ where: { slug } })
  const count = String(view?.count ?? '0')
    .padStart(7, '0')
    .split('')
  // Get the extension of the image
  const extension = theme.endsWith('-h') ? 'png' : 'gif'

  if (theme === 'no') return NextResponse.json(view?.count ?? '0')

  return new ImageResponse(
    (
      <div tw="w-full h-full flex justify-center items-center px-2">
        {count.map((c, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={`${imageUrl}/${theme}/${c}.${extension}`} alt={c} tw="w-36 h-72" />
        ))}
      </div>
    ),
    { width: 1100, height: 400 },
  )
}
