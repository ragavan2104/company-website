import React, { useState, useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { ArrowRight, CheckCircle, Sparkles, Shield, Zap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business objectives, market analysis, and technical requirements to craft a comprehensive roadmap.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Create intuitive user experiences with modern design principles, wireframes, and interactive prototypes.',
      icon: Sparkles
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build scalable solutions using cutting-edge technologies with rigorous testing and quality assurance.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Seamless deployment with continuous monitoring, optimization, and dedicated post-launch support.',
      icon: Shield
    }
  ]

  const benefits = [
    'World-class development team with 10+ years experience',
    'Proven track record with 1000+ successful enterprise projects',
    'Agile methodology with weekly sprints and transparent progress',
    'Comprehensive security audits and performance optimization',
    '24/7 premium support with dedicated account management',
    'Competitive pricing with flexible engagement models',
    'Cutting-edge tech stack and industry best practices',
    'On-time delivery with money-back guarantee'
  ]

  const stats = [
    { value: '99.8%', label: 'Uptime Guarantee', color: 'from-emerald-500 to-teal-600' },
    { value: '95%', label: 'Client Retention', color: 'from-blue-500 to-indigo-600' },
    { value: '100%', label: 'On-time Delivery', color: 'from-purple-500 to-pink-600' },
    { value: '4.9/5', label: 'Client Rating', color: 'from-orange-500 to-red-600' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-sm font-medium text-indigo-600">Premium Digital Solutions</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Transform your business with cutting-edge solutions designed for scale, performance, and innovation.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-2xl font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              End-to-end digital solutions crafted with precision, innovation, and scalability at their core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${600 + index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our Proven <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              A systematic approach refined through 1000+ successful projects and years of industry expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${800 + index * 200}ms` }}>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-indigo-600 mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-indigo-400 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vishenx</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Partner with industry leaders who combine technical excellence with strategic business insight to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 backdrop-blur-sm border border-indigo-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance Metrics</h3>
                  <p className="text-slate-600">Real results from real clients</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your 
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-300 rounded-2xl font-semibold hover:border-indigo-400 hover:bg-indigo-400/10 transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
