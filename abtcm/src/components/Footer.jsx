import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Vishenx</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a leading technology company dedicated to delivering innovative solutions 
              that transform businesses and enhance digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Services</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail size={16} className="mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">info@vishenx.com</span>
              </div>
              <div className="flex items-center group">
                <Phone size={16} className="mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <MapPin size={16} className="mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Vishenx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
