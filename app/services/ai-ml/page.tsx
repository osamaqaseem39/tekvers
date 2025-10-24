import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Brain, 
  Bot, 
  Eye, 
  BarChart3, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const AIMLPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics, classification, and regression tasks.'
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent conversational agents for customer service and automation.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis solutions.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting for business intelligence.'
    },
    {
      icon: Zap,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding.'
    },
    {
      icon: Shield,
      title: 'AI Security & Ethics',
      description: 'Responsible AI implementation with bias detection and fairness.'
    }
  ]

  const technologies = [
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'OpenAI API', category: 'AI Service' },
    { name: 'Scikit-learn', category: 'ML Library' },
    { name: 'Hugging Face', category: 'NLP Platform' },
    { name: 'Pandas', category: 'Data Processing' },
    { name: 'NumPy', category: 'Numerical Computing' },
    { name: 'Keras', category: 'Deep Learning' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'NLTK', category: 'NLP Library' },
    { name: 'SpaCy', category: 'NLP Framework' },
    { name: 'Transformers', category: 'NLP Models' }
  ]

  const process = [
    {
      step: '01',
      title: 'Data Analysis & Preparation',
      description: 'We analyze your data, identify patterns, and prepare datasets for training.'
    },
    {
      step: '02',
      title: 'Model Selection & Design',
      description: 'Choose the right algorithms and design the optimal model architecture.'
    },
    {
      step: '03',
      title: 'Training & Validation',
      description: 'Train models with your data and validate performance using industry standards.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and fine-tuning to achieve optimal performance.'
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'Deploy models to production with seamless integration into your systems.'
    },
    {
      step: '06',
      title: 'Monitoring & Maintenance',
      description: 'Continuous monitoring and model updates to maintain peak performance.'
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">AI & Machine Learning</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Intelligent</span>
                <br />
                <span className="text-text">Solutions</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                Harness the power of artificial intelligence and machine learning to 
                automate processes, gain insights, and create intelligent applications 
                that drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Project
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View AI Projects
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/aiml.jpg" 
                alt="AI/ML Solutions" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">AI Solutions We Build</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              From predictive models to intelligent automation, we create AI solutions 
              that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <span className="gradient-text">AI Technologies We Use</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We work with the latest AI and ML frameworks to deliver cutting-edge solutions.
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
              <span className="gradient-text">Our AI Development Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure your AI solution delivers real business value.
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
                      {step.title}
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
              Ready to Harness AI?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business and create intelligent 
              solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View AI Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AIMLPage
