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
      {PROVIDERS.map((provider) => (
        <DropdownMenuItem
          key={provider.label}
          className='justify-between'
          render={
            <a
              href={`${provider.href}/${slugs.join('/')}${provider.suffix}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={provider.label}
            />
          }
        >
          {provider.label} <ExternalLinkIcon />
        </DropdownMenuItem>
      ))}
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
    href: `${getBaseUrl()}/llms.mdx`,
    suffix: '',
  },
  {
    label: 'Open in ChatGPT',
    href: `${getBaseUrl()}/llms.mdx`,
    suffix: '?open=chatgpt',
  },
  {
    label: 'Open in Gemini',
    href: `${getBaseUrl()}/llms.mdx`,
    suffix: '?open=gemini',
  },
  {
    label: 'Open in Claude',
    href: `${getBaseUrl()}/llms.mdx`,
    suffix: '?open=claude',
  },
  {
    label: 'Open in Scira AI',
    href: `${getBaseUrl()}/llms.mdx`,
    suffix: '?open=scira',
  },
]
