import * as React from 'react'

export const useDebounce = (callback: () => void, delay: number) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>(null)

  return React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(callback, delay)
  }, [callback, delay])
}
