import Link from 'next/link'
import { Github, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'AI & Machine Learning', href: '/services/ai-ml' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'UI/UX Design', href: '/services/ui-ux' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Technologies', href: '/technologies' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  return (
    <footer className="bg-secondary/50 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-heading font-bold gradient-text">
                TekVers
              </span>
            </Link>
            <p className="text-text/80 mb-6 leading-relaxed">
              Expanding the Technology Universe. Empowering businesses with AI, 
              software, and cloud innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tekvers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-accent/20 transition-colors"
              >
                <Github className="w-5 h-5 text-text hover:text-accent" />
              </a>
              <a
                href="https://instagram.com/tek_vers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-accent/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-text hover:text-accent" />
              </a>
              <a
                href="mailto:contact@tekvers.com"
                className="p-2 bg-secondary rounded-lg hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-text hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:contact@tekvers.com"
                  className="text-text/80 hover:text-accent transition-colors"
                >
                  contact@tekvers.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-text/80">Global Remote</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-text/80">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-text/60 text-sm">
                © {currentYear} TekVers. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-text/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-text/60 text-sm">
              Made with ❤️ by TekVers Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
