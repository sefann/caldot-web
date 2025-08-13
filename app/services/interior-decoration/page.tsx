'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Palette, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Home,
  Zap,
  Award
} from 'lucide-react'

const InteriorDecorationPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Custom design solutions',
    'Space planning',
    'Material selection',
    'Project management',
    'Installation services',
    'Post-completion support'
  ]

  const benefits = [
    'Enhanced brand image',
    'Improved productivity',
    'Increased property value',
    'Professional finish'
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: Home },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '15+', label: 'Years Experience', icon: Star }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-caldot-orange rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Interior Decoration
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your spaces with our creative interior design and decoration services. 
              We create beautiful, functional environments that reflect your brand and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
                Creative Design Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our interior decoration service combines creativity with functionality to create spaces that inspire and work. 
                We work closely with clients to understand their vision, brand identity, and functional requirements. 
                From concept to completion, we handle every aspect of the design process.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-zodiac-blue mb-4">Key Features:</h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h4 className="font-semibold text-zodiac-blue mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-caldot-orange rounded-full"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=interior-decoration" className="btn-primary group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/services" className="btn-secondary group">
                  View All Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Interior Decoration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-zodiac-blue bg-opacity-20"></div>
              </div>
            </motion.div>
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
              Why Choose Our Interior Decoration Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on creativity, quality, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-caldot-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact us today to discuss your interior decoration needs and discover 
              how we can help create the perfect environment for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=interior-decoration" className="btn-secondary group">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-zodiac-blue">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default InteriorDecorationPage
