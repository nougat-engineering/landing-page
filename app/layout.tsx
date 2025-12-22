import type React from 'react'
import './globals.css'
import 'devicon/devicon.min.css'
import { JetBrains_Mono } from 'next/font/google'
import WhatsAppButton from './components/WhatsAppButton'
import { defaultMetadata, organizationSchema, websiteSchema } from './lib/seo'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono bg-black text-white`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
