'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork,
  Calendar,
  Tag,
  ArrowLeft,
  Play,
  Code,
  Zap,
  Users,
  Trophy,
  Building,
  Leaf,
  Package,
  BarChart3
} from 'lucide-react'

const PaperCompanyPage = () => {
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
    'ESLint', 'Prettier', 'Jest', 'React Testing Library', 'Git'
  ]

  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Industrial Product Catalog',
      description: 'Showcases paper products with detailed specifications and use cases for industrial clients'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Manufacturing & Quality',
      description: 'Displays production capabilities, certifications, and compliance details with quality assurance'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Sustainability Focus',
      description: 'Highlights eco-friendly and responsible manufacturing processes with environmental impact'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Business Information',
      description: 'Company history, partnerships, R&D efforts, and customer services with comprehensive details'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link 
              href="/portfolio"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-500 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    Paper Company
                  </h1>
                  <p className="text-xl text-accent font-medium">Industrial Website</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A modern industrial platform designed for a paper manufacturing business. It highlights the company's 
                products, manufacturing capabilities, and sustainability initiatives through a clean, responsive, 
                and professional interface built with Next.js and TypeScript.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Industrial
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Manufacturing
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Sustainability
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/paper-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://paper-company-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-accent/20">
                <div className="text-center">
                  <Building className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">Industrial Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            <span className="gradient-text">Technologies Used</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-secondary/50 border border-accent/20 rounded-full text-text/70 font-medium hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">
            <span className="gradient-text">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="tech-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-4">
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

      {/* Project Stats */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Industrial</div>
              <div className="text-text/70">Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Sustainability</div>
              <div className="text-text/70">Focus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">SEO</div>
              <div className="text-text/70">Optimized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Responsive</div>
              <div className="text-text/70">Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            <span className="gradient-text">Project Overview</span>
          </h2>
          <div className="prose prose-lg text-text/80 max-w-none">
            <p className="mb-6">
              The Paper Company Website combines technical precision with user-focused design to present the company's 
              industrial operations and services effectively. The project's goal is to deliver a high-performance, 
              scalable, and visually professional digital presence for industrial clients.
            </p>
            <p className="mb-6">
              The platform includes customer services with online quote requests, product inquiries, and documentation 
              access, along with optimized performance featuring fast load times, image optimization, and SEO best 
              practices for maximum visibility and user experience.
            </p>
            <p>
              Built with responsive & accessible design that is fully mobile-friendly and WCAG-compliant interface, 
              the website demonstrates expertise in industrial web development, manufacturing industry solutions, and 
              modern web technologies for business applications.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PaperCompanyPage
