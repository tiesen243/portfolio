import { ChevronDownIcon, ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { github } from '@/lib/contants'
import { getBaseUrl } from '@/lib/utils'

export const OpenButton: React.FC<{ slugs: string[] }> = ({ slugs }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      render={<Button variant='outline' data-icon='inline-end' />}
    >
      Open <ChevronDownIcon />
    </DropdownMenuTrigger>

    <DropdownMenuContent className='w-48'>
      {PROVIDERS.map((provider) => {
        const { label, href, suffix } = provider
        const path = slugs.join('/')

        const payload =
          label === 'Open in Github' || label === 'View as Markdown'
            ? `/${path}`
            : encodeURIComponent(
                `Read ${getBaseUrl()}/llms/${path}, I want to ask you some questions about it.`
              )

        return (
          <DropdownMenuItem
            key={provider.label}
            className='justify-between'
            render={
              <a
                href={`${href}${payload}${suffix}`}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={provider.label}
              />
            }
          >
            {provider.label} <ExternalLinkIcon />
          </DropdownMenuItem>
        )
      })}
    </DropdownMenuContent>
  </DropdownMenu>
)

const PROVIDERS = [
  {
    label: 'Open in Github',
    href: `https://raw.githubusercontent.com/${github.username}/${github.repository}/main/docs`,
    suffix: '.mdx',
  },
  {
    label: 'View as Markdown',
    href: `${getBaseUrl()}/llms`,
    suffix: '',
  },
  {
    label: 'Open in ChatGPT',
    href: 'https://chatgpt.com?prompt=',
    suffix: '&hints=search',
  },
  {
    label: 'Open in Claude',
    href: 'https://claude.ai?q=',
    suffix: '',
  },
  {
    label: 'Open in Scira AI',
    href: 'https://scira.ai?q=',
    suffix: '',
  },
]
