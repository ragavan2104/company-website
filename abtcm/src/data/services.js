import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  BarChart3, 
  Cloud,
  Palette,
  Zap
} from 'lucide-react'

export const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
    features: [
      'Full-stack web applications',
      'Enterprise software solutions',
      'API development & integration',
      'Legacy system modernization'
    ],
    link: '/services#software'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Mobile app maintenance'
    ],
    link: '/services#mobile'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that engage users and drive results.',
    features: [
      'Responsive web design',
      'E-commerce solutions',
      'Content management systems',
      'Progressive web apps'
    ],
    link: '/services#web'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: [
      'Security audits & assessments',
      'Penetration testing',
      'Compliance management',
      'Incident response'
    ],
    link: '/services#security'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    features: [
      'Business intelligence',
      'Data visualization',
      'Predictive analytics',
      'Real-time reporting'
    ],
    link: '/services#analytics'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: [
      'Cloud migration',
      'Infrastructure as Code',
      'DevOps automation',
      'Cloud optimization'
    ],
    link: '/services#cloud'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
    features: [
      'User experience research',
      'Interface design',
      'Prototyping & testing',
      'Design system creation'
    ],
    link: '/services#design'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic guidance and implementation to digitize and optimize your business processes.',
    features: [
      'Process automation',
      'Technology consulting',
      'Digital strategy',
      'Change management'
    ],
    link: '/services#transformation'
  }
]

export const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution with advanced features and seamless user experience.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Telemedicine app connecting patients with healthcare providers for remote consultations.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
    link: '#'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Data Analytics',
    description: 'Real-time business intelligence dashboard with interactive data visualizations.',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 4,
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Large-scale cloud migration project improving performance and reducing costs.',
    image: '/api/placeholder/400/300',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    link: '#'
  },
  {
    id: 5,
    title: 'Banking Security System',
    category: 'Cybersecurity',
    description: 'Multi-layered security infrastructure for a major financial institution.',
    image: '/api/placeholder/400/300',
    technologies: ['Security Protocols', 'Encryption', 'Multi-factor Auth', 'Monitoring'],
    link: '#'
  },
  {
    id: 6,
    title: 'Smart IoT Solution',
    category: 'IoT Development',
    description: 'IoT platform for smart building management and energy optimization.',
    image: '/api/placeholder/400/300',
    technologies: ['IoT', 'React', 'Node.js', 'MQTT'],
    link: '#'
  }
]
