import Hero from '@/components/hero'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <Hero />
      <section className="border-b border-grid">
        <div className="flex justify-center h-screen w-full max-w-7xl mx-auto xl:border-grid xl:border-x">
          {children}
        </div>
      </section>
    </main>
  )
}

export default Layout
