'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/529993012963"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cuéntanos tu idea en WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 pl-4 pr-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: '#25D366',
        color: '#fff',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35), 0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <MessageCircle className="w-5 h-5" />
      Cu&eacute;ntanos tu idea
    </a>
  )
}
