import { ScrollToTop } from '@/components/scroll-to-top'

const ProjectLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <ScrollToTop />
  </>
)

export default ProjectLayout
