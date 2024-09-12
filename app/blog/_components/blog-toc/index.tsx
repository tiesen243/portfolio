'use client'

import { useEffect, useState } from 'react'

import { type Post } from '@/lib/actions/mdx'
import { Desktop } from './desktop'
import { Mobile } from './mobile'
import { Toc } from './toc'

const BREAKPOINT = 1280

export const BlogToc: React.FC<{ toc: Post['toc'] }> = ({ toc }) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < BREAKPOINT
  })
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  return isMobile ? (
    <Mobile>
      <Toc toc={toc} />
    </Mobile>
  ) : (
    <Desktop>
      <Toc toc={toc} />
    </Desktop>
  )
}
