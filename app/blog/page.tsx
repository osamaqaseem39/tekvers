import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight,
  User,
  Eye
} from 'lucide-react'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software, from automated code generation to intelligent debugging.',
      content: 'Artificial intelligence is transforming every aspect of software development...',
      author: 'TekVers Team',
      date: '2024-12-01',
      readTime: '5 min read',
      tags: ['AI', 'Software Development', 'Technology'],
      image: '/api/placeholder/600/400',
      views: 1250
    },
    {
      id: 2,
      title: 'Cloud-Native Architecture Best Practices',
      excerpt: 'Learn the essential principles and patterns for building scalable, resilient cloud-native applications.',
      content: 'Cloud-native architecture represents a fundamental shift in how we design and deploy applications...',
      author: 'TekVers Team',
      date: '2024-11-28',
      readTime: '7 min read',
      tags: ['Cloud', 'DevOps', 'Architecture'],
      image: '/api/placeholder/600/400',
      views: 980
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2025',
      excerpt: 'Stay ahead of emerging threats with our comprehensive guide to cybersecurity trends and best practices.',
      content: 'As technology evolves, so do the threats that target our digital infrastructure...',
      author: 'TekVers Team',
      date: '2024-11-25',
      readTime: '6 min read',
      tags: ['Cybersecurity', 'Security', 'Trends'],
      image: '/api/placeholder/600/400',
      views: 1100
    },
    {
      id: 4,
      title: 'Building Scalable Microservices',
      excerpt: 'A deep dive into microservices architecture, covering design patterns, communication strategies, and deployment best practices.',
      content: 'Microservices architecture has become the de facto standard for building large-scale applications...',
      author: 'TekVers Team',
      date: '2024-11-20',
      readTime: '8 min read',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      image: '/api/placeholder/600/400',
      views: 850
    },
    {
      id: 5,
      title: 'The Rise of Web3 Development',
      excerpt: 'Understanding blockchain technology, smart contracts, and decentralized applications in the modern web.',
      content: 'Web3 represents a paradigm shift towards a more decentralized and user-controlled internet...',
      author: 'TekVers Team',
      date: '2024-11-15',
      readTime: '6 min read',
      tags: ['Web3', 'Blockchain', 'Decentralized'],
      image: '/api/placeholder/600/400',
      views: 920
    },
    {
      id: 6,
      title: 'DevOps Automation Strategies',
      excerpt: 'Streamline your development workflow with proven DevOps automation techniques and CI/CD best practices.',
      content: 'DevOps automation is crucial for maintaining high-quality software delivery at scale...',
      author: 'TekVers Team',
      date: '2024-11-10',
      readTime: '5 min read',
      tags: ['DevOps', 'Automation', 'CI/CD'],
      image: '/api/placeholder/600/400',
      views: 750
    }
  ]

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'AI', count: 1 },
    { name: 'Cloud', count: 1 },
    { name: 'Cybersecurity', count: 1 },
    { name: 'Architecture', count: 2 },
    { name: 'Web3', count: 1 },
    { name: 'DevOps', count: 1 }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/blogpage.jpg" 
            alt="Blog Page Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Our Blog</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thought leadership on the latest trends in 
            technology, software development, and digital innovation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-secondary/50 text-text/70 hover:text-accent hover:bg-accent/10"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8">
              <span className="gradient-text">Featured Article</span>
            </h2>
            
            <div className="tech-card group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-accent/50">
                      {blogPosts[0].title.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-text/60">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blogPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text/60">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text/60">
                      <Eye className="w-4 h-4" />
                      <span>{blogPosts[0].views} views</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-text/70 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="tech-card group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent/50">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-text/60">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="text-text/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on technology, 
              software development, and digital innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:border-accent focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage
