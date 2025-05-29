'use client'

import Script from 'next/script'
import { useTheme } from 'next-themes'

export const Giscus: React.FC = () => {
  const { theme } = useTheme()
  console.log(theme)

  return (
    <Script
      src="https://giscus.app/client.js"
      data-repo="tiesen243/portfolio"
      data-repo-id="R_kgDOMsFs_w"
      data-category="Q&A"
      data-category-id="DIC_kwDOMsFs_84Cqur3"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="0"
      data-emit-metadata="1"
      data-input-position="bottom"
      data-theme={theme === 'dark' ? 'dark' : 'light'}
      data-lang="en"
      data-loading="lazy"
      crossOrigin="anonymous"
      async
    />
  )
}
