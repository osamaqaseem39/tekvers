'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TechnologiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techCategories = [
    {
      title: 'Frontend',
      technologies: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'TypeScript']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Django', 'FastAPI', 'Laravel', 'Spring Boot', 'Express.js']
    },
    {
      title: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'Hugging Face', 'Pandas']
    },
    {
      title: 'Cloud/DevOps',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      title: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'MySQL', 'DynamoDB']
    },
    {
      title: 'Mobile',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-secondary/20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/technologiessection.jpg" 
          alt="Technologies Section Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">End-to-End IT Solutions</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment — we craft reliable and future-ready tech 
            experiences. We stay at the forefront of technology, using the latest tools and 
            frameworks to deliver cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              className="tech-card"
            >
              <h3 className="text-xl font-semibold text-text mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + techIndex * 0.05, 
                      duration: 0.5 
                    }}
                    className="px-4 py-2 bg-secondary/50 border border-accent/20 rounded-full text-sm text-text/80 hover:text-accent hover:border-accent/40 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h3 className="text-2xl font-heading font-bold mb-6">
              And Many More...
            </h3>
            <p className="text-lg text-text/80 max-w-3xl mx-auto leading-relaxed">
              Our technology stack is constantly evolving. We work with 50+ technologies 
              across different domains to ensure we can provide the best solution for 
              your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                'GitHub', 'Jira', 'Figma', 'VS Code', 'Postman', 'Selenium', 
                'Power BI', 'Tableau', 'Stripe', 'HubSpot', 'Zapier', 'Unity'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/30 border border-accent/10 rounded-full text-sm text-text/60 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
