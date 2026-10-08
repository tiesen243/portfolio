'use client'

import { Button } from '@yuki/ui/components/button'
import { ShareIcon } from '@yuki/ui/components/icons'
import { useCallback } from 'react'

export const ShareButton: React.FC = () => {
  const handleShare = useCallback(async () => {
    const shareData = {
      title: document.title,
      url: window.location.href,
    }

    if (navigator.share) return await navigator.share(shareData)
    await navigator.clipboard.writeText(shareData.url)
  }, [])

  return (
    <Button variant='outline' onClick={handleShare}>
      <ShareIcon data-icon='inline-start' /> Share
    </Button>
  )
}
