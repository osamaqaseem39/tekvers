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
  Layers,
  Database,
  Settings
} from 'lucide-react'

const BackendGeneratorPage = () => {
  const technologies = [
    'TypeScript', 'Node.js', 'NestJS', 'Commander.js', 'Inquirer.js', 
    'Jest', 'ESLint', 'Prettier', 'Git', 'npm'
  ]

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Automated Code Generation',
      description: 'Instantly create NestJS modules, controllers, services, and GraphQL resolvers with CLI commands'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'GraphQL Integration',
      description: 'Auto-generate schemas, queries, and mutations for seamless GraphQL API development'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Template System',
      description: 'Customizable templates for APIs, microservices, and databases with flexible configuration'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Interactive CLI',
      description: 'Intuitive command-line interface for easy project setup and configuration management'
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
                    Backend Generator
                  </h1>
                  <p className="text-xl text-accent font-medium">CLI Development Tool</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A powerful CLI tool built with TypeScript that automates the creation of NestJS backends with GraphQL 
                support. It streamlines development by generating boilerplate code for modules, services, resolvers, 
                and APIs, enabling developers to build scalable, production-ready backends in minutes.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  CLI Tool
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  NestJS
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  GraphQL
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/backend-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://backend-generator-demo.vercel.app"
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
                  <p className="text-text/60">CLI Development Tool</p>
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
              <div className="text-4xl font-bold text-accent mb-2">CLI</div>
              <div className="text-text/70">Command Line Tool</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Auto</div>
              <div className="text-text/70">Code Generation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">GraphQL</div>
              <div className="text-text/70">API Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Scalable</div>
              <div className="text-text/70">Architecture</div>
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
              The Backend Generator accelerates backend development by automating repetitive tasks, enforcing best 
              practices, and providing a consistent foundation for high-quality NestJS and GraphQL applications. 
              Designed for consistency, efficiency, and flexibility, it empowers teams to focus on logic rather than repetitive setup.
            </p>
            <p className="mb-6">
              The tool includes built-in JWT authentication scaffolding, automatic generation of validation-ready DTO classes, 
              and flexible configuration management with customizable output paths and naming rules. It enforces best 
              practices and maintainable project architecture across development teams.
            </p>
            <p>
              With its interactive CLI interface and comprehensive template system, the Backend Generator ensures 
              standardized structure and rapid development across projects, making it an essential tool for modern 
              backend development workflows.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BackendGeneratorPage
