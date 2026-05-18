import type React from 'react'
import './globals.css'
import 'devicon/devicon.min.css'
import WhatsAppButton from './components/WhatsAppButton'
import { defaultMetadata, organizationSchema, websiteSchema } from './lib/seo'

export const metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
      <body className="bg-[#F1F2F1] text-[#0B0C0D]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
