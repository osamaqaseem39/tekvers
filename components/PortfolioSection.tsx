'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
}

const PortfolioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate GitHub API call - in production, you'd call the actual GitHub API
    const fetchRepos = async () => {
      try {
        // Mock data for demonstration
        const mockRepos: GitHubRepo[] = [
          {
            id: 1,
            name: 'AI-Powered E-commerce Platform',
            description: 'A full-stack e-commerce solution with AI recommendations, real-time analytics, and automated inventory management.',
            html_url: 'https://github.com/osamaqaseem39/ai-ecommerce',
            homepage: 'https://ai-ecommerce-demo.vercel.app',
            language: 'TypeScript',
            stargazers_count: 42,
            forks_count: 18,
            topics: ['react', 'nodejs', 'ai', 'ecommerce', 'typescript'],
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-12-01T14:20:00Z'
          },
          {
            id: 2,
            name: 'Cloud-Native Microservices',
            description: 'Scalable microservices architecture with Docker, Kubernetes, and automated CI/CD pipelines.',
            html_url: 'https://github.com/osamaqaseem39/cloud-microservices',
            homepage: '',
            language: 'Go',
            stargazers_count: 28,
            forks_count: 12,
            topics: ['go', 'docker', 'kubernetes', 'microservices', 'devops'],
            created_at: '2024-02-20T09:15:00Z',
            updated_at: '2024-11-28T16:45:00Z'
          },
          {
            id: 3,
            name: 'Machine Learning Dashboard',
            description: 'Interactive dashboard for ML model training, monitoring, and deployment with real-time metrics.',
            html_url: 'https://github.com/osamaqaseem39/ml-dashboard',
            homepage: 'https://ml-dashboard-demo.vercel.app',
            language: 'Python',
            stargazers_count: 35,
            forks_count: 15,
            topics: ['python', 'tensorflow', 'react', 'dashboard', 'ml'],
            created_at: '2024-03-10T11:00:00Z',
            updated_at: '2024-11-25T13:30:00Z'
          },
          {
            id: 4,
            name: 'Blockchain Voting System',
            description: 'Secure, transparent voting system built on Ethereum with smart contracts and Web3 integration.',
            html_url: 'https://github.com/osamaqaseem39/blockchain-voting',
            homepage: 'https://voting-dapp.vercel.app',
            language: 'Solidity',
            stargazers_count: 19,
            forks_count: 8,
            topics: ['solidity', 'ethereum', 'web3', 'blockchain', 'voting'],
            created_at: '2024-04-05T14:20:00Z',
            updated_at: '2024-11-20T10:15:00Z'
          }
        ]
        
        setRepos(mockRepos)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching repositories:', error)
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/portfoliosection.jpg" 
          alt="Portfolio Section Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and innovative solutions that showcase our 
            technical expertise and creative problem-solving.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="tech-card animate-pulse">
                <div className="h-4 bg-secondary rounded mb-4"></div>
                <div className="h-3 bg-secondary rounded mb-2"></div>
                <div className="h-3 bg-secondary rounded mb-6"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-secondary rounded w-16"></div>
                  <div className="h-6 bg-secondary rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="tech-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-text/60">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                <p className="text-text/70 mb-6 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-text/60">
                    <span className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${
                        repo.language === 'TypeScript' ? 'bg-blue-500' :
                        repo.language === 'Go' ? 'bg-cyan-500' :
                        repo.language === 'Python' ? 'bg-yellow-500' :
                        repo.language === 'Solidity' ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}></div>
                      <span>{repo.language}</span>
                    </span>
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-6">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
