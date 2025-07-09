import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-yellow-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-orange-400/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} className="mr-2 text-yellow-400" />
                <span>Innovative Digital Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-white bg-clip-text text-transparent animate-pulse">
                  Vishenx
                </span>
              </h1>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl text-orange-100 leading-relaxed">
                We deliver cutting-edge technology solutions that drive innovation, 
                enhance efficiency, and accelerate your business growth in the digital age.
              </p>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  View Our Work
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className={`relative transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gradient-to-r from-orange-200 to-red-200 rounded-full mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-3/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-3 bg-gray-200 rounded-full w-4/6 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex-1 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded-lg flex-1 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-30 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
