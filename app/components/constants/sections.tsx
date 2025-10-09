import Image from 'next/image'
import nougatLogo from '@/public/nougat-logo.png'

export const sections = [
  {
    id: 'hero',
    subtitle: <Image src={nougatLogo} alt="Nougat logo" className="h-12 w-auto" priority />,
    introText: 'We ',
    showRotatingText: true,
    rotatingWords: [
      'create',
      'design',
      'build',
      'develop',
      'innovate',
      'transform',
      'engineer',
      'scale',
    ],
    title: 'Custom Software Solutions',
    content:
      "They fit with each client's unique processes — working closely with them to turn their needs into intuitive, scalable platforms.",
    showButton: false,
  },
  {
    id: 'services',
    title: 'Our Services',
    services: [
      {
        title: 'Web Development',
        description:
          'From corporate websites to complex systems, we use modern technologies that guarantee high performance and exceptional user experience.',
      },
      {
        title: 'Mobile Development',
        description:
          'We design and develop native or hybrid mobile applications, optimized for Android and iOS with industry best practices.',
      },
      {
        title: 'UI/UX Design',
        description:
          'We create attractive, intuitive, and user-centered interfaces. We transform complex ideas into clear, accessible, and functional digital experiences.',
      },
      {
        title: 'Embedded Systems & IoT',
        description:
          'Integrated solutions for connected devices. From firmware to device-to-device communication, we facilitate hardware and software integration in real-time.',
      },
      {
        title: 'Cloud Architecture',
        description:
          'We architect robust and scalable solutions aligned with your goals. We design cloud infrastructure, microservices, databases, and continuous integration flows.',
      },
      {
        title: 'Artificial Intelligence',
        description:
          'AI integrations, intelligent chatbots, process automation, and custom machine learning solutions for your business.',
      },
    ],
  },
  {
    id: 'partners',
    title: 'Teams we work with',
    partners: [
      {
        name: 'Ibicare',
        description:
          'Migrated the mobile app from Xamarin to Flutter and rebuilt legacy Windows Services in Express.js, achieving a unified, high-performance, and scalable cross-platform solution.',
        logo: '/ibicare-logo.png',
      },
      {
        name: 'MasPedidos',
        description:
          'Implemented printing solutions using WebUSB, Web Bluetooth, and native Windows integrations to enable seamless communication between browsers and printers, with ongoing development of new features and enhancements.',
        logo: '/maspedidos-logo.png',
      },
    ],
  },
  {
    id: 'technologies',
    title: 'Technologies We Master',
    content: 'We work with the most modern and reliable tools on the market.',
    showCarousel: true,
  },
  {
    id: 'contact',
    title: "Let's Start Your Project",
    content:
      "Ready to take your idea to the next level? Contact us today and let's build the digital future of your business together.",
  },
]
