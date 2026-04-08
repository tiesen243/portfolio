export default function MainLayout({ children, modal }: LayoutProps<'/'>) {
  return (
    <>
      {children}

      {modal}
    </>
  )
}
