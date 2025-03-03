import Hero from '@/components/main/hero'
import IdeaNav from '@/components/main/idea-nav'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <Hero />
      <IdeaNav />
      <section className="border-b border-grid">
        <div className="p-4 w-full max-w-7xl mx-auto xl:border-grid xl:border-x">
          {children}
        </div>
      </section>
    </main>
  )
}

export default Layout
