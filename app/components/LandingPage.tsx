'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import nougatLogo from '@/public/nougat-logo.png'
import ibicareLogo from '@/public/ibicare-logo.png'
import maspedidosLogo from '@/public/maspedidos-logo.png'

const NAVY = '#1D2C4C'
const OFFWHITE = '#F1F2F1'
const NEARBLACK = '#0B0C0D'
const RED = '#ef4444'

const SERVICES = [
  { name: 'Software', description: 'Aplicaciones web y móviles con arquitectura escalable', color: '#3178C6' },
  { name: 'IA', description: 'Integración inteligente para acelerar tu producto', color: '#10A37F' },
  { name: 'Hardware', description: 'Soluciones embebidas e integraciones con dispositivos físicos', color: '#FF9900' },
  { name: 'IoT', description: 'Conectividad entre dispositivos, sensores y plataformas', color: '#D97706' },
]

const TECH_ICONS = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextdotjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
  { name: 'Flutter', icon: '/icons/flutter.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Redis', icon: '/icons/redis.svg' },
  { name: 'GraphQL', icon: '/icons/graphql.svg' },
  { name: 'Prisma', icon: '/icons/prisma.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Supabase', icon: '/icons/supabase.svg' },
  { name: 'Firebase', icon: '/icons/firebase.svg' },
  { name: 'Sass', icon: '/icons/sass.svg' },
  { name: 'Rust', icon: '/icons/rust.svg' },
  { name: 'Go', icon: '/icons/go.svg' },
  { name: 'Swift', icon: '/icons/swift.svg' },
  { name: 'Vue', icon: '/icons/vue.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Svelte', icon: '/icons/svelte.svg' },
  { name: 'Nginx', icon: '/icons/nginx.svg' },
  { name: 'Linux', icon: '/icons/linux.svg' },
  { name: 'Stripe', icon: '/icons/stripe.svg' },
]

const AI_TOOLS = [
  { name: 'ChatGPT', color: '#10A37F', icon: '/icons/chatgpt.svg' },
  { name: 'Claude', color: '#D97706', icon: '/icons/claude.svg' },
  { name: 'Copilot', color: '#6E40C9', icon: '/icons/copilot.svg' },
]

const COLLABORATORS = [
  {
    name: 'Ibicare',
    description: 'Migración de servicios de Windows Server a Azure, mantenimiento continuo y desarrollo en curso de su plataforma.',
    logo: ibicareLogo,
    techs: ['Azure', 'Express.js', 'Node.js'],
  },
  {
    name: 'Ibicare',
    description: 'Migración de la app móvil de Xamarin a Flutter y reconstrucción de servicios legacy en Express.js.',
    logo: ibicareLogo,
    techs: ['Flutter', 'Express.js', 'TypeScript'],
  },
  {
    name: 'MasPedidos',
    description: 'Implementación de soluciones de impresión con WebUSB, Web Bluetooth e integraciones nativas de Windows. Comunicación fluida entre navegadores e impresoras térmicas, con soporte offline y sincronización en tiempo real.',
    logo: maspedidosLogo,
    techs: ['WebUSB', 'Web Bluetooth', 'React', 'Node.js'],
  },
  {
    name: 'Kinal',
    description: 'Plataforma de gestión médica entregada en tres meses. Consultas, historiales clínicos, recetas digitales y sincronización offline para médicos.',
    logo: '/icons/kinal.svg',
    techs: ['React', 'Supabase', 'TypeScript', 'PWA'],
  },
]

function LogoMarqueeRow({ direction, speed, rotation, top }: { direction: 'left' | 'right'; speed: number; rotation: number; top: string }) {
  const logos = Array.from({ length: 20 }).map((_, i) => i)
  const doubled = [...logos, ...logos]
  return (
    <div
      className="logo-marquee-row"
      style={{ top, transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="logo-marquee-inner"
        style={{
          animation: `logoMarquee${direction === 'left' ? 'Left' : 'Right'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((_, i) => (
          <Image key={i} src={nougatLogo} alt="" className="h-10 md:h-12 w-auto flex-shrink-0 opacity-80" />
        ))}
      </div>
    </div>
  )
}

function LogoPatternBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.04 }}>
      {Array.from({ length: 24 }).map((_, row) => (
        <LogoMarqueeRow
          key={row}
          direction={row % 2 === 0 ? 'left' : 'right'}
          speed={30 + row * 2}
          rotation={-15}
          top={`${row * 6 - 24}%`}
        />
      ))}
    </div>
  )
}

function HeroSlide({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start snap-always flex flex-col justify-center items-center overflow-hidden" style={{ background: NAVY }}>
      <LogoPatternBg />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.88] tracking-tighter"
          style={{ fontFamily: "'Poppins', sans-serif", color: OFFWHITE }}
          initial={{ opacity: 0, y: 60 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >Creamos</motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >productos.</motion.span>
          <br />
          <motion.span
            className="inline-block"
            style={{ color: RED }}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >No prompts.</motion.span>
        </motion.h1>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        <div className="relative w-px h-10 overflow-hidden" style={{ background: 'rgba(241,242,241,0.15)' }}>
          <div className="absolute top-0 left-0 w-full h-[30%]" style={{ background: OFFWHITE, animation: 'float 2s ease-in-out infinite' }} />
        </div>
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: OFFWHITE, opacity: 0.3 }}>Scroll</span>
      </motion.div>
    </section>
  )
}

function AISlide({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-10 overflow-hidden" style={{ background: NEARBLACK }}>
      <div className="absolute inset-0" style={{ background: 'rgba(239,68,68,0.03)', clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 30% 100%)' }} />

      <div className="absolute top-0 left-0 right-0 py-4 overflow-hidden z-10" style={{ background: 'rgba(11,12,13,0.6)' }}>
        <div className="tech-marquee flex items-center gap-10 whitespace-nowrap">
          {[...TECH_ICONS, ...TECH_ICONS].map((tech, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={i} src={tech.icon} alt={tech.name} className="w-7 h-7 flex-shrink-0 brightness-0 invert" />
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", color: OFFWHITE }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isActive ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ color: OFFWHITE }}>Usamos IA para mejorar </span>
            <span style={{ color: '#10A37F' }}>tiempos de entrega</span>
            <span style={{ color: OFFWHITE }}>, </span>
            <span style={{ color: RED }}>NO</span>
            <span style={{ color: OFFWHITE }}> para generarte un plan</span>
          </motion.h2>
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6">
          {AI_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 60 }}
              animate={isActive ? { opacity: 1, x: i * 40 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              style={{ transform: `translateY(${i * 20}px)` }}
            >
              <span className="text-sm font-medium" style={{ color: OFFWHITE, opacity: 0.4 }}>{tool.name}</span>
              <div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                style={{
                  background: tool.color,
                  borderRadius: i === 0 ? '32% 68% 60% 40% / 40% 30% 70% 60%' : i === 1 ? '60% 40% 30% 70% / 50% 60% 40% 50%' : '40% 60% 70% 30% / 60% 40% 50% 50%',
                  animation: `float ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 400}ms`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-4 overflow-hidden z-10" style={{ background: 'rgba(11,12,13,0.6)' }}>
        <div className="tech-marquee flex items-center gap-10 whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {[...TECH_ICONS, ...TECH_ICONS].map((tech, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={i} src={tech.icon} alt={tech.name} className="w-7 h-7 flex-shrink-0 brightness-0 invert" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCarouselCard({ service }: { service: typeof SERVICES[number] }) {
  return (
    <div
      className="relative flex-shrink-0 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 overflow-hidden whitespace-normal"
      style={{
        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`,
        border: `1px solid ${service.color}25`,
        width: '280px',
      }}
    >
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
        style={{ background: service.color, filter: 'blur(40px)' }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${service.color}18`, color: service.color }}
      >
        <span className="text-lg font-bold">{service.name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: NAVY }}>{service.name}</h3>
      <p className="text-sm leading-relaxed" style={{ color: NEARBLACK, opacity: 0.55 }}>{service.description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
    </div>
  )
}

function ServicesSlide({ isActive }: { isActive: boolean }) {
  const allServices = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES]
  return (
    <section className="relative h-screen w-full snap-start snap-always flex flex-col justify-center overflow-hidden" style={{ background: OFFWHITE }}>
      <motion.h2
        className="text-3xl md:text-5xl font-bold tracking-tight mb-8 md:mb-16 text-center px-6"
        style={{ fontFamily: "'Poppins', sans-serif", color: NAVY }}
        initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        animate={isActive ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Claridad humana en todos nuestros servicios
      </motion.h2>

      {/* Mobile: list */}
      <div className="md:hidden px-6 flex flex-col gap-3">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.name}
            className="flex items-start gap-4 p-4 rounded-xl"
            style={{ background: `${service.color}08`, border: `1px solid ${service.color}15` }}
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${service.color}18`, color: service.color }}
            >
              <span className="text-sm font-bold">{service.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-base font-semibold" style={{ color: NAVY }}>{service.name}</h3>
              <p className="text-xs leading-relaxed mt-0.5" style={{ color: NEARBLACK, opacity: 0.5 }}>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: carousel */}
      <div className="hidden md:block relative overflow-hidden py-4">
        <div className="service-carousel flex items-center gap-6">
          {allServices.map((service, i) => (
            <ServiceCarouselCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CollaboratorsSlide({ isActive }: { isActive: boolean }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!isActive) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % COLLABORATORS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <section className="relative h-screen w-full snap-start snap-always flex items-center px-6 md:px-10 overflow-hidden" style={{ background: NAVY }}>
      <LogoPatternBg />

      {/* Mobile: paginated carousel */}
      <div className="md:hidden w-full relative z-10 flex flex-col items-center justify-center gap-6 h-full">
        <motion.h2
          className="text-3xl font-bold leading-[1.05] tracking-tight text-center"
          style={{ fontFamily: "'Poppins', sans-serif", color: OFFWHITE }}
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={isActive ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Casos de <span style={{ color: '#10A37F' }}>éxito</span>
        </motion.h2>

        <div className="w-full max-w-sm">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              className="p-5 rounded-xl"
              style={{ background: 'rgba(241,242,241,0.08)', border: '1px solid rgba(241,242,241,0.1)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {typeof COLLABORATORS[active].logo === 'string' ? (
                  <img src={COLLABORATORS[active].logo} alt={COLLABORATORS[active].name} className="h-6 w-auto brightness-0 invert opacity-80" />
                ) : (
                  <Image src={COLLABORATORS[active].logo} alt={COLLABORATORS[active].name} className="h-6 w-auto brightness-0 invert opacity-80" />
                )}
                <h3 className="text-base font-semibold" style={{ color: OFFWHITE }}>
                  {COLLABORATORS[active].name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: OFFWHITE, opacity: 0.75 }}>
                {COLLABORATORS[active].description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COLLABORATORS[active].techs.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-full" style={{ background: 'rgba(241,242,241,0.08)', color: OFFWHITE, opacity: 0.6 }}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-5">
            {COLLABORATORS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  background: active === i ? OFFWHITE : 'rgba(241,242,241,0.2)',
                  width: active === i ? '24px' : '8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side carousel */}
      <div className="hidden md:flex w-full max-w-6xl mx-auto relative z-10 items-center gap-20">
        <div className="md:w-1/2 w-full flex flex-col gap-3">
          {COLLABORATORS.map((collab, i) => (
            <motion.div
              key={i}
              className="cursor-pointer"
              onClick={() => setActive(i)}
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0.3,
                scale: active === i ? 1 : 0.97,
              }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: active === i ? 'rgba(241,242,241,0.12)' : 'transparent',
                border: active === i ? '1px solid rgba(241,242,241,0.15)' : '1px solid transparent',
              }}
            >
              <div className="flex items-center gap-4 mb-2">
                {typeof collab.logo === 'string' ? (
                  <img src={collab.logo} alt={collab.name} className="h-6 w-auto brightness-0 invert opacity-80" />
                ) : (
                  <Image src={collab.logo} alt={collab.name} className="h-6 w-auto brightness-0 invert opacity-80" />
                )}
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: OFFWHITE, opacity: active === i ? 0.85 : 0.4 }}
              >
                {collab.description}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-2 overflow-hidden transition-all duration-500"
                style={{ maxHeight: active === i ? '50px' : '0', opacity: active === i ? 1 : 0 }}
              >
                {collab.techs.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[11px] font-medium rounded-full" style={{ background: 'rgba(241,242,241,0.08)', color: OFFWHITE, opacity: 0.7 }}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2 w-full">
          <motion.h2
            className="text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-right"
            style={{ fontFamily: "'Poppins', sans-serif", color: OFFWHITE }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isActive ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Casos de <span style={{ color: '#10A37F' }}>&eacute;xito</span>
          </motion.h2>
          <motion.div
            className="mt-6 flex justify-end gap-2"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {COLLABORATORS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: active === i ? OFFWHITE : 'rgba(241,242,241,0.2)',
                  transform: active === i ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactSlide({ isActive }: { isActive: boolean }) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; mensaje?: string }>({})

  const validate = () => {
    const e: typeof errors = {}
    if (!nombre.trim()) e.nombre = 'Ingresa tu nombre'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Ingresa un email válido'
    if (!mensaje.trim()) e.mensaje = 'Cuéntanos sobre tu proyecto'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const text = `Nombre: ${nombre}%0AEmail: ${email}%0A%0A${mensaje}`
    window.open(`https://api.whatsapp.com/send/?phone=529993012963&text=${text}`, '_blank')
  }

  return (
    <section className="relative h-screen w-full snap-start snap-always flex items-center px-6 md:px-10 overflow-hidden" style={{ background: NEARBLACK }}>
      <div className="absolute inset-0" style={{ background: NAVY, clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 35% 100%)' }} />
      <div className="absolute" style={{ width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(241,242,241,0.03)', bottom: -60, left: -60, animation: 'rotate360 25s linear infinite' }} />

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="md:w-[55%]">
          <motion.h2
            className="text-2xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", color: OFFWHITE }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isActive ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Tu producto merece un equipo, no un prompt.
          </motion.h2>
        </div>
        <motion.div
          className="md:w-[45%] w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="text-sm md:text-lg font-medium mb-3"
            style={{ color: OFFWHITE, opacity: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 0.5, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cont&aacute;ctanos
          </motion.p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <input type="text" placeholder="Nombre" value={nombre} onChange={e => { setNombre(e.target.value); if (errors.nombre) setErrors(prev => ({ ...prev, nombre: undefined })) }} className="flex-1 px-3 py-2.5 text-sm rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-white/20" style={{ background: 'rgba(241,242,241,0.08)', color: OFFWHITE, border: errors.nombre ? '1px solid #ef4444' : '1px solid rgba(241,242,241,0.12)' }} />
                {errors.nombre && <span className="text-xs" style={{ color: '#ef4444' }}>{errors.nombre}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <input type="email" placeholder="Email" value={email} onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: undefined })) }} className="flex-1 px-3 py-2.5 text-sm rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-white/20" style={{ background: 'rgba(241,242,241,0.08)', color: OFFWHITE, border: errors.email ? '1px solid #ef4444' : '1px solid rgba(241,242,241,0.12)' }} />
                {errors.email && <span className="text-xs" style={{ color: '#ef4444' }}>{errors.email}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <textarea placeholder="Cu&eacute;ntanos sobre tu proyecto" rows={3} value={mensaje} onChange={e => { setMensaje(e.target.value); if (errors.mensaje) setErrors(prev => ({ ...prev, mensaje: undefined })) }} className="px-3 py-2.5 text-sm rounded-lg outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-white/20" style={{ background: 'rgba(241,242,241,0.08)', color: OFFWHITE, border: errors.mensaje ? '1px solid #ef4444' : '1px solid rgba(241,242,241,0.12)' }} />
              {errors.mensaje && <span className="text-xs" style={{ color: '#ef4444' }}>{errors.mensaje}</span>}
            </div>
            <button type="submit" className="px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 self-start" style={{ background: OFFWHITE, color: NAVY }}>
              Enviar
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  const slides = [
    <HeroSlide key="hero" isActive={activeSection === 0} />,
    <AISlide key="ai" isActive={activeSection === 1} />,
    <ServicesSlide key="services" isActive={activeSection === 2} />,
    <CollaboratorsSlide key="collabs" isActive={activeSection === 3} />,
    <ContactSlide key="contact" isActive={activeSection === 4} />,
  ]

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30" style={{ scaleX }} />
      <div ref={containerRef} className="h-screen overflow-y-auto snap-y snap-mandatory" style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {slides[0]}
        {slides[1]}
        {slides[2]}
        {slides[3]}
        {slides[4]}
      </div>
    </>
  )
}
