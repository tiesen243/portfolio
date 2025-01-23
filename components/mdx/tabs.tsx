'use client'

import type { TabsProps as BaseProps, TabsContentProps } from '@radix-ui/react-tabs'
import * as React from 'react'

import * as Primitive from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export { Primitive }

type ChangeListener = (v: string) => void
const listeners = new Map<string, ChangeListener[]>()

function addChangeListener(id: string, listener: ChangeListener): void {
  const list = listeners.get(id) ?? []
  list.push(listener)
  listeners.set(id, list)
}

function removeChangeListener(id: string, listener: ChangeListener): void {
  const list = listeners.get(id) ?? []
  listeners.set(
    id,
    list.filter((item) => item !== listener),
  )
}

export interface TabsProps extends BaseProps {
  groupId?: string
  persist?: boolean
  defaultIndex?: number
  items?: string[]
  updateAnchor?: boolean
}

const TabsContext = React.createContext<{
  items: string[]
  valueToIdMap: Map<string, string>
  collection: CollectionType
} | null>(null)

export function Tabs({
  groupId,
  items = [],
  persist = false,
  defaultIndex = 0,
  updateAnchor = false,
  ...props
}: TabsProps) {
  const values = React.useMemo(() => items.map((item) => toValue(item)), [items])
  const [value, setValue] = React.useState(values[defaultIndex])

  const valueToIdMap = React.useMemo(() => new Map<string, string>(), [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const collection = React.useMemo(() => createCollection(), [items])

  const onChange: ChangeListener = (v) => {
    if (values.includes(v)) setValue(v)
  }

  const onChangeRef = React.useRef(onChange)
  onChangeRef.current = onChange

  React.useLayoutEffect(() => {
    if (!groupId) return
    const onUpdate: ChangeListener = (v) => {
      onChangeRef.current(v)
    }

    const previous = persist
      ? localStorage.getItem(groupId)
      : sessionStorage.getItem(groupId)

    if (previous) onUpdate(previous)
    addChangeListener(groupId, onUpdate)
    return () => {
      removeChangeListener(groupId, onUpdate)
    }
  }, [groupId, persist])

  React.useLayoutEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    for (const [value, id] of valueToIdMap.entries()) {
      if (id === hash) {
        setValue(value)
        break
      }
    }
  }, [valueToIdMap])

  return (
    <Primitive.Tabs
      value={value}
      onValueChange={(v: string) => {
        if (updateAnchor) {
          const id = valueToIdMap.get(v)

          if (id) {
            window.history.replaceState(null, '', `#${id}`)
          }
        }

        if (groupId) {
          listeners.get(groupId)?.forEach((item) => {
            item(v)
          })

          if (persist) localStorage.setItem(groupId, v)
          else sessionStorage.setItem(groupId, v)
        } else {
          setValue(v)
        }
      }}
      {...props}
      className={cn('my-4', props.className)}
    >
      <Primitive.TabsList>
        {values.map((v, i) => (
          <Primitive.TabsTrigger key={v} value={v}>
            {items[i]}
          </Primitive.TabsTrigger>
        ))}
      </Primitive.TabsList>
      <TabsContext.Provider
        value={React.useMemo(
          () => ({ items, valueToIdMap, collection }),
          [valueToIdMap, collection, items],
        )}
      >
        {props.children}
      </TabsContext.Provider>
    </Primitive.Tabs>
  )
}

function toValue(v: string): string {
  return v.toLowerCase().replace(/\s/, '-')
}

export type TabProps = Omit<TabsContentProps, 'value'> & {
  value?: TabsContentProps['value']
}

export function Tab({ value, className, ...props }: TabProps) {
  const ctx = React.useContext(TabsContext)
  const resolvedValue =
    value ??
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `value` is not supposed to change
    ctx?.items.at(useCollectionIndex())
  if (!resolvedValue)
    throw new Error(
      'Failed to resolve tab `value`, please pass a `value` prop to the Tab component.',
    )

  const v = toValue(resolvedValue)

  if (props.id && ctx) {
    ctx.valueToIdMap.set(v, props.id)
  }

  return (
    <Primitive.TabsContent
      value={v}
      className={cn(
        'w-full rounded-lg border p-4 [&>figure:only-child]:-m-4 [&>figure:only-child]:rounded-none [&>figure:only-child]:border-none',
        className,
      )}
      {...props}
    >
      {props.children}
    </Primitive.TabsContent>
  )
}

type CollectionKey = string | symbol
type CollectionType = ReturnType<typeof createCollection>

function createCollection() {
  return [] as CollectionKey[]
}

/**
 * Inspired by Headless UI.
 *
 * Return the index of children, this is made possible by registering the order of render from children using React context.
 * This is supposed by work with pre-rendering & pure client-side rendering.
 */
function useCollectionIndex() {
  const key = React.useId()
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('You must wrap your component in <Tabs>')

  const list = ctx.collection

  function register() {
    if (!list.includes(key)) list.push(key)
  }

  function unregister() {
    const idx = list.indexOf(key)
    if (idx !== -1) list.splice(idx, 1)
  }

  React.useMemo(() => {
    // re-order the item to the bottom if registered
    unregister()
    register()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  React.useEffect(() => {
    return unregister
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return list.indexOf(key)
}
