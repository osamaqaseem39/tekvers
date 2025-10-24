'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'TekVers transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and their cloud migration saved us thousands in costs.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      content: 'The cybersecurity audit they performed was thorough and professional. They identified vulnerabilities we never knew existed and implemented robust protection.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'InnovateLab',
      content: 'Their UI/UX design team created a stunning interface that our users absolutely love. The conversion rate increased by 150% after the redesign.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'CloudScale',
      content: 'The DevOps automation they set up has been a game-changer. Our deployment time went from hours to minutes, and we have zero downtime.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      content: 'Their digital marketing strategies generated a 400% increase in qualified leads. The ROI on their campaigns has been exceptional.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'Alex Patel',
      role: 'Operations Manager',
      company: 'EfficiencyFirst',
      content: 'The CRM customization they did for our business processes has streamlined our operations completely. Customer satisfaction is at an all-time high.',
      rating: 5,
      avatar: 'AP'
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
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with TekVers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="tech-card group relative"
            >
              <Quote className="w-8 h-8 text-accent/30 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text">{testimonial.name}</h4>
                  <p className="text-text/60">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-text/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-text/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-text/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-text/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-text/60">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
