'use client'

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
  ArrowRight 
} from 'lucide-react'

const ServicesOverview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      id: 'general-merchandise',
      title: 'General Merchandise',
      description: 'Comprehensive merchandise solutions for businesses of all sizes, ensuring quality products and reliable supply chains.',
      icon: Package,
      color: 'bg-blue-500',
      image: '/images/services/general-merchandise.jpg',
      href: '/services#general-merchandise'
    },
    {
      id: 'procurement',
      title: 'Procurement of Goods & Services',
      description: 'Strategic procurement services to optimize your supply chain, reduce costs, and improve operational efficiency.',
      icon: ShoppingCart,
      color: 'bg-green-500',
      image: '/images/services/procurement.jpg',
      href: '/services#procurement'
    },
    {
      id: 'automobile-maintenance',
      title: 'Automobile Maintenance',
      description: 'Professional vehicle maintenance and care services through our innovative Caldot Care platform.',
      icon: Car,
      color: 'bg-caldot-orange',
      image: '/images/services/automobile-maintenance.jpg',
      href: 'https://www.caldotcare.com',
      external: true
    },
    {
      id: 'logistics',
      title: 'Logistics Services (Trucking)',
      description: 'Reliable transportation and logistics solutions with modern fleet management and real-time tracking.',
      icon: Truck,
      color: 'bg-purple-500',
      image: '/images/services/logistics.jpg',
      href: '/services#logistics'
    },
    {
      id: 'interior-decoration',
      title: 'Interior Decoration',
      description: 'Creative interior design and decoration services to transform your spaces into beautiful, functional environments.',
      icon: Palette,
      color: 'bg-pink-500',
      image: '/images/services/interior-decoration.jpg',
      href: '/services#interior-decoration'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zodiac-blue mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet all your business needs with quality, 
            reliability, and innovation at the core.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="card group cursor-pointer overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = `linear-gradient(135deg, ${service.color.replace('bg-', '')} 0%, ${service.color.replace('bg-', '')}dd 100%)`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className={`absolute top-4 right-4 ${service.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h3 className="text-xl font-semibold text-zodiac-blue mb-3 group-hover:text-caldot-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-caldot-orange font-medium hover:text-orange-600 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-caldot-orange font-medium hover:text-orange-600 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview
