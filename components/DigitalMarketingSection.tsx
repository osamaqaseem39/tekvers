'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Megaphone,
  ArrowRight 
} from 'lucide-react'

const DigitalMarketingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your visibility with data-driven SEO strategies that drive organic traffic and improve rankings.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted PPC campaigns across Google, Facebook, and other platforms.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive conversions through strategic social media presence.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track performance with comprehensive analytics and actionable insights for continuous improvement.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">Digital Marketing That Delivers Results</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Drive traffic, boost sales, and grow your brand with data-backed strategies. 
            From SEO and PPC to content and social media marketing — we drive engagement, 
            traffic, and conversions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="tech-card group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-text/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
              Let's Build the Future Together
            </h3>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Partner with TekVerse and take your digital presence to the next level. 
              Our certified AI and marketing professionals provide 24/7 customer support and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalMarketingSection
