'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Calendar,
  Quote,
  ArrowRight,
  Star
} from 'lucide-react'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality services to our clients.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices at all times.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously innovate and adapt to meet the evolving needs of our clients and industry.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: '15+ years of experience in business development and strategic planning.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Expert in logistics and supply chain management with a focus on efficiency.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Leading our digital transformation and Caldot Care platform development.'
    },
    {
      name: 'Emily Davis',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Passionate about creating beautiful and functional interior spaces.'
    }
  ]

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechCorp Industries',
      content: 'Caldot Global Services transformed our supply chain operations. Their expertise and dedication exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Modern Spaces Inc.',
      content: 'The interior decoration team created a stunning workspace that perfectly reflects our company culture and values.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Fleet Solutions',
      content: 'Caldot Care has revolutionized our fleet maintenance. The subscription model is cost-effective and hassle-free.',
      rating: 5
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Caldot Global Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a trusted partner for businesses seeking comprehensive solutions 
              in merchandise, procurement, logistics, automobile maintenance, and interior decoration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide innovative, reliable, and comprehensive business solutions that empower 
                our clients to achieve their goals and drive sustainable growth in their industries.
              </p>
              
              <h3 className="text-2xl font-bold text-zodiac-blue mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading global partner for businesses seeking integrated solutions, 
                known for excellence, innovation, and unwavering commitment to client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="w-full h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
                }}
              >
                <div className="absolute inset-0 bg-zodiac-blue bg-opacity-20 rounded-2xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-caldot-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zodiac-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to delivering exceptional 
              results and building lasting partnerships with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zodiac-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-caldot-orange font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zodiac-blue mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-caldot-orange mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-zodiac-blue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="section-padding bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to take your business to the next level? Let's discuss how Caldot Global Services 
              can help you achieve your goals and drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                Get Started Today
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

export default AboutPage
