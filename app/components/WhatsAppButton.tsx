'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/529993012963"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agenda tu diagnóstico en WhatsApp"
      className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center bg-white text-black shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-full w-14 h-14 hover:w-auto hover:px-6 hover:py-4 md:w-auto md:px-6 md:py-4 gap-0 hover:gap-3 md:gap-3"
    >
      <div className="flex items-center justify-center pointer-events-none">
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
      </div>
      <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out font-medium group-hover:max-w-[200px] group-hover:opacity-100 md:max-w-[200px] md:opacity-100">
        Agenda Diagnóstico
      </span>
    </a>
  )
}
