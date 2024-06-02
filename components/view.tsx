'use client'

import { getViews } from '@/lib/actions'
import { useEffect, useState } from 'react'

export const View: React.FC<{ slug: string }> = ({ slug }) => {
  const [views, setViews] = useState<string>('0')
  useEffect(() => {
    getViews(slug)
      .then((views) => {
        if (+views >= 1000) setViews(`${views.slice(0, -3)}k`)
        else setViews(views)
      })
      .catch(() => setViews('0'))
  }, [slug])
  return <>{views} views</>
}
