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
  Terminal,
  Cloud,
  Users2,
  BarChart3
} from 'lucide-react'

const EverXNodePage = () => {
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 
    'Express.js/NestJS', 'MongoDB/PostgreSQL', 'JWT', 'Redis', 'Docker'
  ]

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Integrated Development Environment',
      description: 'Online code editor, npm package management, and pre-built templates for rapid development'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Deployment',
      description: 'Automated deployment with Docker containerization and scalability support'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Real-Time Collaboration',
      description: 'Team-based project management with shared workspaces and version control'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Monitoring & Logging',
      description: 'Centralized application monitoring, logging, and performance analytics'
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
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    EverX Node
                  </h1>
                  <p className="text-xl text-accent font-medium">Node.js Development Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A modern Node.js development and deployment platform designed to streamline the end-to-end workflow 
                for developers and organizations. It provides an integrated environment for building, deploying, and 
                managing Node.js applications with built-in support for real-time collaboration and cloud deployment.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Development Platform
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Cloud Ready
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/everx-node"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://everx-node-demo.vercel.app"
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
                  <Terminal className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">Node.js Development Platform</p>
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
              <div className="text-4xl font-bold text-accent mb-2">Node.js</div>
              <div className="text-text/70">Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Cloud</div>
              <div className="text-text/70">Deployment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-text/70">Collaboration</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">CI/CD</div>
              <div className="text-text/70">Pipeline</div>
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
              EverX Node simplifies Node.js development by combining tools, automation, and infrastructure into a 
              unified platform that enhances productivity, scalability, and reliability. The goal is to provide 
              an integrated environment for building, deploying, and managing Node.js applications with comprehensive 
              development tools.
            </p>
            <p className="mb-6">
              The platform includes security & authentication with secure JWT-based authentication, role management, 
              and API protection, along with CI/CD pipeline for continuous integration and deployment for streamlined 
              release cycles. It features multi-tenant architecture supporting multiple users and organizations with 
              isolated environments.
            </p>
            <p>
              Developer tools include CLI utilities, API testing, environment management, and automated backups, 
              all designed to enhance productivity and streamline the Node.js development workflow. The platform 
              demonstrates expertise in modern development platforms, cloud architecture, and developer experience optimization.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default EverXNodePage
