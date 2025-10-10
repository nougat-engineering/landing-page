'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '../types'
import TechCarousel from './TechCarousel'
import RotatingText from './RotatingText'
import ServicesCarousel from './ServicesCarousel'
import PartnersCarousel from './PartnersCarousel'
import Image from 'next/image'

export default function Section({
  id,
  title,
  subtitle,
  content,
  isActive,
  showButton,
  buttonText,
  showCarousel,
  showRotatingText,
  rotatingWords,
  introText,
  services,
  partners,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24"
    >
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      {showRotatingText && rotatingWords && introText && (
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {introText}
          {isActive && (
            <RotatingText
              words={rotatingWords}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          )}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {services && (
        <>
          {/* Mobile: Carousel with swipe */}
          <div className="md:hidden">
            <ServicesCarousel services={services} isActive={isActive} />
          </div>

          {/* Desktop: Grid layout */}
          <motion.div
            className="hidden md:grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
      {partners && (
        <>
          {/* Mobile: Carousel with swipe */}
          <div className="md:hidden">
            <PartnersCarousel partners={partners} isActive={isActive} />
          </div>

          {/* Desktop: Card layout */}
          <motion.div
            className="hidden md:block mt-8 space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-start gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Image
                    src={partner.logo || '/placeholder.svg'}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{partner.name}</h3>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
      {showCarousel && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TechCarousel />
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
