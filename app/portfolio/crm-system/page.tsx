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
  Users2,
  TrendingUp,
  Target,
  BarChart3
} from 'lucide-react'

const CRMSystemPage = () => {
  const technologies = [
    'ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 
    'jQuery', 'Chart.js', 'RESTful Web API', 'Swagger/OpenAPI', 'ASP.NET Core Identity'
  ]

  const features = [
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Customer Management',
      description: 'Centralized profiles, contact tracking, and communication history for comprehensive customer relationships'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sales Pipeline',
      description: 'Lead management, opportunity tracking, and revenue forecasting with automated workflows'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Marketing Automation',
      description: 'Campaign management, email marketing, and ROI analytics for data-driven marketing strategies'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Reporting & Analytics',
      description: 'Interactive dashboards powered by Chart.js with comprehensive business intelligence'
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
                  <Users2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    CRM System
                  </h1>
                  <p className="text-xl text-accent font-medium">Customer Relationship Management</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A full-featured Customer Relationship Management platform built with ASP.NET Core and C#. 
                It provides businesses with a centralized solution for managing customers, tracking sales, 
                monitoring leads, and optimizing marketing efforts through analytics, automation, and role-based access.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Enterprise Ready
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  CRM
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Analytics
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/crm-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://crm-demo.vercel.app"
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
                  <Users2 className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">CRM Dashboard Interface</p>
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
              <div className="text-4xl font-bold text-accent mb-2">Enterprise</div>
              <div className="text-text/70">Grade</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Role-Based</div>
              <div className="text-text/70">Access Control</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Analytics</div>
              <div className="text-text/70">Dashboard</div>
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
              The CRM System integrates sales, marketing, and customer service into a unified application, 
              offering analytics, automation, and role-based access for enterprise use. Designed for scalability 
              and performance, it provides comprehensive business intelligence and customer relationship management.
            </p>
            <p className="mb-6">
              The system includes task and activity tracking for managing calls, meetings, and follow-ups efficiently, 
              along with document management for storing and managing files, notes, and customer documents. 
              Built with enterprise-level performance and future expansion in mind.
            </p>
            <p>
              Features include secure authentication with role-specific permissions for admins, HR staff, and employees, 
              along with interactive charts and dashboards for HR metrics, payroll summaries, and performance trends. 
              The system is optimized for large enterprises with encryption, validation, and data protection compliance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CRMSystemPage
