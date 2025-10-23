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
  Globe,
  Smartphone,
  Zap as Lightning,
  Search
} from 'lucide-react'

const BestVersion1Page = () => {
  const technologies = [
    'Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Jest', 
    'React Testing Library', 'ESLint', 'Prettier', 'Git', 'npm'
  ]

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Modern Responsive Design',
      description: 'Clean and minimalist layout optimized for all screen sizes with mobile-first approach'
    },
    {
      icon: <Lightning className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Built-in image optimization, lazy loading, and bundle reduction for optimal speed'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Type-Safe Development',
      description: 'Full TypeScript integration for robust and maintainable code with compile-time safety'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO & Accessibility',
      description: 'Search engine-friendly structure with WCAG-compliant design and semantic HTML'
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
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    Best Version 1
                  </h1>
                  <p className="text-xl text-accent font-medium">Modern Website</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A modern, high-performance website built with Next.js 14 and TypeScript, showcasing clean design, 
                responsive layouts, and cutting-edge web technologies. It emphasizes user experience, speed, and 
                scalability, serving as a demonstration of professional front-end development practices.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Live Project
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Modern Web
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  High Performance
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/best-version-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://best-version-1-demo.vercel.app"
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
                  <Globe className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">Modern Website Preview</p>
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
              <div className="text-4xl font-bold text-accent mb-2">Next.js</div>
              <div className="text-text/70">Framework</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">TypeScript</div>
              <div className="text-text/70">Type Safety</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Responsive</div>
              <div className="text-text/70">Design</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">SEO</div>
              <div className="text-text/70">Optimized</div>
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
              Best Version 1 demonstrates a strong command of Next.js, TypeScript, and modern UI/UX design, 
              focusing on building fast, accessible, and elegant web experiences that meet modern performance 
              and usability standards. Designed with a minimalist aesthetic, the project highlights modern 
              UI design, accessibility, and strong SEO foundations.
            </p>
            <p className="mb-6">
              The website features a scalable architecture with modular component structure for easy maintenance 
              and growth, optimized user experience with smooth navigation, fast loading times, and consistent 
              visuals. It serves as a comprehensive showcase of professional front-end development practices.
            </p>
            <p>
              Built with performance optimization in mind, the project utilizes Next.js built-in features for 
              image optimization, code splitting, and lazy loading to deliver exceptional user experiences 
              across all devices and network conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BestVersion1Page
