'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Package, 
  ShoppingCart, 
  Car, 
  Truck, 
  Palette,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield
} from 'lucide-react'

const ServicesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      id: 'general-merchandise',
      title: 'General Merchandise',
      subtitle: 'Comprehensive Product Solutions',
      description: 'We provide a wide range of general merchandise solutions for businesses of all sizes. From retail products to industrial supplies, we ensure quality, reliability, and competitive pricing.',
      longDescription: 'Our general merchandise service covers everything from consumer goods to industrial supplies. We work with trusted manufacturers and suppliers to provide you with high-quality products at competitive prices. Whether you need retail merchandise for your store or industrial supplies for your operations, we have you covered.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Package,
      color: 'bg-blue-500',
      features: [
        'Wide product range',
        'Quality assurance',
        'Competitive pricing',
        'Reliable supply chain',
        'Custom solutions',
        'Fast delivery'
      ],
      benefits: [
        'Reduce procurement costs',
        'Ensure product quality',
        'Streamline inventory management',
        'Access to exclusive products'
      ]
    },
    {
      id: 'procurement',
      title: 'Procurement of Goods & Services',
      subtitle: 'Strategic Sourcing Solutions',
      description: 'Our strategic procurement services help optimize your supply chain, reduce costs, and improve operational efficiency through expert sourcing and vendor management.',
      longDescription: 'We specialize in strategic procurement that goes beyond simple purchasing. Our team analyzes your needs, identifies the best suppliers, negotiates favorable terms, and manages the entire procurement process. We help you build strong supplier relationships and implement cost-saving strategies.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: ShoppingCart,
      color: 'bg-green-500',
      features: [
        'Strategic sourcing',
        'Vendor management',
        'Cost optimization',
        'Quality control',
        'Contract negotiation',
        'Supply chain analysis'
      ],
      benefits: [
        'Reduce procurement costs by 15-25%',
        'Improve supplier relationships',
        'Ensure compliance and quality',
        'Streamline procurement processes'
      ]
    },
    {
      id: 'automobile-maintenance',
      title: 'Automobile Maintenance',
      subtitle: 'Caldot Care Platform',
      description: 'Experience hassle-free vehicle maintenance with our innovative Caldot Care subscription platform. Professional service, regular maintenance, and 24/7 support.',
      longDescription: 'Caldot Care is our revolutionary subscription-based automobile maintenance platform. We provide comprehensive vehicle care including regular maintenance, emergency services, and 24/7 support. Our certified mechanics ensure your vehicles are always in top condition.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      icon: Car,
      color: 'bg-caldot-orange',
      features: [
        'Subscription-based service',
        'Certified mechanics',
        '24/7 support',
        'Regular maintenance',
        'Emergency services',
        'Fleet management'
      ],
      benefits: [
        'Predictable maintenance costs',
        'Reduced vehicle downtime',
        'Extended vehicle lifespan',
        'Professional service guarantee'
      ],
      external: true,
      externalUrl: 'https://www.caldotcare.com'
    },
    {
      id: 'logistics',
      title: 'Logistics Services (Trucking)',
      subtitle: 'Reliable Transportation Solutions',
      description: 'Comprehensive logistics and transportation services with modern fleet management, real-time tracking, and efficient route optimization.',
      longDescription: 'Our logistics services provide end-to-end transportation solutions for businesses of all sizes. We operate a modern fleet with advanced tracking technology, ensuring your goods are delivered safely and on time. Our experienced team handles everything from local deliveries to cross-country transportation.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Truck,
      color: 'bg-purple-500',
      features: [
        'Modern fleet management',
        'Real-time tracking',
        'Route optimization',
        'Warehouse services',
        'Cross-border shipping',
        'Express delivery'
      ],
      benefits: [
        'Reduce transportation costs',
        'Improve delivery times',
        'Enhanced visibility',
        'Reliable service guarantee'
      ]
    },
    {
      id: 'interior-decoration',
      title: 'Interior Decoration',
      subtitle: 'Creative Design Solutions',
      description: 'Transform your spaces with our creative interior design and decoration services. We create beautiful, functional environments that reflect your brand and vision.',
      longDescription: 'Our interior decoration service combines creativity with functionality to create spaces that inspire and work. We work closely with clients to understand their vision, brand identity, and functional requirements. From concept to completion, we handle every aspect of the design process.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      icon: Palette,
      color: 'bg-pink-500',
      features: [
        'Custom design solutions',
        'Space planning',
        'Material selection',
        'Project management',
        'Installation services',
        'Post-completion support'
      ],
      benefits: [
        'Enhanced brand image',
        'Improved productivity',
        'Increased property value',
        'Professional finish'
      ]
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '15+', label: 'Years Experience', icon: Star }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive solutions designed to meet all your business needs. 
              From procurement to logistics, we provide end-to-end services that drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to support your business growth and success.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`${service.color} p-3 rounded-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-caldot-orange font-semibold text-lg">
                      {service.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {service.external ? (
                    <a
                      href={service.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group"
                    >
                      Visit Caldot Care
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ) : (
                    <Link href={`/services/${service.id}`} className="btn-primary group">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="w-full h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    >
                      <div className="absolute inset-0 bg-zodiac-blue bg-opacity-20"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what makes us the preferred choice for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-caldot-orange rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-zodiac-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our services can help your business grow and succeed. 
              Contact us today for a personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                Request Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="https://www.caldotcare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-zodiac-blue"
              >
                Try Caldot Care
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ServicesPage
