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
  Languages,
  Users2,
  BarChart3
} from 'lucide-react'

const LocalizationSystemPage = () => {
  const technologies = [
    'Python 3.x', 'Django/Flask', 'PostgreSQL/SQLite', 'Django ORM/SQLAlchemy', 'RESTful Web API', 
    'gettext', 'GNU gettext', 'JSON/XML/CSV', 'pytest', 'Git'
  ]

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-language Support',
      description: 'Manage translations for multiple languages and regional variants with comprehensive localization'
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: 'Dynamic Localization',
      description: 'Automatically adapt text, images, and UI to cultural contexts with intelligent detection'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Translation Workflow',
      description: 'Approval, review, and version control for translation processes with collaboration tools'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reporting',
      description: 'Monitor translation quality, progress, and performance metrics with detailed insights'
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
                    Localization System
                  </h1>
                  <p className="text-xl text-accent font-medium">Multi-language Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A comprehensive backend platform designed to manage multi-language content, translations, and 
                cultural adaptations for global applications. Built with Python, it enables developers and businesses 
                to deliver regionally tailored experiences through streamlined translation workflows and cultural formatting tools.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Multi-language
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Global
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/localization-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://localization-demo.vercel.app"
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
                  <p className="text-text/60">Localization Platform</p>
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
              <div className="text-4xl font-bold text-accent mb-2">Multi</div>
              <div className="text-text/70">Language</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Cultural</div>
              <div className="text-text/70">Adaptation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Translation</div>
              <div className="text-text/70">Memory</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Global</div>
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
              The Localization System makes global products truly multilingual, culturally adaptive, and user-friendly 
              across diverse regions and audiences. Its goal is to deliver regionally tailored experiences through 
              streamlined translation workflows, language detection, and cultural formatting tools.
            </p>
            <p className="mb-6">
              The system includes translation memory to store and reuse verified translations for consistency and speed, 
              cultural adaptation to format dates, numbers, and currencies based on locale standards, and language 
              detection & switching to auto-detect and dynamically switch user language preferences.
            </p>
            <p>
              Features include terminology management to maintain consistent terms across all translations, collaboration 
              tools with role-based access for translators, reviewers, and admins, and analytics & reporting to monitor 
              translation quality, progress, and performance metrics. The system demonstrates expertise in global 
              software development, internationalization, and cultural adaptation technologies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default LocalizationSystemPage
