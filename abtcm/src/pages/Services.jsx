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
    { value: '4.9/5', label: 'Client Rating', color: 'from-blue-500 to-indigo-600' }
  ]

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
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Premium Digital Solutions</span>
            </div>
            
            <h1 className={`heading-1 text-white mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Enterprise-Grade
              <span className="block text-gradient">Technology Services</span>
            </h1>
            
            <p className={`body-lg text-white/90 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Transform your business with cutting-edge solutions designed for scale, performance, and innovation.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link
                to="/contact"
                className="btn-secondary btn-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-outline btn-lg group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Our Core <span className="text-gradient">Services</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
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
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Our Proven <span className="text-gradient">Process</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach refined through 1000+ successful projects and years of industry expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: `${800 + index * 200}ms` }}>
                <div className="card hover-lift p-8 text-center group-hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="heading-2 text-gray-900 mb-6">
                  Why Choose <span className="text-gradient">Vishenx</span>
                </h2>
                <p className="body-lg text-gray-600">
                  Partner with industry leaders who combine technical excellence with strategic business insight to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="card-gradient p-8 text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance Metrics</h3>
                  <p className="text-gray-600">Real results from real clients</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Ready to Transform Your 
              <span className="block text-gradient">Digital Presence?</span>
            </h2>
            <p className="body-lg text-white/90 mb-8">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary btn-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-outline btn-lg group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
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
