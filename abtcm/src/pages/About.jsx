import React, { useState, useEffect } from 'react'
import { CheckCircle, Target, Eye, Heart, Users, Award, Clock, Globe } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication and honest relationships with our clients and team members.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'We are committed to delivering excellence in every project, no matter the size or complexity.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared goals and success.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Visionary leader with 15+ years of experience in technology and business transformation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Technical expert specializing in cloud architecture and enterprise software solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: '/api/placeholder/150/150',
      bio: 'Creative designer passionate about user experience and innovative digital solutions.'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: '/api/placeholder/150/150',
      bio: 'Experienced project manager ensuring timely delivery and client satisfaction.'
    }
  ]

  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Projects Completed', value: '1000+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: Globe, label: 'Countries Served', value: '25+' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Vishenx</span>
            </h1>
            <p className={`text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We are a passionate team of innovators, designers, and developers dedicated to 
              transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Vishenx began as a small startup with a big vision: to help 
                businesses harness the power of technology to achieve their goals. Over the years, 
                we've grown from a team of three to a global company with offices worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous learning, adaptation, and a relentless 
                focus on delivering value to our clients. We've had the privilege of working with 
                startups, Fortune 500 companies, and everyone in between.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-700">Award-winning design and development team</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-700">Proven track record of successful project deliveries</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-700">Commitment to innovation and continuous improvement</span>
                </div>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <stat.icon size={24} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and a passion for innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
