import React, { useState, useEffect } from 'react'
import { portfolioItems } from '../data/services'
import { ExternalLink, Filter, ArrowRight, Star, Trophy, Users } from 'lucide-react'

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))]
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="hero-pattern opacity-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`heading-1 text-white mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className={`body-lg text-white/90 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Explore our successful projects and see how we've helped businesses 
              transform their digital presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className={`flex items-center justify-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-2xl p-3 shadow-lg">
              <Filter size={20} className="text-gray-600" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      filter === category
                        ? 'bg-gradient-primary text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className={`card hover-lift group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${700 + index * 100}ms` }}>
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 rounded-t-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-lg">{item.id}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">{item.category}</span>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Dive deeper into some of our most successful projects and learn how we solved 
              complex challenges for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="card hover-lift">
              <div className="h-48 bg-gradient-primary flex items-center justify-center rounded-t-2xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">E-commerce</div>
                  <div className="text-blue-100">Platform Transformation</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Retail Giant Digital Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  We helped a major retail company modernize their e-commerce platform, 
                  resulting in a 300% increase in online sales and improved customer satisfaction.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Performance Improvement</span>
                    <span className="text-sm font-semibold text-green-600">+300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Page Load Time</span>
                    <span className="text-sm font-semibold text-green-600">-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">User Satisfaction</span>
                    <span className="text-sm font-semibold text-green-600">+45%</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium group">
                  Read Full Case Study 
                  <ArrowRight size={16} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="card hover-lift">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center rounded-t-2xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">Healthcare</div>
                  <div className="text-indigo-100">Mobile Solution</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Telemedicine App Development
                </h3>
                <p className="text-gray-600 mb-6">
                  We developed a comprehensive telemedicine platform that connects patients 
                  with healthcare providers, improving access to medical care.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patient Registrations</span>
                    <span className="text-sm font-semibold text-green-600">50K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly Consultations</span>
                    <span className="text-sm font-semibold text-green-600">10K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">App Store Rating</span>
                    <span className="text-sm font-semibold text-green-600">4.8/5</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium group">
                  Read Full Case Study 
                  <ArrowRight size={16} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Technologies We <span className="text-gradient">Use</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js', 
              'Python', 'MongoDB', 'PostgreSQL', 'AWS',
              'Docker', 'Kubernetes', 'React Native', 'Flutter',
              'TypeScript', 'GraphQL', 'Redis', 'Elasticsearch'
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-gray-600 font-medium text-sm group-hover:text-white">{tech.slice(0, 2)}</span>
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
