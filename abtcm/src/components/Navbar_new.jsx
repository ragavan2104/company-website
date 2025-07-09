import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', path: '/services#web' },
        { name: 'Mobile Apps', path: '/services#mobile' },
        { name: 'Cloud Solutions', path: '/services#cloud' },
        { name: 'UI/UX Design', path: '/services#design' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ]

  const isActive = (path) => location.pathname === path

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-orange-100' 
          : 'bg-black/10 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                {/* Logo Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Vishenx
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? isScrolled 
                          ? 'text-orange-600' 
                          : 'text-orange-400'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-orange-600' 
                          : 'text-white hover:text-orange-400'
                    } transform hover:scale-105`}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                        activeDropdown === item.name 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {dropdownItem.name}
                            <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <Link
                to="/contact"
                className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/25'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-gray-900'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                } transform hover:scale-110`}
              >
                <div className="relative">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/98 backdrop-blur-xl border-t border-orange-100`}>
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path) 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <ChevronDown size={20} className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div className={`pl-4 space-y-2 transition-all duration-300 ${
                    activeDropdown === item.name ? 'block' : 'hidden'
                  }`}>
                    {item.dropdownItems?.map((dropdownItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={dropdownItem.path}
                        onClick={closeMenu}
                        className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-orange-200">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
