import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 hover:border-orange-200">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} className="text-orange-600 group-hover:text-red-600 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="inline-flex items-center text-orange-600 hover:text-red-600 font-medium transition-all duration-300 group-hover:translate-x-1"
      >
        Learn More
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  )
}

export default ServiceCard
