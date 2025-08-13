'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const NewsletterSignup = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-zodiac-blue to-navy-blue text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-caldot-orange rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Stay Updated with Caldot Global
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest insights, industry trends, 
              project updates, and exclusive offers. Join our community of professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-caldot-orange focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-caldot-orange focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-secondary group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span>Subscribe to Newsletter</span>
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-300">
                  By subscribing, you agree to our{' '}
                  <a href="/privacy-policy" className="text-caldot-orange hover:underline">
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a href="/terms-of-service" className="text-caldot-orange hover:underline">
                    Terms of Service
                  </a>
                  . You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-300">
                  Thank you for subscribing to our newsletter. You'll receive our latest updates soon.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-caldot-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h4 className="font-semibold mb-2">Industry Insights</h4>
              <p className="text-gray-300 text-sm">
                Stay ahead with the latest trends and market analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-caldot-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Exclusive Offers</h4>
              <p className="text-gray-300 text-sm">
                Get early access to special promotions and deals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-caldot-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Project Updates</h4>
              <p className="text-gray-300 text-sm">
                Be the first to know about our latest projects and innovations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
