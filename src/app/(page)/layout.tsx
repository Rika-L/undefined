function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div className="p-4 w-full max-w-7xl mx-auto xl:border-grid xl:border-x h-full min-h-[calc(100vh-128px)]">
        <div className="text-base flex flex-col gap-4 h-full">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
