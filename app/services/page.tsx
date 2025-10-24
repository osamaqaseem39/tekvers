import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Code, 
  Brain, 
  Cloud, 
  Shield, 
  Palette, 
  Megaphone, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack web, mobile, and desktop applications using modern frameworks and best practices.',
      href: '/services/software-development',
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'Desktop Software',
        'API Development',
        'Legacy System Modernization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI models, chatbots, computer vision, and predictive analytics solutions.',
      href: '/services/ai-ml',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots & Assistants'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud migration, CI/CD automation, containerization, and infrastructure management.',
      href: '/services/cloud-devops',
      features: [
        'Cloud Migration',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits, penetration testing, compliance, and comprehensive protection strategies.',
      href: '/services/cybersecurity',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Vulnerability Assessment',
        'Security Training'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Futuristic designs, user experience optimization, and digital identity systems.',
      href: '/services/ui-ux',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Design Systems',
        'Prototyping',
        'Brand Identity'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'SEO, paid advertising, social media management, and comprehensive marketing strategies.',
      href: '/services/digital-marketing',
      features: [
        'Search Engine Optimization',
        'Paid Advertising Campaigns',
        'Social Media Management',
        'Content Strategy',
        'Analytics & Reporting'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'CRM Customization',
      description: 'Custom solutions for Dynamics, Odoo, GoHighLevel, and other business platforms.',
      href: '/services/crm-customization',
      features: [
        'Microsoft Dynamics 365',
        'Odoo Customization',
        'GoHighLevel Automation',
        'Salesforce Integration',
        'Custom Workflows'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Transform Your Ideas into Powerful Digital Solutions</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Discover TekVerse's full range of services — from AI-powered software 
            development and automation to data-driven digital marketing. We help brands 
            innovate, grow, and dominate the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="group">
                <div className="bg-secondary/30 backdrop-blur-sm border border-accent/10 rounded-xl p-8 hover:border-accent/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-text/70">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to expand your universe?
            </h2>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ServicesPage
