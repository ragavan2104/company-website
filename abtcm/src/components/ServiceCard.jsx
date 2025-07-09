import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, link }) => {
  return (
    <div className="group relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main Card */}
      <div className="card-gradient p-8 hover-lift relative z-10">
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
            <Icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles size={12} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 group/item">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-green-500 group-hover/item:text-green-600 transition-colors duration-200" />
                </div>
                <span className="text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors duration-200">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="pt-6 border-t border-gray-100 group-hover:border-orange-200 transition-colors duration-300">
            <a
              href={link}
              className="inline-flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-2xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group-hover:shadow-lg"
            >
              <span>Explore Service</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
      </div>
    </div>
  )
}

export default ServiceCard
