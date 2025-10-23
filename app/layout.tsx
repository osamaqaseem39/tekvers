import type { Metadata } from 'next'
import { Inter, Orbitron, Jost } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'TekVers - Expanding the Technology Universe',
  description: 'Empowering businesses with AI, software, and cloud innovation. TekVers delivers cutting-edge technology solutions across software development, AI, cloud, DevOps, cybersecurity, design, and digital marketing.',
  keywords: 'software development, AI, cloud computing, DevOps, cybersecurity, web development, mobile apps, machine learning, cloud migration, digital transformation',
  authors: [{ name: 'TekVers' }],
  creator: 'TekVers',
  publisher: 'TekVers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tekvers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TekVers - Expanding the Technology Universe',
    description: 'Empowering businesses with AI, software, and cloud innovation.',
    url: 'https://tekvers.com',
    siteName: 'TekVers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TekVers - Technology Universe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TekVers - Expanding the Technology Universe',
    description: 'Empowering businesses with AI, software, and cloud innovation.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${jost.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
