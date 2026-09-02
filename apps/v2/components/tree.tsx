import { FileIcon, FolderIcon, FolderOpenIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import { cn } from '@yuki/ui/lib/utils'
import Link from 'next/link'

interface TreeNode {
  content: React.ReactNode
  href?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  direction?: 'horizontal' | 'vertical'
  children?: TreeNode[]
}

interface TreeProps {
  node: TreeNode
}

export const Tree: React.FC<TreeProps> = ({ node }) => {
  const isFolder = !!node.children
  const direction = node.direction ?? 'vertical'

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
      <div className='flex items-start gap-1.5 py-1 [&_svg]:mt-1.5 [&_svg]:size-4 [&_svg]:shrink-0'>
        {renderIcon()}

        <div className='flex flex-col gap-1 [&_data-[slot=typography]]:leading-6'>
          {typeof node.content === 'string' ? (
            <Typography>{node.content}</Typography>
          ) : (
            node.content
          )}
        </div>
      </div>

      {isFolder && node.children && (
        <ul
          className={direction === 'vertical' ? 'ml-2 pl-2' : 'flex flex-wrap'}
        >
          {node.children.map((childNode, index) => {
            const Comp = (childNode.href ? Link : 'div') as React.ElementType

            return (
              <li
                key={index}
                className={cn(
                  'relative flex flex-col pb-1',
                  direction === 'vertical'
                    ? '-left-2 before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-input last:before:h-4'
                    : 'left-2'
                )}
              >
                {direction === 'vertical' && (
                  <div className='absolute top-4 left-0 h-px w-3 bg-input' />
                )}

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
