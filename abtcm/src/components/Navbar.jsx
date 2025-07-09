import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', path: '/services#web', icon: '🌐' },
        { name: 'Mobile Apps', path: '/services#mobile', icon: '📱' },
        { name: 'Cloud Solutions', path: '/services#cloud', icon: '☁️' },
        { name: 'UI/UX Design', path: '/services#design', icon: '🎨' },
        { name: 'Digital Marketing', path: '/services#marketing', icon: '📈' },
        { name: 'Consulting', path: '/services#consulting', icon: '💼' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-xl"></div>
      
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vishenx</h1>
              <p className="text-xs text-gray-600 -mt-1">Digital Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.name : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <span className="flex items-center space-x-1">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden animate-fade-in-up"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Our Services</h3>
                      <div className="space-y-2">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-blue-50 transition-all duration-200 group"
                          >
                            <span className="text-2xl">{dropdownItem.icon}</span>
                            <div>
                              <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {dropdownItem.name}
                              </p>
                            </div>
                            <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Link
              to="/contact"
              className="text-white font-medium group flex items-center"
            >
              <span>Get Started</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-2xl hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white rounded-b-3xl shadow-2xl border border-blue-100 animate-fade-in-up">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-2xl font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown size={16} />}
                    </span>
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 py-2 px-4 rounded-xl text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg">{dropdownItem.icon}</span>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-blue-100">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl font-medium w-full flex items-center justify-center hover:shadow-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
