'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  // Mobile-first: assume mobile by default for faster LCP on mobile devices
  const [isMobile, setIsMobile] = useState(true)
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    // Detect mobile device immediately
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768
      setIsMobile(isMobileDevice)
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShouldReduceMotion(prefersReducedMotion)

    // Check immediately on mount
    checkMobile()
    
    // Only listen to resize after initial check to avoid hydration issues
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Optimize animations for mobile
  const animationDuration = isMobile || shouldReduceMotion ? 0.3 : 0.8
  const animationDelay = isMobile || shouldReduceMotion ? 0 : 0.4

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      
      {/* Floating Elements - Reduced on mobile for performance */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: isMobile ? 0 : 0.2, duration: isMobile ? 0.2 : 0.6 }}
              className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm text-text">Technology Universe</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : animationDelay, duration: animationDuration }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight px-2 sm:px-0"
            >
              <span className="gradient-text">Innovate. Automate. Dominate</span>
              <br />
              <span className="text-text">with TekVerse</span>
            </motion.h1>

            {/* Subheading - LCP element, optimize for immediate render on mobile */}
            <motion.p
              initial={isMobile || shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile || shouldReduceMotion ? { duration: 0 } : { delay: 0.6, duration: animationDuration }}
              className="text-xl sm:text-2xl text-text/80 max-w-3xl mx-auto leading-relaxed"
              style={{ willChange: isMobile ? 'auto' : 'opacity, transform' }}
            >
              TekVerse empowers your business through smart AI, custom software development, 
              and data-driven digital marketing. We build intelligent solutions that help brands grow faster, smarter, and globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.8, duration: animationDuration }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-4 sm:px-0"
            >
              <Link
                href="/services"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/portfolio"
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Portfolio</span>
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 1, duration: animationDuration }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto pt-8 sm:pt-16 px-4 sm:px-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-text/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-text/60">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-text/60">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for performance */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.5, duration: animationDuration }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
              transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero