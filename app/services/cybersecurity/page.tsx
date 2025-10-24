import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Key,
  ArrowRight,
  Zap,
  Target
} from 'lucide-react'

const CybersecurityPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.'
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to test your security defenses and response.'
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Firewall configuration, VPN setup, and network segmentation.'
    },
    {
      icon: Key,
      title: 'Identity & Access Management',
      description: 'Secure authentication, authorization, and user management systems.'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance & Risk Management',
      description: 'GDPR, HIPAA, SOC2 compliance and risk assessment services.'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring, threat detection, and incident response.'
    }
  ]

  const technologies = [
    { name: 'OWASP ZAP', category: 'Security Scanner' },
    { name: 'Burp Suite', category: 'Web Security' },
    { name: 'Nessus', category: 'Vulnerability Scanner' },
    { name: 'Metasploit', category: 'Penetration Testing' },
    { name: 'Wireshark', category: 'Network Analysis' },
    { name: 'Nmap', category: 'Network Discovery' },
    { name: 'Splunk', category: 'SIEM Platform' },
    { name: 'Elastic Security', category: 'Security Analytics' },
    { name: 'CrowdStrike', category: 'Endpoint Protection' },
    { name: 'Okta', category: 'Identity Management' },
    { name: 'Auth0', category: 'Authentication' },
    { name: 'Hashicorp Vault', category: 'Secrets Management' }
  ]

  const process = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture and vulnerabilities.'
    },
    {
      step: '02',
      title: 'Threat Modeling',
      description: 'Identify potential threats and attack vectors specific to your systems.'
    },
    {
      step: '03',
      title: 'Penetration Testing',
      description: 'Simulated attacks to test your defenses and identify security gaps.'
    },
    {
      step: '04',
      title: 'Security Implementation',
      description: 'Deploy security measures, configure tools, and establish best practices.'
    },
    {
      step: '05',
      title: 'Monitoring Setup',
      description: 'Implement continuous monitoring and threat detection systems.'
    },
    {
      step: '06',
      title: 'Training & Support',
      description: 'Security awareness training and ongoing support for your team.'
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
            src="/images/cybersecurity.jpg" 
            alt="Cybersecurity Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-accent font-semibold">Cybersecurity</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Secure</span>
                <br />
                <span className="text-text">Digital Assets</span>
              </h1>
              
              <p className="text-xl text-text/80 mb-8 leading-relaxed">
                Protect your business from cyber threats with comprehensive security 
                solutions. We provide end-to-end cybersecurity services to keep your 
                data and systems safe.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Secure Your Business
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Security Projects
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-accent text-sm font-mono">
                      <div className="mb-2"># Cybersecurity</div>
                      <div className="text-text/60">security_scan()</div>
                      <div className="text-text/60">threat_detection()</div>
                      <div className="text-text/60">vulnerability_assessment()</div>
                      <div className="text-accent"># Security Score: 95%</div>
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
              <span className="gradient-text">Security Services We Provide</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions to protect your business from 
              evolving threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="tech-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <span className="gradient-text">Security Tools & Technologies</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading security tools and frameworks to protect your systems.
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
              <span className="gradient-text">Our Security Process</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure comprehensive security coverage.
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Let's assess your current security 
              posture and implement comprehensive protection measures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Security Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CybersecurityPage
