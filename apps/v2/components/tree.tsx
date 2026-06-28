import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'

interface TreeNode {
  content: React.ReactNode
  href?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children?: TreeNode[]
}

interface TreeProps {
  node: TreeNode
}

export const Tree: React.FC<TreeProps> = ({ node }) => {
  const isFolder = !!node.children

  const renderIcon = () => {
    if (node.icon) return <node.icon />
    if (isFolder) {
      if (node.children?.length === 0) return <FolderIcon />
      return <FolderOpenIcon />
    }
    return <FileIcon />
  }

  return (
    <div className='group/tree'>
      <div className='flex items-start gap-1.5 py-1 [&>svg]:mt-1.5 [&>svg]:size-4 [&>svg]:shrink-0'>
        {renderIcon()}

        <div className='flex flex-col gap-1 [&>data-[slot=typography]]:leading-6'>
          {typeof node.content === 'string' ? (
            <Typography>{node.content}</Typography>
          ) : (
            node.content
          )}
        </div>
      </div>

      {isFolder && node.children && (
        <ul className='ml-2 pl-2'>
          {node.children.map((childNode, index) => {
            const Comp = (childNode.href ? Link : 'div') as React.ElementType

            return (
              <li
                key={index}
                className='relative -left-2 flex flex-col pb-1 before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-foreground/20 last:before:h-4'
              >
                <div className='absolute top-4 left-0 h-px w-3 bg-foreground/20' />

                <Comp
                  className='group/tree-item pl-4'
                  {...(childNode.href ? { href: childNode.href } : {})}
                >
                  <Tree node={childNode} />
                </Comp>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
