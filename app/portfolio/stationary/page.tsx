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
  ShoppingCart,
  Package,
  BarChart3,
  Smartphone
} from 'lucide-react'

const StationaryPage = () => {
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 
    'Express.js', 'MongoDB/PostgreSQL', 'JWT', 'Jest', 'React Testing Library'
  ]

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Product Management',
      description: 'Full catalog, categories, search, filtering, reviews, high-quality images, and inventory tracking'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'E-commerce Functionality',
      description: 'Shopping cart, secure checkout, payment processing, order management, and shipping integration'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Admin Dashboard',
      description: 'Order processing, customer management, analytics, reporting, and content management'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Performance & UX',
      description: 'Responsive design, fast loading, image optimization, code splitting, and optimized Core Web Vitals'
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
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    Stationary
                  </h1>
                  <p className="text-xl text-accent font-medium">E-commerce Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A modern e-commerce platform for stationary and office supplies built with Next.js, React, and TypeScript, 
                designed to provide a seamless online shopping experience. The platform allows customers to browse products, 
                make purchases, track orders, and manage accounts while giving businesses comprehensive management tools.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  E-commerce
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Stationary
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Full-Stack
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/stationary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://stationary-demo.vercel.app"
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
                  <ShoppingCart className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">E-commerce Platform</p>
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
              <div className="text-4xl font-bold text-accent mb-2">E-commerce</div>
              <div className="text-text/70">Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Stationary</div>
              <div className="text-text/70">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Admin</div>
              <div className="text-text/70">Dashboard</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Future</div>
              <div className="text-text/70">Ready</div>
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
              The Stationary E-commerce Platform delivers an efficient, scalable, and user-friendly online retail 
              solution for stationary products. The goal is to provide comprehensive e-commerce functionality with 
              modern web technologies and optimal user experience for both customers and business owners.
            </p>
            <p className="mb-6">
              The platform includes business operations with inventory updates, automated order processing, returns, 
              and customer support, along with performance & UX optimization including responsive design, fast loading, 
              image optimization, code splitting, lazy loading, and optimized Core Web Vitals for optimal performance.
            </p>
            <p>
              Future-ready features include mobile app development, subscription service, loyalty program, advanced 
              analytics, multi-language support, and API integrations. The project demonstrates expertise in 
              e-commerce development, retail solutions, and modern web technologies for online retail businesses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default StationaryPage
