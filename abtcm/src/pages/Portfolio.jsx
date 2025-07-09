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
              Our <span className="text-white">Portfolio</span>
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
              <div key={item.id} className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${700 + index * 100}ms` }}>
                {/* Card Header with Gradient Background */}
                <div className="relative h-56 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                        <span className="text-white text-sm font-medium">{item.category}</span>
                      </div>
                      <a
                        href={item.link}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-2xl">{item.id}</span>
                      </div>
                      <div className="text-white/90 text-sm font-medium opacity-75">Project #{item.id}</div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Card Body */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group-hover:translate-x-1">
                      View Details
                      <ArrowRight size={16} className="ml-1 transition-transform duration-300" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">Completed</span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-sm"></div>
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
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                  <div className="text-4xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">E-commerce</div>
                  <div className="text-white/80 font-medium">Platform Transformation</div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Retail Giant Digital Transformation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We helped a major retail company modernize their e-commerce platform, 
                  resulting in a 300% increase in online sales and improved customer satisfaction.
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                    <span className="text-sm font-medium text-gray-700">Performance Improvement</span>
                    <span className="text-lg font-bold text-green-600">+300%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <span className="text-sm font-medium text-gray-700">Page Load Time</span>
                    <span className="text-lg font-bold text-blue-600">-60%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <span className="text-sm font-medium text-gray-700">User Satisfaction</span>
                    <span className="text-lg font-bold text-purple-600">+45%</span>
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1">
                  Read Full Case Study 
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-sm"></div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                  <div className="text-4xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">Healthcare</div>
                  <div className="text-white/80 font-medium">Mobile Solution</div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Telemedicine App Development
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We developed a comprehensive telemedicine platform that connects patients 
                  with healthcare providers, improving access to medical care.
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
                    <span className="text-sm font-medium text-gray-700">Patient Registrations</span>
                    <span className="text-lg font-bold text-cyan-600">50K+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                    <span className="text-sm font-medium text-gray-700">Monthly Consultations</span>
                    <span className="text-lg font-bold text-indigo-600">10K+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
                    <span className="text-sm font-medium text-gray-700">App Store Rating</span>
                    <span className="text-lg font-bold text-yellow-600">4.8/5</span>
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1">
                  Read Full Case Study 
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-sm"></div>
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
