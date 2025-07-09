import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap,
  Quote,
  Play,
  Code,
  Smartphone,
  Palette
} from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Animate counters
    const animateCounters = () => {
      const targets = { projects: 1250, clients: 350, experience: 8, awards: 45 }
      const duration = 2000
      const steps = 60
      const increment = duration / steps
      
      let current = { projects: 0, clients: 0, experience: 0, awards: 0 }
      
      const timer = setInterval(() => {
        Object.keys(targets).forEach(key => {
          if (current[key] < targets[key]) {
            current[key] += Math.ceil(targets[key] / steps)
            if (current[key] > targets[key]) current[key] = targets[key]
          }
        })
        
        setCounters({...current})
        
        if (Object.values(current).every((val, i) => val === Object.values(targets)[i])) {
          clearInterval(timer)
        }
      }, increment)
    }
    
    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { 
      icon: TrendingUp, 
      label: 'Projects Completed', 
      value: counters.projects, 
      suffix: '+',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      icon: Users, 
      label: 'Happy Clients', 
      value: counters.clients, 
      suffix: '+',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      icon: Award, 
      label: 'Years Experience', 
      value: counters.experience, 
      suffix: '+',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      icon: Star, 
      label: 'Awards Won', 
      value: counters.awards, 
      suffix: '+',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  const testimonials = [
    {
      id: 1,
      content: "Vishenx transformed our digital presence completely. The team's expertise in modern technologies and their attention to detail resulted in a 300% increase in our online engagement.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9dba975?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      content: "Working with Vishenx was a game-changer for our business. They delivered a scalable solution that perfectly matched our requirements and exceeded our expectations.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      content: "The level of professionalism and technical expertise at Vishenx is outstanding. They helped us build a platform that handles millions of users seamlessly.",
      author: "Emily Rodriguez",
      role: "Product Manager, ScaleUp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ]

  const features = [
    {
      icon: Code,
      title: "Modern Technology Stack",
      description: "Built with the latest technologies including React, Next.js, Node.js, and cloud infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures with encryption, secure authentication, and compliance standards."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with CDN integration, caching strategies, and performance monitoring."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Built to scale globally with multi-region deployment and international best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive design that works perfectly across all devices and screen sizes."
    },
    {
      icon: Palette,
      title: "Beautiful UI/UX",
      description: "Award-winning design with intuitive user experience and modern aesthetics."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative mb-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                    <stat.icon size={32} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`heading-2 text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className={`body-lg text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Comprehensive digital solutions designed to transform your business 
              and accelerate your growth in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className={`transform transition-all duration-1000 delay-${500 + index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-primary btn-lg group"
            >
              View All Services
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Vishenx</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-3xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="body-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about 
              working with Vishenx.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`card-glass p-8 transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center mb-6">
                  <Quote size={24} className="text-blue-400 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-blue-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="body-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join hundreds of successful companies who have trusted Vishenx with their 
            digital transformation journey. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-secondary btn-lg group"
            >
              Start Your Project
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="btn-outline btn-lg group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
            >
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


