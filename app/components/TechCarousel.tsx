'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'React Native', iconClass: 'devicon-react-original colored' },
  { name: 'Flutter', iconClass: 'devicon-flutter-plain colored' },
  { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  {
    name: 'AWS',
    iconClass: 'devicon-amazonwebservices-plain-wordmark colored',
  },
  { name: 'Azure', iconClass: 'devicon-azure-plain colored' },
  { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
  { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored' },
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'Next.js', iconClass: 'devicon-nextjs-original-wordmark' },
  { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
]

export default function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full overflow-hidden mt-12">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate the array to create seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 min-w-[140px] h-[140px]"
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            transition={{ duration: 0.2 }}
          >
            <i className={`text-5xl mb-3 ${tech.iconClass}`} aria-hidden="true" />
            <span className="text-sm font-medium text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
