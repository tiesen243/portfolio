import * as React from 'react'

export const useMounted = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setIsMounted(true)
  }, [])

  return isMounted
}
