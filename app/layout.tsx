import type React from 'react'
import './globals.css'
import 'devicon/devicon.min.css'
import { JetBrains_Mono } from 'next/font/google'
import WhatsAppButton from './components/WhatsAppButton'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Empower Your Business With Nougat',
  description: 'Custom digital solutions for your business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono bg-black text-white`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
