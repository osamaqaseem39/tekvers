'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Zap, Shield } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of technology to create solutions that were previously impossible.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Every solution we build prioritizes security and data protection from the ground up.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, not just service providers.'
    },
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Our solutions are designed to grow with your business and adapt to changing needs.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">Why Choose TekVerse?</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Our team combines innovation, creativity, and analytics to deliver 
            measurable success. We're trusted by startups and enterprises worldwide, 
            with certified AI and marketing professionals providing 24/7 customer support and maintenance.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="tech-card text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">{value.title}</h3>
              <p className="text-text/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-text/80 leading-relaxed">
                To democratize access to cutting-edge technology solutions and empower 
                businesses of all sizes to compete in the digital age. We believe that 
                every company deserves access to world-class technology, regardless of 
                their size or budget.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/aboutsection.jpg" 
                alt="About TekVerse Mission" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
