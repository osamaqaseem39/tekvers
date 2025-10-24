import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Database, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const SoftwareDevelopmentPage = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete web applications with modern frontend and robust backend architecture.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android devices.'
    },
    {
      icon: Monitor,
      title: 'Desktop Software',
      description: 'Custom desktop applications for Windows, macOS, and Linux platforms.'
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Code optimization, caching strategies, and performance monitoring.'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Security best practices, authentication, authorization, and data protection.'
    }
  ]

  const technologies = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'We design the system architecture and create wireframes and prototypes.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your application using agile methodology with regular updates.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit, integration, and user acceptance testing.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your application and provide launch support and training.'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and 24/7 technical support.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">Software Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Custom Software</span>
                <br />
                <span className="text-text">Solutions</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                We build scalable, secure, and high-performance software applications 
                that drive your business forward. From web apps to mobile solutions, 
                we deliver excellence in every line of code.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-accent text-sm font-mono">
                      <div className="mb-2">// Custom Software Development</div>
                      <div className="text-text/60">const solution = {`{`}</div>
                      <div className="text-text/60 ml-4">performance: 'optimized',</div>
                      <div className="text-text/60 ml-4">security: 'enterprise-grade',</div>
                      <div className="text-text/60 ml-4">scalability: 'unlimited'</div>
                      <div className="text-text/60">{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">What We Build</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Our software development services cover every aspect of modern application development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Technologies We Use</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="tech-card text-center group">
                <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  {tech.name}
                </div>
                <div className="text-xs text-text/60">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Development Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure your project is delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="tech-card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center text-primary font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-purple-500 transform -translate-y-1/2" />
                )}
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom software solution 
              that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SoftwareDevelopmentPage
