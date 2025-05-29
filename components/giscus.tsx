'use client'

import UnthemedGiscus from '@giscus/react'
import { useTheme } from 'next-themes'

export const Giscus: React.FC = () => {
  const { theme } = useTheme()

  return (
    <UnthemedGiscus
      id="comments"
      repo="tiesen243/portfolio"
      repoId="R_kgDOMsFs_w"
      category="Q&A"
      categoryId="DIC_kwDOMsFs_84Cqur3"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="1"
      inputPosition="bottom"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  )
}
