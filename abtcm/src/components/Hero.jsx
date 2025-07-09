import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Play, Star, TrendingUp, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentText, setCurrentText] = useState(0)

  const dynamicTexts = [
    "Transform Your Business",
    "Scale Your Digital Presence",
    "Innovate with Technology",
    "Accelerate Your Growth"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(textInterval)
    }
  }, [])

  const features = [
    { icon: Shield, text: "Enterprise Security", color: "text-blue-600" },
    { icon: Zap, text: "Lightning Fast", color: "text-blue-600" },
    { icon: TrendingUp, text: "Scalable Solutions", color: "text-green-600" }
  ]

  return (
    <section className="relative hero-bg min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Interactive Mouse Effect */}
        <div
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />

        {/* Grid Pattern */}
        <div className="hero-pattern opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300">
                <Sparkles size={16} className="mr-2 text-cyan-400 animate-pulse" />
                <span className="text-white/90">🚀 Transforming businesses since 2020</span>
                <div className="ml-3 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-cyan-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="heading-1 text-white leading-tight">
                <span className="block mb-2">
                  {dynamicTexts[currentText]}
                </span>
                <span className="block text-gradient animate-shimmer">
                  with Vishenx
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="body-lg text-white/90 max-w-2xl leading-relaxed">
                We create cutting-edge digital solutions that drive growth, enhance user experience, 
                and transform your business for the digital age. Join 1000+ successful companies 
                who trust us with their digital transformation.
              </p>
            </div>

            {/* Feature Pills */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <feature.icon size={16} className={`${feature.color} bg-white/20 rounded-full p-1`} />
                    <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary btn-lg group shadow-2xl"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-outline btn-lg group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900">
                  <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">1000+</div>
                  <div className="text-white/70 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Visual Card */}
              <div className="card-glass p-8 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  {/* Dashboard Preview */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-white/60 text-sm">Dashboard</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded-full"></div>
                      <div className="h-4 bg-white/10 rounded-full w-4/5"></div>
                      <div className="h-4 bg-white/15 rounded-full w-3/5"></div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">↗️ 85%</div>
                      <div className="text-white/70 text-sm">Growth Rate</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">⚡ 2.3s</div>
                      <div className="text-white/70 text-sm">Load Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-3xl blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-3xl blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Code Snippet */}
              <div className="absolute -top-8 -left-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 animate-float">
                <div className="text-green-400 text-xs font-mono">
                  <div>const success = await</div>
                  <div className="text-blue-400 ml-2">vishenx.build()</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-white">
          <path d="M0,0 C150,50 350,50 600,25 C850,0 1050,50 1200,25 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
