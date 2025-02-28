import { Playwrite_AU_VIC } from 'next/font/google'
import { Button } from '../ui/button'

const playwriteAustraliaVictoria = Playwrite_AU_VIC({
  weight: 'variable',
})

function Hero() {
  return (
    <>
      <section className="border-b border-grid select-none">
        <div className="flex justify-center py-24 w-full max-w-7xl mx-auto xl:border-grid xl:border-x">
          <p className={`${playwriteAustraliaVictoria.className} text-8xl font-light opacity-90`}>
            Undefined.
          </p>
        </div>
      </section>
      <section className="border-b border-grid">
        <div className="flex justify-center items-center py-12 w-full max-w-7xl mx-auto xl:border-grid xl:border-x flex-col gap-5">
          <p className={`${playwriteAustraliaVictoria.className} text-3xl font-light`}>
            Define the undefined with us.
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <Button variant="default">Introduction</Button>
            <Button variant="secondary">View</Button>
          </div>
        </div>
      </section>
      <section className="border-b border-grid">
        <div className="p-4 py-2 w-full max-w-7xl mx-auto xl:border-grid xl:border-x">
          <div>
            <Button variant="ghost">Number</Button>
            <Button variant="ghost">String</Button>
            <Button variant="ghost">Boolean</Button>
            <Button variant="ghost">Array</Button>
          </div>
        </div>
      </section>
    </>

  )
}

export default Hero
