'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Github,
  Instagram
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@tekvers.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available 24/7',
      description: 'Call us for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Global Remote',
      description: 'Serving clients worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'We respond quickly'
    }
  ]

  const services = [
    'Software Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'UI/UX Design',
    'Digital Marketing',
    'CRM Customization',
    'Other'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Let's Collaborate</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Ready to expand your universe? Let's discuss your project and create 
            something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                <span className="gradient-text">Get in Touch</span>
              </h2>
              <p className="text-text/80 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="tech-card text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-2">Message Sent!</h3>
                  <p className="text-text/70">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                <span className="gradient-text">Contact Information</span>
              </h2>
              <p className="text-text/80 mb-8">
                We're here to help. Reach out to us through any of these channels.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">{info.title}</h3>
                      <p className="text-accent font-medium mb-1">{info.value}</p>
                      <p className="text-text/60 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-accent/20 pt-8">
                <h3 className="text-lg font-semibold text-text mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/tekvers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/50 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Github className="w-6 h-6 text-text hover:text-accent" />
                  </a>
                  <a
                    href="https://instagram.com/tek_vers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/50 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-text hover:text-accent" />
                  </a>
                  <a
                    href="mailto:contact@tekvers.com"
                    className="p-3 bg-secondary/50 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-text hover:text-accent" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Here are some common questions we receive from potential clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-text mb-3">How long does a typical project take?</h3>
              <p className="text-text/70">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                while complex applications can take 3-6 months. We provide detailed timelines 
                during the planning phase.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-text mb-3">Do you provide ongoing support?</h3>
              <p className="text-text/70">
                Yes! We offer 24/7 support and maintenance packages to ensure your 
                applications run smoothly and stay updated with the latest technologies.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-text mb-3">What technologies do you work with?</h3>
              <p className="text-text/70">
                We work with 50+ technologies including React, Node.js, Python, AWS, 
                Docker, and many more. We choose the best technology stack for your 
                specific project needs.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-text mb-3">How do you ensure project security?</h3>
              <p className="text-text/70">
                Security is our top priority. We implement industry best practices, 
                conduct regular security audits, and follow OWASP guidelines to protect 
                your data and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage
