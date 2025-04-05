'use client'

import { useMouse } from 'ahooks'
import { useTheme } from 'next-themes'

export function MouseFollower() {
  const mouse = useMouse()

  const { theme } = useTheme()
  if (theme !== 'dark')
    return null

  return (
    <div
      suppressHydrationWarning
      className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur mix-blend-screen transition-transform duration-100 ease-out"
      style={{
        left: `${mouse.clientX}px`,
        top: `${mouse.clientY}px`,
      }}
    />
  )
}
