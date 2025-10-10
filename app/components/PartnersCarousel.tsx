'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Partner } from '../types'

interface PartnersCarouselProps {
  partners: Partner[]
  isActive: boolean
}

export default function PartnersCarousel({ partners, isActive }: PartnersCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = partners.length

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
            className="space-y-6"
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
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white backdrop-blur-sm p-3">
                  <Image
                    src={partners[currentPage].logo}
                    alt={`${partners[currentPage].name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                {partners[currentPage].name}
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed text-left">
                {partners[currentPage].description}
              </p>
            </motion.div>
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
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator */}
      <p className="text-center text-sm text-neutral-500 mt-4">Swipe to see our partners</p>
    </div>
  )
}
