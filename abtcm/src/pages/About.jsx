import React, { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Clock, 
  Globe,
  Lightbulb,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Play,
  Code,
  Palette,
  Smartphone,
  Cloud,
  TrendingUp,
  Coffee,
  Rocket,
  Calendar,
  Building,
  Briefcase
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('mission')
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    years: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Animate counters
    const animateCounters = () => {
      const targets = { projects: 350, clients: 150, awards: 45, years: 8 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps
      
      Object.keys(targets).forEach(key => {
        const target = targets[key]
        const increment = target / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, stepTime)
      })
    }
    
    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions that push the boundaries of what\'s possible.',
      color: 'from-blue-500 via-indigo-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in transparent communication, honest relationships, and ethical practices in every aspect of our business.',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We are committed to delivering superior quality in every project, exceeding expectations and setting new industry standards.',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners, fostering teamwork and shared success in achieving ambitious goals.',
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    }
  ]

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years of experience in technology and business transformation. Former senior executive at Fortune 500 companies.',
      skills: ['Strategy', 'Leadership', 'Innovation'],
      linkedin: '#',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9dba975?w=400&h=400&fit=crop&crop=face',
      bio: 'Technical expert specializing in cloud architecture and enterprise software solutions. MIT graduate with extensive experience in scalable systems.',
      skills: ['Cloud Architecture', 'DevOps', 'AI/ML'],
      linkedin: '#',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning designer with a passion for creating intuitive and beautiful user experiences. Former lead designer at top design agencies.',
      skills: ['UI/UX Design', 'Branding', 'User Research'],
      linkedin: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile development. Open source contributor and tech community leader.',
      skills: ['Full-Stack Development', 'React', 'Node.js'],
      linkedin: '#',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'David Wilson',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      bio: 'Operations specialist focused on process optimization and client success. Expert in agile methodologies and project management.',
      skills: ['Project Management', 'Agile', 'Process Optimization'],
      linkedin: '#',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      bio: 'Marketing strategist with deep expertise in digital marketing and brand development. Former marketing director at leading tech companies.',
      skills: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking'],
      linkedin: '#',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awards for innovation and excellence in digital solutions',
      stats: counters.awards,
      suffix: '+',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Successful Projects',
      description: 'Projects delivered across various industries',
      stats: counters.projects,
      suffix: '+',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Happy Clients',
      description: 'Satisfied clients worldwide',
      stats: counters.clients,
      suffix: '+',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Years of Excellence',
      description: 'Years of consistent growth and innovation',
      stats: counters.years,
      suffix: '+',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const technologies = [
    { name: 'React', icon: Code, level: 98, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: Code, level: 95, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', icon: Code, level: 92, color: 'from-blue-400 to-indigo-500' },
    { name: 'AWS', icon: Cloud, level: 96, color: 'from-indigo-400 to-blue-500' },
    { name: 'UI/UX', icon: Palette, level: 94, color: 'from-purple-400 to-pink-500' },
    { name: 'Mobile', icon: Smartphone, level: 89, color: 'from-indigo-400 to-blue-500' }
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started as a small startup with 3 passionate developers',
      icon: Rocket,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Landed our first Fortune 500 client and scaled operations',
      icon: Users,
      color: 'from-green-400 to-emerald-500'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened offices in 5 countries and expanded our team',
      icon: Globe,
      color: 'from-purple-400 to-pink-500'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Won multiple awards for innovation and excellence',
      icon: Award,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions for enterprise clients',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the next generation of digital transformation',
      icon: Star,
      color: 'from-cyan-400 to-blue-500'
    }
  ]

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'vision', label: 'Our Vision', icon: Eye },
    { id: 'values', label: 'Our Values', icon: Heart }
  ]

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We are committed to being the trusted technology partner that transforms ideas into reality.',
      features: [
        'Deliver cutting-edge digital solutions',
        'Foster innovation and creativity',
        'Build long-term client partnerships',
        'Drive measurable business results'
      ]
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the leading global technology partner, recognized for our innovation, expertise, and unwavering commitment to client success. We envision a future where technology seamlessly integrates with business to create extraordinary experiences.',
      features: [
        'Global technology leadership',
        'Industry-defining innovations',
        'Exceptional client experiences',
        'Sustainable business growth'
      ]
    },
    values: {
      title: 'Our Values',
      content: 'Our core values guide every decision we make and every solution we deliver. These principles define who we are and how we operate as a company.',
      features: [
        'Innovation in everything we do',
        'Integrity in all our relationships',
        'Excellence as our standard',
        'Collaboration as our strength'
      ]
    }
  }

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
              Transforming Ideas into 
              <span className="block  font-semibold">Digital Excellence</span>
            </h1>
            <p className={`body-lg text-white/90 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We are a team of passionate innovators, designers, and developers dedicated to 
              creating exceptional digital experiences that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              What Drives <span className="text-gradient">Us</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values form the foundation of everything we do 
              and guide us in delivering exceptional results for our clients.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 p-2 rounded-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-3 text-gray-900 mb-6">
                {tabContent[activeTab].title}
              </h3>
              <p className="body-md text-gray-600 mb-8">
                {tabContent[activeTab].content}
              </p>
              <ul className="space-y-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="card-gradient p-8 transform hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <value.icon size={24} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description.split(' ').slice(0, 8).join(' ')}...</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence 
              and innovation in the digital space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="card hover-lift p-8 mb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <achievement.icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{achievement.stats}{achievement.suffix}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, 
              scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card p-8 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center`}>
                      <tech.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-gradient">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${tech.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global technology leader, here's our story 
              of growth, innovation, and success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="card hover-lift p-8 inline-block">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center`}>
                            <milestone.icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                            <p className="text-blue-600 font-semibold">{milestone.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-lg`}></div>
                  </div>
                  
                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="body-lg text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience, 
              creativity, and technical expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-glass p-8 hover-lift">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-xl"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center`}>
                      <Star size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="body-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join the hundreds of companies that have trusted us with their digital transformation. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary btn-lg group">
              Start Your Project
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline btn-lg group bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
