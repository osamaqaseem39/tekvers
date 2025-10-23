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
  Trophy as TrophyIcon,
  Users2,
  BarChart3,
  Shield
} from 'lucide-react'

const TableTennisBackendPage = () => {
  const technologies = [
    'Node.js', 'Express.js', 'JavaScript/TypeScript', 'MongoDB', 'Mongoose ODM', 
    'JWT', 'Passport.js', 'Joi/express-validator', 'Multer', 'Swagger/OpenAPI'
  ]

  const features = [
    {
      icon: <TrophyIcon className="w-6 h-6" />,
      title: 'Tournament Management',
      description: 'Create and configure tournaments, bracket generation, tournament history, and multiple tournament types'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Player Management',
      description: 'Player registration, profiles, rankings (ELO), statistics, categories, and match history'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Match Management',
      description: 'Automated match scheduling, score recording, match types, and detailed statistics'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Performance',
      description: 'JWT authentication, role-based access, password hashing, and optimized database queries'
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
                  <TrophyIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold gradient-text">
                    Table Tennis Backend
                  </h1>
                  <p className="text-xl text-accent font-medium">Tournament Management API</p>
                </div>
              </div>
              
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                A robust backend API built with Node.js and Express.js for managing table tennis tournaments. 
                The system streamlines tournament operations by handling player registration, match scheduling, 
                scoring, and tournament administration with real-time updates and comprehensive analytics.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                  Tournament
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                  Backend API
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">
                  Real-time
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39/table-tennis-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </Link>
                <Link
                  href="https://table-tennis-api-demo.vercel.app"
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
                  <TrophyIcon className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                  <p className="text-text/60">Tournament Management API</p>
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
              <div className="text-4xl font-bold text-accent mb-2">Tournament</div>
              <div className="text-text/70">Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-text/70">Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">ELO</div>
              <div className="text-text/70">Ranking</div>
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
              The Table Tennis Backend API enables organizers to efficiently manage tournaments while enhancing the 
              player and spectator experience through comprehensive tournament management, player statistics, and 
              real-time updates. The system provides automated bracket generation and detailed analytics for 
              tournament operations.
            </p>
            <p className="mb-6">
              The platform includes scoring system with real-time score updates, set management, tie-breakers, 
              score validation, and history tracking, along with administrative features for tournament oversight, 
              reporting, analytics, system configuration, and player management.
            </p>
            <p>
              Built with performance & reliability in mind, the system features optimized database queries, caching, 
              asynchronous operations, connection pooling, and scalable architecture. The project demonstrates 
              expertise in sports technology, tournament management, and modern backend development for competitive 
              sports applications.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TableTennisBackendPage
