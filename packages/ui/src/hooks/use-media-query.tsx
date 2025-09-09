import * as React from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const abortController = new AbortController()

    mediaQueryList.addEventListener(
      'change',
      (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      },
      { signal: abortController.signal },
    )

    return () => {
      abortController.abort()
    }
  }, [query])

  return matches
}
