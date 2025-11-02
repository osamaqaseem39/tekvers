import type { Metadata } from 'next'
import Script from 'next/script'
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
  title: 'TekVerse | AI-Driven Software Development & Digital Marketing Solutions',
  description: 'TekVerse empowers your business through smart AI, custom software development, and data-driven digital marketing. We build intelligent solutions that help brands grow faster, smarter, and globally.',
  keywords: 'AI software development, digital marketing, TekVerse, IT solutions, technology company, AI software company, software development agency, digital marketing agency, AI-powered marketing, TekVerse Pakistan, IT company, AI automation, tech solutions, web development, brand growth',
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
    title: 'TekVerse | AI-Driven Software Development & Digital Marketing Solutions',
    description: 'TekVerse empowers your business through smart AI, custom software development, and data-driven digital marketing.',
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
    title: 'TekVerse | AI-Driven Software Development & Digital Marketing Solutions',
    description: 'TekVerse empowers your business through smart AI, custom software development, and data-driven digital marketing.',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3PL6FZF2V2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PL6FZF2V2');
          `}
        </Script>
      </body>
    </html>
  )
}
