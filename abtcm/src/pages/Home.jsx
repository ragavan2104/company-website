import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react'

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
      const targets = { projects: 150, clients: 50, experience: 8, awards: 25 }
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
    { icon: TrendingUp, label: 'Projects Completed', value: counters.projects, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: counters.clients, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: counters.experience, suffix: '+' },
    { icon: Star, label: 'Awards Won', value: counters.awards, suffix: '+' }
  ]

  const features = [
    'Cutting-edge Technology Solutions',
    'Expert Team of Developers',
    '24/7 Support & Maintenance',
    'Scalable & Secure Architecture',
    'Agile Development Process',
    'Competitive Pricing'
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Vishenx</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a forward-thinking technology company dedicated to transforming businesses 
                through innovative digital solutions. Our team of experts combines creativity with 
                technical excellence to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-gradient-to-r from-orange-200 to-red-200 rounded-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We offer a comprehensive range of digital solutions to help your business thrive in the modern digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${900 + index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className={`inline-flex items-center px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: '1500ms' }}
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 text-orange-100 leading-relaxed transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Let's discuss how we can help you achieve your digital goals with our innovative solutions.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


