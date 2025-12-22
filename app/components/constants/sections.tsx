import Image from 'next/image'
import nougatLogo from '@/public/nougat-logo.png'
import ibicareLogo from '@/public/ibicare-logo.png'
import maspedidosLogo from '@/public/maspedidos-logo.png'

export const sections = [
  {
    id: 'hero',
    subtitle: <Image src={nougatLogo} alt="Logo de Nougat" className="h-12 w-auto" priority />,
    introText: 'Nosotros ',
    showRotatingText: true,
    rotatingWords: [
      'modernizamos',
      'optimizamos',
      'transformamos',
      'automatizamos',
      'aceleramos',
      'mejoramos',
      'escalamos',
      'eficientamos',
    ],
    title: 'Modernización Tecnológica Sin Detener Operaciones',
    content:
      'Reducimos deuda técnica y automatizamos procesos sin interrumpir tu operación diaria.',
    showButton: false,
  },
  {
    id: 'services',
    title: 'Nuestros Servicios',
    services: [
      {
        title: 'Desarrollo Web',
        description:
          'Modernizamos sistemas legacy y reducimos procesos manuales. Transformamos plataformas obsoletas en soluciones modernas que mejoran la eficiencia y reducen costos operativos.',
      },
      {
        title: 'Desarrollo Móvil',
        description:
          'Aplicaciones móviles que automatizan procesos y mejoran la productividad de tu equipo. Soluciones nativas e híbridas optimizadas para eficiencia operativa.',
      },
      {
        title: 'Diseño UI/UX',
        description:
          'Interfaces intuitivas que reducen errores y tiempo de capacitación. Transformamos procesos complejos en experiencias digitales claras y funcionales para tu equipo.',
      },
      {
        title: 'Sistemas Embebidos e IoT',
        description:
          'Automatización y monitoreo en tiempo real. Soluciones integradas que conectan dispositivos y optimizan procesos operativos sin interrupciones.',
      },
      {
        title: 'Arquitectura Cloud',
        description:
          'Infraestructura escalable que reduce costos y garantiza continuidad del negocio. Migramos sistemas legacy a la nube sin detener operaciones.',
      },
      {
        title: 'Inteligencia Artificial',
        description:
          'Automatización inteligente de procesos y toma de decisiones basada en datos. Chatbots, análisis predictivo y soluciones de machine learning personalizadas para tu negocio.',
      },
    ],
  },
  {
    id: 'partners',
    title: 'Casos de Éxito',
    partners: [
      {
        name: 'Ibicare',
        description:
          'Migración de la aplicación móvil de Xamarin a Flutter y reconstrucción de servicios legacy de Windows en Express.js, logrando una solución unificada, de alto rendimiento y escalable sin interrumpir operaciones.',
        logo: ibicareLogo,
      },
      {
        name: 'MasPedidos',
        description:
          'Implementación de soluciones de impresión usando WebUSB, Web Bluetooth e integraciones nativas de Windows para habilitar comunicación fluida entre navegadores e impresoras, con desarrollo continuo de nuevas funcionalidades.',
        logo: maspedidosLogo,
      },
    ],
  },
  {
    id: 'technologies',
    title: 'Tecnologías Modernas y Confiables',
    content:
      'Trabajamos con las herramientas más modernas y confiables del mercado que permiten modernización rápida y continuidad del negocio.',
    showCarousel: true,
  },
  {
    id: 'contact',
    title: 'Agenda Tu Diagnóstico',
    content:
      '¿Listo para modernizar tu negocio sin detener operaciones? Agenda tu diagnóstico sin costo y obtén tu roadmap tecnológico personalizado.',
    showButton: true,
    buttonText: 'Agenda Diagnóstico Sin Costo',
  },
]
