'use client'

import { SearchIcon } from '@yuki/ui/icons'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from '@yuki/ui/input-group'
import { useDocsSearch } from 'fumadocs-core/search/client'
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
} from 'fumadocs-ui/components/dialog/search'
import { useState } from 'react'

export default function DefaultSearchDialog() {
  const [open, setOpen] = useState(false)
  const { search, setSearch, query } = useDocsSearch({ type: 'fetch' })

  return (
    <InputGroup
      onClick={() => setOpen(true)}
      className='cursor-pointer transition-colors hover:bg-muted'
    >
      <InputGroupAddon align='inline-start'>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align='inline-start'>
        <InputGroupText>Search...</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align='inline-end' className='ml-auto gap-1'>
        <InputGroupButton variant='outline' size='icon-xs'>
          ⌘
        </InputGroupButton>
        <InputGroupButton variant='outline' size='icon-xs'>
          K
        </InputGroupButton>
      </InputGroupAddon>

      <SearchDialog
        search={search}
        onSearchChange={setSearch}
        isLoading={query.isLoading}
        open={open}
        onOpenChange={setOpen}
      >
        <SearchDialogOverlay />
        <SearchDialogContent>
          <SearchDialogHeader>
            <SearchDialogIcon />
            <SearchDialogInput />
            <SearchDialogClose />
          </SearchDialogHeader>
          <SearchDialogList
            items={query.data === 'empty' ? null : query.data}
          />
        </SearchDialogContent>
      </SearchDialog>
    </InputGroup>
  )
}
