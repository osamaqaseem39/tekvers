import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Settings, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Workflow,
  ArrowRight,
  CheckCircle,
  Database
} from 'lucide-react'

const CRMCustomizationPage = () => {
  const features = [
    {
      icon: Settings,
      title: 'CRM Customization',
      description: 'Tailor your CRM system to match your unique business processes and workflows.'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Advanced user roles, permissions, and access control for your team.'
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Personalized dashboards with real-time analytics and key performance indicators.'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline your business processes.'
    },
    {
      icon: Shield,
      title: 'Data Integration',
      description: 'Seamless integration with existing systems and third-party applications.'
    },
    {
      icon: Workflow,
      title: 'Process Optimization',
      description: 'Optimize your business processes for maximum efficiency and productivity.'
    }
  ]

  const platforms = [
    { name: 'Microsoft Dynamics 365', category: 'Enterprise CRM' },
    { name: 'Odoo', category: 'Open Source ERP' },
    { name: 'GoHighLevel', category: 'Marketing CRM' },
    { name: 'Salesforce', category: 'Cloud CRM' },
    { name: 'HubSpot', category: 'Inbound CRM' },
    { name: 'Zoho CRM', category: 'Business CRM' },
    { name: 'Pipedrive', category: 'Sales CRM' },
    { name: 'Monday.com', category: 'Work Management' },
    { name: 'Asana', category: 'Project Management' },
    { name: 'Trello', category: 'Task Management' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Zapier', category: 'Automation' }
  ]

  const process = [
    {
      step: '01',
      title: 'Business Analysis',
      description: 'Analyze your current processes and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Platform Selection',
      description: 'Choose the right CRM platform based on your business needs and budget.'
    },
    {
      step: '03',
      title: 'Custom Configuration',
      description: 'Configure the CRM system to match your specific business requirements.'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Safely migrate your existing data to the new CRM system.'
    },
    {
      step: '05',
      title: 'Integration & Automation',
      description: 'Connect with other systems and set up automated workflows.'
    },
    {
      step: '06',
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support for optimal usage.'
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
            src="/images/crm.jpg" 
            alt="CRM Customization Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">CRM Customization</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Streamline Your</span>
                <br />
                <span className="text-text">Business Processes</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                Customize and optimize your CRM system to match your unique business 
                needs. From Dynamics 365 to GoHighLevel, we make it work for you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Customize Your CRM
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View CRM Projects
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-accent text-sm font-mono">
                      <div className="mb-2">// CRM Customization</div>
                      <div className="text-text/60">workflow: 'automated',</div>
                      <div className="text-text/60">efficiency: '+300%',</div>
                      <div className="text-text/60">productivity: '+250%'</div>
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
              <span className="gradient-text">CRM Services We Provide</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive CRM customization and optimization services to maximize 
              your business efficiency and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Platforms Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">CRM Platforms We Work With</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We customize and optimize the most popular CRM and business management platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="tech-card text-center group">
                <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  {platform.name}
                </div>
                <div className="text-xs text-text/60">
                  {platform.category}
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
              <span className="gradient-text">Our CRM Implementation Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure successful CRM implementation and adoption.
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
              Ready to Optimize Your CRM?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your CRM needs and create a customized solution that 
              streamlines your business processes and boosts productivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Customize Your CRM
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View CRM Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CRMCustomizationPage
