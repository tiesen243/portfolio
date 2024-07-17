import { Footer } from '@/components/footer'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default MainLayout
