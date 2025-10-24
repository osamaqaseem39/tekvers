import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import DigitalMarketingSection from '@/components/DigitalMarketingSection'
import TechnologiesSection from '@/components/TechnologiesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <DigitalMarketingSection />
      <TechnologiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
