import type { Metadata } from 'next'
import AppHeader from '@/components/app-header'
import { ThemeProvider } from '@/components/theme-provider'
import { Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body
        className="antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
