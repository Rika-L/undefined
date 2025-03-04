import { Playwrite_AU_VIC } from 'next/font/google'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import SignInButton from './signin-button'

const playwriteAustraliaVictoria = Playwrite_AU_VIC({
  weight: 'variable',
})
function AppHeader() {
  return (
    <header className="h-16 sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-xs backdrop-saturate-180 border-b border-grid">
      <div className="size-full max-w-7xl mx-auto xl:border-grid xl:border-x px-4 flex items-center justify-between">
        <div className={`${playwriteAustraliaVictoria.className} cursor-pointer select-none`}>
          <Link href="/">Undefined</Link>
        </div>
        <nav className="flex gap-4 items-center">
          {[1, 2, 3, 4].map(item => <Link href="/" key={item} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Home</Link>)}
          <ModeToggle />
          <SignInButton />
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
