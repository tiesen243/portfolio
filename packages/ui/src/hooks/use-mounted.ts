import * as React from 'react'

const emptySubscribe = () => () => {
  // noop
}

export const useMounted = () =>
  React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
