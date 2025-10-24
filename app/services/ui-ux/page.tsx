import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  Users, 
  Eye, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const UIUXPage = () => {
  const features = [
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Beautiful, intuitive user interfaces that engage and delight users.'
    },
    {
      icon: Users,
      title: 'UX Research',
      description: 'User-centered design based on research, testing, and user feedback.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Responsive designs optimized for all devices and screen sizes.'
    },
    {
      icon: Eye,
      title: 'Visual Identity',
      description: 'Complete brand identity including logos, colors, and design systems.'
    },
    {
      icon: Zap,
      title: 'Prototyping',
      description: 'Interactive prototypes to test and validate design concepts.'
    },
    {
      icon: Monitor,
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistent brand experience.'
    }
  ]

  const technologies = [
    { name: 'Figma', category: 'Design Tool' },
    { name: 'Adobe XD', category: 'Design Tool' },
    { name: 'Sketch', category: 'Design Tool' },
    { name: 'Framer', category: 'Prototyping' },
    { name: 'Principle', category: 'Animation' },
    { name: 'After Effects', category: 'Motion Graphics' },
    { name: 'Zeplin', category: 'Handoff' },
    { name: 'InVision', category: 'Prototyping' },
    { name: 'Marvel', category: 'Prototyping' },
    { name: 'Lottie', category: 'Animation' },
    { name: 'Adobe Illustrator', category: 'Vector Graphics' },
    { name: 'Photoshop', category: 'Image Editing' }
  ]

  const process = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'Understand your users, business goals, and market requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Define user personas, user journeys, and information architecture.'
    },
    {
      step: '03',
      title: 'Wireframing & Prototyping',
      description: 'Create low-fidelity wireframes and interactive prototypes.'
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Design beautiful, pixel-perfect interfaces with attention to detail.'
    },
    {
      step: '05',
      title: 'Testing & Iteration',
      description: 'User testing and iterative improvements based on feedback.'
    },
    {
      step: '06',
      title: 'Handoff & Support',
      description: 'Developer handoff with detailed specifications and ongoing support.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/uiux.jpg" 
            alt="UI/UX Design Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">UI/UX Design</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Beautiful</span>
                <br />
                <span className="text-text">User Experiences</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                Create stunning, user-friendly interfaces that engage your audience 
                and drive business results. We design experiences that users love.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Design Project
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Design Projects
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-accent text-sm font-mono">
                      <div className="mb-2">/* UI/UX Design */</div>
                      <div className="text-text/60">user_experience {`{`}</div>
                      <div className="text-text/60 ml-4">beauty: 'pixel-perfect',</div>
                      <div className="text-text/60 ml-4">usability: 'intuitive',</div>
                      <div className="text-text/60 ml-4">accessibility: 'inclusive'</div>
                      <div className="text-text/60">{`}`}</div>
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
              <span className="gradient-text">Design Services We Provide</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              From user research to pixel-perfect designs, we create experiences 
              that users love and businesses need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <span className="gradient-text">Design Tools & Technologies</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading design tools to create exceptional user experiences.
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
              <span className="gradient-text">Our Design Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a user-centered design process to create experiences that work.
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
              Ready to Create Amazing Experiences?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your design needs and create user experiences that 
              engage your audience and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Design Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Design Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default UIUXPage
