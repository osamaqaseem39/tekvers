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
  Gift,
  Smartphone,
  BarChart3,
  Shield
} from 'lucide-react'

const PerkUPPage = () => {
  const technologies = [
    'ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'React', 
    'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'JWT'
  ]

  const features = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Loyalty Program Management',
      description: 'Customizable reward programs, points-based systems, and tiered memberships'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Multi-Platform Support',
      description: 'Web admin dashboard (React) and mobile app (Flutter) with real-time synchronization'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reporting',
      description: 'Insights into customer behavior, engagement metrics, and ROI tracking'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'JWT authentication, encrypted data, and role-based access control'
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
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    PerkUP
                  </h1>
                  <p className="text-xl text-accent font-medium">Multi-Platform Loyalty & Rewards System</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A multi-platform loyalty and rewards management system built to help businesses create and manage 
                customer engagement programs across web and mobile platforms. It offers customizable reward programs, 
                gamified experiences, and real-time analytics for tracking customer loyalty and performance.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Multi-Platform
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Loyalty
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Rewards
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/perkup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://perkup-demo.vercel.app"
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
                  <Gift className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">Loyalty & Rewards Platform</p>
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
              <div className="text-text/70">Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Loyalty</div>
              <div className="text-text/70">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Gamification</div>
              <div className="text-text/70">Features</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Offline</div>
              <div className="text-text/70">Support</div>
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
              PerkUP empowers brands to retain customers, increase engagement, and enhance loyalty-driven growth 
              through a seamless, secure, and scalable experience for both administrators and customers. The goal 
              is to deliver comprehensive loyalty management solutions across multiple platforms.
            </p>
            <p className="mb-6">
              The platform includes customer engagement with gamification, promotions, and personalized offers to 
              boost retention, along with reward catalog for earning, redeeming, and tracking rewards through an 
              intuitive interface. Features include offline support & notifications with mobile app offline mode 
              and push notifications for user engagement.
            </p>
            <p>
              Built with ASP.NET Core, React, and Flutter, the platform demonstrates expertise in multi-platform 
              development, loyalty program management, and modern business solutions for customer engagement and 
              retention strategies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PerkUPPage
