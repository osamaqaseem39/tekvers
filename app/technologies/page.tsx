import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Shield,
  Palette,
  Settings
} from 'lucide-react'

const TechnologiesPage = () => {
  const techCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern web technologies for creating responsive and interactive user interfaces.',
      technologies: [
        { name: 'React.js', description: 'Component-based UI library', proficiency: 95 },
        { name: 'Next.js', description: 'Full-stack React framework', proficiency: 90 },
        { name: 'Vue.js', description: 'Progressive JavaScript framework', proficiency: 85 },
        { name: 'Angular', description: 'TypeScript-based framework', proficiency: 80 },
        { name: 'Svelte', description: 'Compile-time optimized framework', proficiency: 75 },
        { name: 'TypeScript', description: 'Typed JavaScript superset', proficiency: 95 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Server-side technologies for building robust and scalable applications.',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime environment', proficiency: 95 },
        { name: 'Django', description: 'Python web framework', proficiency: 90 },
        { name: 'FastAPI', description: 'Modern Python API framework', proficiency: 85 },
        { name: 'Express.js', description: 'Node.js web framework', proficiency: 90 },
        { name: 'Laravel', description: 'PHP web framework', proficiency: 80 },
        { name: 'Spring Boot', description: 'Java application framework', proficiency: 75 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud platforms and DevOps tools for scalable infrastructure.',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services', proficiency: 90 },
        { name: 'Azure', description: 'Microsoft cloud platform', proficiency: 85 },
        { name: 'Docker', description: 'Containerization platform', proficiency: 95 },
        { name: 'Kubernetes', description: 'Container orchestration', proficiency: 85 },
        { name: 'Terraform', description: 'Infrastructure as code', proficiency: 80 },
        { name: 'Jenkins', description: 'CI/CD automation', proficiency: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Data storage and management solutions for various use cases.',
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced open-source database', proficiency: 90 },
        { name: 'MongoDB', description: 'NoSQL document database', proficiency: 85 },
        { name: 'Firebase', description: 'Google mobile platform', proficiency: 80 },
        { name: 'Redis', description: 'In-memory data store', proficiency: 85 },
        { name: 'MySQL', description: 'Relational database system', proficiency: 90 },
        { name: 'DynamoDB', description: 'AWS NoSQL database', proficiency: 75 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile application development.',
      technologies: [
        { name: 'Flutter', description: 'Google UI toolkit', proficiency: 90 },
        { name: 'React Native', description: 'Cross-platform mobile framework', proficiency: 85 },
        { name: 'Swift', description: 'iOS development language', proficiency: 80 },
        { name: 'Kotlin', description: 'Android development language', proficiency: 75 },
        { name: 'Ionic', description: 'Hybrid mobile framework', proficiency: 70 },
        { name: 'Xamarin', description: 'Microsoft mobile platform', proficiency: 65 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence and machine learning technologies.',
      technologies: [
        { name: 'TensorFlow', description: 'Google ML framework', proficiency: 85 },
        { name: 'PyTorch', description: 'Facebook ML framework', proficiency: 80 },
        { name: 'OpenAI API', description: 'AI service integration', proficiency: 90 },
        { name: 'Scikit-learn', description: 'Python ML library', proficiency: 85 },
        { name: 'Hugging Face', description: 'NLP model platform', proficiency: 80 },
        { name: 'Pandas', description: 'Data manipulation library', proficiency: 90 }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security tools and frameworks for protecting applications and data.',
      technologies: [
        { name: 'OWASP ZAP', description: 'Web application security scanner', proficiency: 85 },
        { name: 'Burp Suite', description: 'Web vulnerability scanner', proficiency: 80 },
        { name: 'Nessus', description: 'Vulnerability assessment tool', proficiency: 75 },
        { name: 'Metasploit', description: 'Penetration testing framework', proficiency: 70 },
        { name: 'Wireshark', description: 'Network protocol analyzer', proficiency: 75 },
        { name: 'Nmap', description: 'Network discovery tool', proficiency: 80 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      description: 'Design tools and frameworks for creating beautiful user experiences.',
      technologies: [
        { name: 'Figma', description: 'Collaborative design tool', proficiency: 90 },
        { name: 'Adobe XD', description: 'UI/UX design platform', proficiency: 85 },
        { name: 'Sketch', description: 'Digital design toolkit', proficiency: 80 },
        { name: 'Framer', description: 'Interactive design tool', proficiency: 75 },
        { name: 'Zeplin', description: 'Design handoff platform', proficiency: 85 },
        { name: 'Lottie', description: 'Animation library', proficiency: 80 }
      ]
    },
    {
      icon: Settings,
      title: 'Development Tools',
      description: 'Essential tools and platforms for modern software development.',
      technologies: [
        { name: 'GitHub', description: 'Version control platform', proficiency: 95 },
        { name: 'GitLab', description: 'DevOps platform', proficiency: 85 },
        { name: 'Jira', description: 'Project management tool', proficiency: 90 },
        { name: 'VS Code', description: 'Code editor', proficiency: 95 },
        { name: 'Postman', description: 'API development platform', proficiency: 90 },
        { name: 'Figma', description: 'Design collaboration tool', proficiency: 90 }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Technologies We Use</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            We stay at the forefront of technology, using the latest tools and 
            frameworks to deliver cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Technologies by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text">
                      {category.title}
                    </h2>
                    <p className="text-text/70 mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="tech-card group">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                          {tech.name}
                        </h3>
                        <div className="text-sm text-accent font-medium">
                          {tech.proficiency}%
                        </div>
                      </div>
                      
                      <p className="text-text/70 text-sm mb-4">
                        {tech.description}
                      </p>
                      
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Technologies */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              <span className="gradient-text">And Many More...</span>
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Our technology stack is constantly evolving. We work with 50+ technologies 
              across different domains to ensure we can provide the best solution for 
              your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'GitHub', 'Jira', 'Figma', 'VS Code', 'Postman', 'Selenium', 
              'Power BI', 'Tableau', 'Stripe', 'HubSpot', 'Zapier', 'Unity',
              'Web3.js', 'Ethers.js', 'Moralis', 'Chainlink', 'IPFS', 'Node-RED',
              'MQTT', 'InfluxDB', 'Grafana', 'Prometheus', 'ELK Stack', 'Kafka'
            ].map((tech) => (
              <div key={tech} className="tech-card text-center group">
                <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Need a Specific Technology?
            </h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              Don't see the technology you need? We're always learning and expanding 
              our expertise. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TechnologiesPage
