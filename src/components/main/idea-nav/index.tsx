'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
  {
    name: 'Idea',
    path: '/',
  },
  {
    name: 'String',
    path: '/idea/string',
  },
  {
    name: 'Date',
    path: '/idea/date',
  },
  {
    name: 'Number',
    path: '/idea/number',
  },
  {
    name: 'Set',
    path: '/idea/set',
  },
]

function IdeaNav() {
  const pathname = usePathname()

  return (
    <section className="border-b border-grid">
      <div className="px-4 py-2 w-full max-w-7xl mx-auto xl:border-grid xl:border-x">
        <div>
          {menu.map(item => (
            <Button
              variant="ghost"
              key={item.name}
              className={`text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white ${pathname === item.path ? 'text-black dark:text-white' : ''}`}
            >
              <Link href={item.path}>{item.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IdeaNav
