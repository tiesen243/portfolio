import * as React from 'react'

import { useDebounce } from './use-debounce'

export const useMobile = () => {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })

  const updateIsMobile = React.useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const debouncedUpdate = useDebounce(updateIsMobile, 100)

  React.useEffect(() => {
    updateIsMobile() // Initial check
    window.addEventListener('resize', debouncedUpdate)
    return () => {
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [debouncedUpdate, updateIsMobile])

  return isMobile
}
