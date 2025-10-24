import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Target, 
  Users, 
  Zap, 
  Shield,
  Globe,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of technology to create solutions that were previously impossible. Our team stays ahead of the curve with the latest technologies and methodologies.',
      features: [
        'Cutting-edge technology adoption',
        'Creative problem-solving approach',
        'Continuous learning and development',
        'Future-focused solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Every solution we build prioritizes security and data protection from the ground up. We implement industry best practices and compliance standards.',
      features: [
        'End-to-end security implementation',
        'Regular security audits',
        'Compliance with industry standards',
        'Data protection and privacy'
      ]
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, not just service providers. Our collaborative approach ensures your vision becomes reality.',
      features: [
        'Transparent communication',
        'Regular progress updates',
        'Client involvement in decisions',
        'Long-term partnership approach'
      ]
    },
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Our solutions are designed to grow with your business and adapt to changing needs. We build for today and plan for tomorrow.',
      features: [
        'Modular architecture design',
        'Cloud-native solutions',
        'Performance optimization',
        'Future-proof technology choices'
      ]
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: 'TekVers Founded',
      description: 'Started with a vision to democratize access to cutting-edge technology solutions.'
    },
    {
      year: '2024',
      title: 'First 10 Clients',
      description: 'Successfully delivered projects for 10+ satisfied clients across various industries.'
    },
    {
      year: '2024',
      title: 'Technology Expansion',
      description: 'Expanded our expertise to include AI, cloud, cybersecurity, and digital marketing.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and remote collaboration capabilities.'
    }
  ]

  const stats = [
    { number: '10+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Projects Delivered', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Globe },
    { number: '100%', label: 'Client Satisfaction', icon: CheckCircle }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/aboutpage.jpg" 
            alt="About Page Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">About TekVers</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            We are an emerging global technology company with 10+ satisfied clients, 
            specializing in futuristic solutions across multiple domains.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-lg text-text/80 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions and empower 
                businesses of all sizes to compete in the digital age. We believe that 
                every company deserves access to world-class technology, regardless of 
                their size or budget.
              </p>
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                We combine cutting-edge technology with innovative thinking to deliver 
                exceptional results that drive real business value.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text">Innovation First</h3>
                      <p className="text-text/70">Always pushing boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text">Security Focused</h3>
                      <p className="text-text/70">Protecting what matters</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text">Client Centric</h3>
                      <p className="text-text/70">Your success is our priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="tech-card group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-text/70 mb-6 leading-relaxed">
                      {value.description}
                    </p>
                    <ul className="space-y-2">
                      {value.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-text/70">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Impact</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-text/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              From our founding to becoming a trusted technology partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-purple-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="tech-card">
                      <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-text mb-2">{milestone.title}</h3>
                      <p className="text-text/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-accent to-purple-500 rounded-full border-4 border-primary flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how TekVers can help you achieve your technology goals 
              and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage
