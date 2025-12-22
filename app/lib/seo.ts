import { Metadata } from 'next'

export const siteConfig = {
  name: 'Nougat - Digital Solutions',
  title: 'Moderniza Tu PYME Sin Detener Operaciones | Nougat',
  description:
    'Soluciones de modernización tecnológica para PYMES. Reducimos deuda técnica, automatizamos procesos y modernizamos sistemas legacy sin interrumpir tu operación. Diagnóstico sin costo.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/landing-page/opengraph-image',
  author: 'Nougat',
  keywords: [
    'modernización tecnológica pymes',
    'deuda técnica',
    'sistemas legacy',
    'automatización procesos',
    'transformación digital pymes',
    'roadmap tecnológico',
    'diagnóstico tecnológico',
    'modernización sistemas',
    'continuidad negocio',
    'eficiencia operativa',
  ],
  creator: 'Nougat',
  themeColor: '#000000',
  language: 'es',
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/landing-page/favicon.ico',
    shortcut: '/landing-page/favicon-16x16.png',
    apple: '/landing-page/apple-touch-icon.png',
  },
  manifest: '/landing-page/manifest.json',
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/nougat-logo.png`,
  sameAs: ['https://instagram.com/nougat.dev'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Atención al Cliente',
    availableLanguage: ['Spanish', 'Español'],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}
