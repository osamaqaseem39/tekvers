import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { 
  Megaphone, 
  Search, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | TekVerse – Grow Your Brand with Data-Driven Strategy',
  description: 'Boost your online visibility with TekVerse\'s SEO, PPC, and social media marketing services. We help you attract, engage, and convert customers.',
  keywords: 'digital marketing services, SEO services, PPC campaigns, social media marketing, online advertising, content marketing, branding strategy, marketing agency Pakistan',
}

const DigitalMarketingPage = () => {
  const features = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and organic traffic with proven SEO strategies.'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Google Ads, Facebook Ads, and other paid campaigns that deliver results.'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all social media platforms with compelling content.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and comprehensive reporting on campaign performance.'
    },
    {
      icon: Zap,
      title: 'Content Marketing',
      description: 'Strategic content creation that attracts, engages, and converts your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Scalable marketing strategies that drive sustainable business growth.'
    }
  ]

  const technologies = [
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Google Ads', category: 'Advertising' },
    { name: 'Facebook Ads', category: 'Advertising' },
    { name: 'SEMrush', category: 'SEO Tools' },
    { name: 'Ahrefs', category: 'SEO Tools' },
    { name: 'HubSpot', category: 'Marketing Automation' },
    { name: 'Mailchimp', category: 'Email Marketing' },
    { name: 'Hootsuite', category: 'Social Media' },
    { name: 'Buffer', category: 'Social Media' },
    { name: 'Canva', category: 'Design' },
    { name: 'Hotjar', category: 'User Analytics' },
    { name: 'Mixpanel', category: 'Product Analytics' }
  ]

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive marketing strategies based on your business goals.'
    },
    {
      step: '02',
      title: 'Audience Research',
      description: 'Identify and understand your target audience and their preferences.'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Create compelling content that resonates with your audience.'
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Execute multi-channel marketing campaigns across all platforms.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Track performance and optimize campaigns for better results.'
    },
    {
      step: '06',
      title: 'Reporting & Analysis',
      description: 'Provide detailed reports and insights for continuous improvement.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">Digital Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Marketing That Drives</span>
                <br />
                <span className="text-text">Measurable Growth</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                TekVerse creates marketing campaigns powered by analytics and creativity. From 
                SEO to paid ads, we help your business achieve measurable digital success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Marketing Campaign
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Marketing Results
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-accent text-sm font-mono">
                      <div className="mb-2">// Digital Marketing</div>
                      <div className="text-text/60">traffic: '+300%',</div>
                      <div className="text-text/60">leads: '+250%',</div>
                      <div className="text-text/60">conversions: '+180%'</div>
                      <div className="text-accent">// ROI: 400%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">SEO & Content Strategy</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions to grow your business and 
              reach your target audience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors">
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

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Social Media & Paid Campaigns</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading marketing tools and platforms to maximize your results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="tech-card text-center group">
                <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  {tech.name}
                </div>
                <div className="text-xs text-text/60">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Marketing Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a data-driven approach to ensure your marketing campaigns deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="tech-card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center text-primary font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {step.step === '05' ? 'Analytics | Branding | ROI Optimization' : step.title}
                    </h3>
                  </div>
                  <p className="text-text/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-purple-500 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your marketing goals and create campaigns that drive 
              traffic, generate leads, and increase your revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Marketing Campaign
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Marketing Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default DigitalMarketingPage
