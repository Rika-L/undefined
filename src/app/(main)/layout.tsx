import Hero from '@/components/main/hero'
import IdeaNav from '@/components/main/idea-nav'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Hero />
      <IdeaNav />
      <section>
        <div className="p-4 w-full max-w-7xl mx-auto xl:border-grid xl:border-x h-full min-h-[calc(100vh-659px)] ">
          <div className="indent-8 text-base *:leading-8 flex flex-col gap-4 h-full">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Layout
