'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Shield, Clock, Smartphone, ArrowRight } from 'lucide-react'

const CaldotCareBanner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: 'Professional Service',
      description: 'Certified mechanics and quality parts'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it'
    },
    {
      icon: Smartphone,
      title: 'Easy Booking',
      description: 'Schedule services with just a few taps'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-caldot-orange rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-caldot-orange font-semibold text-lg">Caldot Care</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Subscription-Based Car Care Platform
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience hassle-free vehicle maintenance with our innovative subscription service. 
              Get professional car care, regular maintenance, and 24/7 support all in one convenient platform.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-caldot-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.caldotcare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                Try Caldot Care Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://www.caldotcare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-zodiac-blue"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl p-4 flex flex-col">
                  <div className="text-center text-white mb-4">
                    <Car className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-bold">Caldot Care</h3>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg p-4 space-y-3">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="text-sm font-semibold text-blue-800">Next Service</div>
                      <div className="text-xs text-blue-600">Oil Change - Due in 500 miles</div>
                    </div>
                    
                    <div className="bg-green-100 rounded-lg p-3">
                      <div className="text-sm font-semibold text-green-800">Active Plan</div>
                      <div className="text-xs text-green-600">Premium Maintenance</div>
                    </div>
                    
                    <div className="bg-orange-100 rounded-lg p-3">
                      <div className="text-sm font-semibold text-orange-800">Quick Actions</div>
                      <div className="text-xs text-orange-600">Book Service • Get Quote</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-caldot-orange rounded-full p-3 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Clock className="w-6 h-6 text-zodiac-blue" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaldotCareBanner
