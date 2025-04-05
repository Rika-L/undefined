import type { Metadata } from 'next'
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import { MouseFollower } from '@/components/mouse-follower'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Undefined',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseFollower />
          <AppHeader />
          {children}
          <AppFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
