'use client'

import { useState } from 'react'
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
  ArrowRight
} from 'lucide-react'

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      name: 'AI-Powered E-commerce Platform',
      description: 'A full-stack e-commerce solution with AI recommendations, real-time analytics, and automated inventory management. Features include personalized product suggestions, dynamic pricing, and advanced search capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      category: 'E-commerce',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/ai-ecommerce',
      liveUrl: 'https://ai-ecommerce-demo.vercel.app',
      stars: 42,
      forks: 18,
      createdDate: '2024-01-15',
      updatedDate: '2024-12-01'
    },
    {
      id: 2,
      name: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture with Docker, Kubernetes, and automated CI/CD pipelines. Includes service discovery, load balancing, and distributed logging.',
      image: '/api/placeholder/600/400',
      technologies: ['Go', 'Docker', 'Kubernetes', 'gRPC', 'Prometheus', 'Grafana'],
      category: 'DevOps',
      status: 'Development',
      githubUrl: 'https://github.com/osamaqaseem39/cloud-microservices',
      liveUrl: '',
      stars: 28,
      forks: 12,
      createdDate: '2024-02-20',
      updatedDate: '2024-11-28'
    },
    {
      id: 3,
      name: 'Machine Learning Dashboard',
      description: 'Interactive dashboard for ML model training, monitoring, and deployment with real-time metrics. Features include model versioning, A/B testing, and performance analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'MongoDB', 'Docker'],
      category: 'AI/ML',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/ml-dashboard',
      liveUrl: 'https://ml-dashboard-demo.vercel.app',
      stars: 35,
      forks: 15,
      createdDate: '2024-03-10',
      updatedDate: '2024-11-25'
    },
    {
      id: 4,
      name: 'Blockchain Voting System',
      description: 'Secure, transparent voting system built on Ethereum with smart contracts and Web3 integration. Features include voter authentication, vote encryption, and real-time results.',
      image: '/api/placeholder/600/400',
      technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'IPFS', 'MetaMask'],
      category: 'Blockchain',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/blockchain-voting',
      liveUrl: 'https://voting-dapp.vercel.app',
      stars: 19,
      forks: 8,
      createdDate: '2024-04-05',
      updatedDate: '2024-11-20'
    },
    {
      id: 5,
      name: 'Real-time Chat Application',
      description: 'Scalable chat application with real-time messaging, file sharing, and video calls. Built with WebSocket technology and includes features like message encryption and user presence.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Redis', 'WebRTC'],
      category: 'Communication',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/realtime-chat',
      liveUrl: 'https://chat-app-demo.vercel.app',
      stars: 31,
      forks: 14,
      createdDate: '2024-05-12',
      updatedDate: '2024-11-15'
    },
    {
      id: 6,
      name: 'IoT Device Management Platform',
      description: 'Comprehensive IoT platform for device management, data collection, and analytics. Features include device provisioning, remote monitoring, and predictive maintenance.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      category: 'IoT',
      status: 'Development',
      githubUrl: 'https://github.com/osamaqaseem39/iot-platform',
      liveUrl: '',
      stars: 24,
      forks: 9,
      createdDate: '2024-06-18',
      updatedDate: '2024-11-10'
    }
  ]

  const categories = ['All', 'E-commerce', 'DevOps', 'AI/ML', 'Blockchain', 'Communication', 'IoT']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and innovative solutions that showcase our 
            technical expertise and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent to-purple-500 text-primary'
                    : 'bg-secondary/50 text-text/70 hover:text-accent hover:bg-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="tech-card group">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent/50">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-text/60">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-text/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Updated {formatDate(project.updatedDate)}</span>
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center space-x-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
                Want to see more?
              </h2>
              <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
                Check out our complete portfolio on GitHub and see all our open-source projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View All Projects</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Start a Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PortfolioPage
