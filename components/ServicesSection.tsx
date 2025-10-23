'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Code, 
  Brain, 
  Cloud, 
  Shield, 
  Palette, 
  Megaphone, 
  Settings,
  ArrowRight 
} from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack web, mobile, and desktop applications using modern frameworks and best practices.',
      href: '/services/software-development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI models, chatbots, computer vision, and predictive analytics solutions.',
      href: '/services/ai-ml',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud migration, CI/CD automation, containerization, and infrastructure management.',
      href: '/services/cloud-devops',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits, penetration testing, compliance, and comprehensive protection strategies.',
      href: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Futuristic designs, user experience optimization, and digital identity systems.',
      href: '/services/ui-ux',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'SEO, paid advertising, social media management, and comprehensive marketing strategies.',
      href: '/services/digital-marketing',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'CRM Customization',
      description: 'Custom solutions for Dynamics, Odoo, GoHighLevel, and other business platforms.',
      href: '/services/crm-customization',
      color: 'from-indigo-500 to-purple-500'
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            TekVers delivers end-to-end technology services to help businesses 
            scale intelligently and securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="service-card group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-text/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
              Ready to expand your universe?
            </h3>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's build your next big thing together. Get a personalized quote 
              for your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
