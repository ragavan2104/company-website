import React, { useState, useEffect } from 'react'
import { portfolioItems } from '../data/services'
import { ExternalLink, Filter } from 'lucide-react'

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className={`text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Explore our successful projects and see how we've helped businesses 
              transform their digital presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className={`flex items-center justify-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-3 shadow-lg">
              <Filter size={20} className="text-gray-600" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      filter === category
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
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
              <div key={item.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-orange-200 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${700 + index * 100}ms` }}>
                <div className="h-48 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center group-hover:from-orange-100 group-hover:to-red-100 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-lg">{item.id}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-orange-600 font-medium px-3 py-1 bg-orange-50 rounded-full">{item.category}</span>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-orange-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 cursor-default"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into some of our most successful projects and learn how we solved 
              complex challenges for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">E-commerce</div>
                  <div className="text-orange-100">Platform Transformation</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Retail Giant Digital Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  We helped a major retail company modernize their e-commerce platform, 
                  resulting in a 300% increase in online sales and improved customer satisfaction.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Performance Improvement</span>
                    <span className="text-sm font-semibold text-green-600">+300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Page Load Time</span>
                    <span className="text-sm font-semibold text-green-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">User Satisfaction</span>
                    <span className="text-sm font-semibold text-green-600">+45%</span>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-800 font-medium">
                  Read Full Case Study →
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">Healthcare</div>
                  <div className="text-red-100">Mobile Solution</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Telemedicine App Development
                </h3>
                <p className="text-gray-600 mb-4">
                  We developed a comprehensive telemedicine platform that connects patients 
                  with healthcare providers, improving access to medical care.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Patient Registrations</span>
                    <span className="text-sm font-semibold text-green-600">50K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Monthly Consultations</span>
                    <span className="text-sm font-semibold text-green-600">10K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">App Store Rating</span>
                    <span className="text-sm font-semibold text-green-600">4.8/5</span>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-800 font-medium">
                  Read Full Case Study →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">{tech.slice(0, 2)}</span>
                </div>
                <span className="text-sm text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
