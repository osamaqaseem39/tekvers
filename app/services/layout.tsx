import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | TekVerse – AI, Software Development & Digital Marketing Experts',
  description: 'Discover TekVerse\'s full range of services — from AI-powered software development and automation to data-driven digital marketing. We help brands innovate, grow, and dominate the digital world.',
  keywords: 'TekVerse services, AI software development, digital marketing company, tech solutions, TekVerse services, AI development company, web app development, software development Pakistan, digital marketing agency, AI automation, branding and SEO services, IT consulting',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
