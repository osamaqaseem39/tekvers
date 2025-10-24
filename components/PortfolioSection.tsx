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
        // All latest projects from portfolio
        const mockRepos: GitHubRepo[] = [
          {
            id: 1,
            name: 'Writer Website',
            description: 'A professional platform for writers and content creators, designed to showcase portfolios, manage content, and engage clients efficiently.',
            html_url: 'https://github.com/osamaqaseem39/writer-website',
            homepage: 'https://writer-website.vercel.app',
            language: 'TypeScript',
            stargazers_count: 19,
            forks_count: 8,
            topics: ['nextjs', 'react', 'typescript', 'tailwind', 'web'],
            created_at: '2025-02-05T10:30:00Z',
            updated_at: '2025-02-07T14:20:00Z'
          },
          {
            id: 2,
            name: 'Taxi Application',
            description: 'A full-stack taxi booking and management platform designed to provide a seamless experience for riders and drivers with real-time tracking and secure payments.',
            html_url: 'https://github.com/osamaqaseem39/taxi-application',
            homepage: 'https://taxi-application.vercel.app',
            language: 'TypeScript',
            stargazers_count: 26,
            forks_count: 11,
            topics: ['react', 'typescript', 'mobile', 'maps', 'redux'],
            created_at: '2025-01-30T09:15:00Z',
            updated_at: '2025-02-02T16:45:00Z'
          },
          {
            id: 3,
            name: 'Table Tennis Backend',
            description: 'A robust backend API built with Node.js and Express.js for managing table tennis tournaments with player registration and match scheduling.',
            html_url: 'https://github.com/osamaqaseem39/table-tennis-backend',
            homepage: 'https://table-tennis-backend.vercel.app',
            language: 'JavaScript',
            stargazers_count: 13,
            forks_count: 5,
            topics: ['nodejs', 'express', 'mongodb', 'backend', 'api'],
            created_at: '2025-01-25T11:00:00Z',
            updated_at: '2025-01-27T13:30:00Z'
          },
          {
            id: 4,
            name: 'Stationary',
            description: 'A modern e-commerce platform for stationary and office supplies built with Next.js, React, and TypeScript, designed to provide a seamless online shopping experience.',
            html_url: 'https://github.com/osamaqaseem39/stationary',
            homepage: 'https://stationary.vercel.app',
            language: 'TypeScript',
            stargazers_count: 22,
            forks_count: 10,
            topics: ['nextjs', 'react', 'typescript', 'ecommerce', 'tailwind'],
            created_at: '2025-01-20T14:20:00Z',
            updated_at: '2025-01-22T10:15:00Z'
          },
          {
            id: 5,
            name: 'POS System',
            description: 'A comprehensive Point of Sale (POS) system designed for retail businesses to efficiently manage sales, inventory, and customers.',
            html_url: 'https://github.com/osamaqaseem39/pos-system',
            homepage: 'https://pos-system.vercel.app',
            language: 'C#',
            stargazers_count: 18,
            forks_count: 8,
            topics: ['aspnet', 'csharp', 'sqlserver', 'enterprise', 'pos'],
            created_at: '2024-12-30T10:30:00Z',
            updated_at: '2025-01-02T14:20:00Z'
          },
          {
            id: 6,
            name: 'Punjab AC',
            description: 'A modern content management system built with Next.js and TypeScript, designed to help businesses and organizations efficiently create, organize, and publish digital content.',
            html_url: 'https://github.com/osamaqaseem39/punjab-ac',
            homepage: 'https://punjab-ac.vercel.app',
            language: 'TypeScript',
            stargazers_count: 14,
            forks_count: 6,
            topics: ['nextjs', 'react', 'typescript', 'cms', 'web'],
            created_at: '2025-01-05T09:15:00Z',
            updated_at: '2025-01-07T16:45:00Z'
          },
          {
            id: 7,
            name: 'Software Company',
            description: 'A professional website designed for a software company, built with Next.js and TypeScript. The platform showcases company services, portfolio projects, team members, and business information.',
            html_url: 'https://github.com/osamaqaseem39/software-company',
            homepage: 'https://software-company.vercel.app',
            language: 'TypeScript',
            stargazers_count: 16,
            forks_count: 7,
            topics: ['nextjs', 'react', 'typescript', 'business', 'web'],
            created_at: '2025-01-10T11:00:00Z',
            updated_at: '2025-01-12T13:30:00Z'
          },
          {
            id: 8,
            name: 'Splendid',
            description: 'A modern creative agency website built with Next.js and TypeScript, designed to showcase creative services, portfolio projects, and client engagement tools.',
            html_url: 'https://github.com/osamaqaseem39/splendid',
            homepage: 'https://splendid.vercel.app',
            language: 'TypeScript',
            stargazers_count: 20,
            forks_count: 9,
            topics: ['nextjs', 'react', 'typescript', 'creative', 'agency'],
            created_at: '2025-01-15T14:20:00Z',
            updated_at: '2025-01-17T10:15:00Z'
          },
          {
            id: 9,
            name: 'Portfolio Website',
            description: 'A modern and responsive developer portfolio website built to showcase projects, skills, and professional experience with a clean, engaging design.',
            html_url: 'https://github.com/osamaqaseem39/portfolio-website',
            homepage: 'https://portfolio-website.vercel.app',
            language: 'TypeScript',
            stargazers_count: 35,
            forks_count: 15,
            topics: ['nextjs', 'react', 'typescript', 'portfolio', 'framer'],
            created_at: '2024-12-25T10:30:00Z',
            updated_at: '2024-12-27T14:20:00Z'
          },
          {
            id: 10,
            name: 'PerkUP',
            description: 'A multi-platform loyalty and rewards management system built to help businesses create and manage customer engagement programs.',
            html_url: 'https://github.com/osamaqaseem39/perkup',
            homepage: 'https://perkup.vercel.app',
            language: 'C#',
            stargazers_count: 32,
            forks_count: 13,
            topics: ['aspnet', 'csharp', 'loyalty', 'enterprise', 'rewards'],
            created_at: '2024-12-20T09:15:00Z',
            updated_at: '2024-12-22T16:45:00Z'
          },
          {
            id: 11,
            name: 'Payday',
            description: 'A modern financial services platform designed to provide loan management, financial tools, and business analytics for individuals and enterprises.',
            html_url: 'https://github.com/osamaqaseem39/payday',
            homepage: 'https://payday.vercel.app',
            language: 'TypeScript',
            stargazers_count: 28,
            forks_count: 11,
            topics: ['nextjs', 'react', 'typescript', 'finance', 'fintech'],
            created_at: '2024-12-15T11:00:00Z',
            updated_at: '2024-12-17T13:30:00Z'
          },
          {
            id: 12,
            name: 'Paper Company',
            description: 'A modern industrial platform designed for a paper manufacturing business. It highlights the company\'s products, manufacturing capabilities, and sustainability initiatives.',
            html_url: 'https://github.com/osamaqaseem39/paper-company',
            homepage: 'https://paper-company.vercel.app',
            language: 'TypeScript',
            stargazers_count: 10,
            forks_count: 4,
            topics: ['nextjs', 'react', 'typescript', 'industrial', 'manufacturing'],
            created_at: '2024-12-10T14:20:00Z',
            updated_at: '2024-12-12T10:15:00Z'
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
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
