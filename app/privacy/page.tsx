import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, Shield, Lock, Eye, Users, FileText, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'TekVerse – Your Data & Privacy Are Our Priority',
  description: 'Learn how TekVerse collects, uses, and protects your personal information. We value your privacy and adhere to strict security standards in our AI software and digital marketing services.',
  keywords: 'TekVerse privacy policy, data protection, AI software privacy, user information policy, data protection Pakistan, AI software security, user information safety, digital marketing privacy, cookies policy, GDPR compliance',
}

const PrivacyPage = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Introduction',
      content: 'This Privacy Policy explains how TekVerse collects and handles your personal data when you visit our website or use our services.'
    },
    {
      icon: Users,
      title: '2. Information We Collect',
      content: 'We may collect personal details (name, email, phone number), business information, and technical data like IP address and browser type.'
    },
    {
      icon: Eye,
      title: '3. How We Use Your Information',
      content: 'To respond to inquiries, deliver services, improve user experience, and send relevant updates or marketing communication (with your consent).'
    },
    {
      icon: Shield,
      title: '4. Data Protection & Security',
      content: 'TekVerse uses advanced encryption and secure servers to ensure your information is protected against unauthorized access or disclosure.'
    },
    {
      icon: Lock,
      title: '5. Cookies & Tracking Technologies',
      content: 'We use cookies to enhance site performance and analyze traffic — you can control these through your browser settings.'
    },
    {
      icon: ExternalLink,
      title: '6. Third-Party Links',
      content: 'Our website may contain links to external sites; TekVerse is not responsible for their privacy practices or content.'
    },
    {
      icon: Users,
      title: '7. Your Rights',
      content: 'You have the right to access, update, or request deletion of your personal data stored by TekVerse.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">TekVerse Privacy Policy</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            We value your privacy and adhere to strict security standards in our AI software 
            and digital marketing services. Compliance with GDPR & local data protection laws.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.title} className="tech-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-text">
                      {section.title}
                    </h2>
                    <p className="text-text/80 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 tech-card text-center">
            <h2 className="text-2xl font-heading font-bold mb-6 text-text">
              8. Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-text/80">
                <Mail className="w-5 h-5 text-accent" />
                <span>📧 info@tekverse.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-text/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span>📍 Global Remote</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <p className="text-sm text-text/70">
                <strong>Policy last updated:</strong> October 2025<br />
                <strong>Commitment:</strong> Transparency and user trust
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPage
