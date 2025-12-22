'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Service {
  title: string
  description: string
}

interface ServicesCarouselProps {
  services: Service[]
  isActive: boolean
}

export default function ServicesCarousel({ services, isActive }: ServicesCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const servicesPerPage = 3
  const totalPages = Math.ceil(services.length / servicesPerPage)

  const getCurrentServices = () => {
    const start = currentPage * servicesPerPage
    const end = start + servicesPerPage
    return services.slice(start, end)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="mt-8 max-w-5xl">
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentPage}
            className="space-y-4"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                nextPage()
              } else if (swipe > swipeConfidenceThreshold) {
                prevPage()
              }
            }}
          >
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={`${currentPage}-${service.title}`}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm md:text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentPage ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a la página ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator */}
      <p className="text-center text-sm text-neutral-500 mt-4">
        Desliza para conocer nuestros servicios
      </p>
    </div>
  )
}
