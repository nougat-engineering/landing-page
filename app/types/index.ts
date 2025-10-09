import type { ReactNode } from 'react'

export interface Service {
  title: string
  description: string
}

export interface Partner {
  name: string
  description: string
  logo: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  showCarousel?: boolean
  showIntro?: boolean
  showRotatingText?: boolean
  rotatingWords?: string[]
  introText?: string
  services?: Service[]
  partners?: Partner[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
