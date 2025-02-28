import { ModeToggle } from './mode-toggle'

function AppHeader() {
  return (
    <header className="h-16 sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-xs backdrop-saturate-180 border-b border-grid">
      <div className="size-full max-w-7xl mx-auto xl:border-grid xl:border-x">
        this is header
        <ModeToggle />
      </div>
    </header>
  )
}

export default AppHeader
