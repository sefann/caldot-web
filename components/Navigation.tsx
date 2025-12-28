'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Package, ShoppingCart, Car, Truck, Palette, Users, Building, Award } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [aboutTimeout, setAboutTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesItems = [
    { name: 'General Merchandise', href: '/services/general-merchandise', icon: Package },
    { name: 'Procurement', href: '/services/procurement', icon: ShoppingCart },
    { name: 'Automobile Maintenance', href: '/services/automobile-maintenance', icon: Car },
    { name: 'Logistics', href: '/services/logistics', icon: Truck },
    { name: 'Interior Decoration', href: '/services/interior-decoration', icon: Palette },
  ]

  const aboutItems = [
    { name: 'Company Profile', href: '/about', icon: Building },
    { name: 'Our Team', href: '/about#team', icon: Users },
    { name: 'Our Values', href: '/about#values', icon: Award },
  ]

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout)
      setServicesTimeout(null)
    }
    setServicesDropdown(true)
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false)
    }, 200)
    setServicesTimeout(timeout)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeout) {
      clearTimeout(aboutTimeout)
      setAboutTimeout(null)
    }
    setAboutDropdown(true)
  }

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setAboutDropdown(false)
    }, 200)
    setAboutTimeout(timeout)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-black'
      }`}
    >
      <div className="container-custom">
                 <div className="flex items-center justify-between h-16 lg:h-20">
           {/* Logo - Back on the left with better spacing */}
           <Link href="/" className="flex items-center space-x-3 ml-4 lg:ml-8">
             <div className="w-20 h-20 lg:w-32 lg:h-32 bg-transparent rounded-lg flex items-center justify-center">
               <img 
                 src="/images/logo/caldot-logo.png" 
                 alt="Caldot Global Services Logo"
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   // Fallback to text if image fails to load
                   const target = e.currentTarget as HTMLImageElement;
                   target.style.display = 'none';
                   const nextElement = target.nextElementSibling as HTMLElement;
                   if (nextElement) {
                     nextElement.style.display = 'block';
                   }
                 }}
               />
               <span className="text-white font-bold text-2xl lg:text-3xl hidden">C</span>
             </div>
           </Link>

                       {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium text-sm ${
                    isScrolled 
                      ? 'text-zodiac-blue hover:text-caldot-orange' 
                      : 'text-white hover:text-caldot-orange'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

                           {/* About Us Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                  className={`flex items-center space-x-1 transition-colors duration-300 font-medium text-sm ${
                    isScrolled 
                      ? 'text-zodiac-blue hover:text-caldot-orange' 
                      : 'text-white hover:text-caldot-orange'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutDropdown ? 'rotate-180' : ''}`} />
                </button>
               
               {aboutDropdown && (
                                   <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    style={{ marginTop: '0.25rem', pointerEvents: 'auto' }}
                  >
                    {aboutItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-2 text-zodiac-blue hover:bg-zodiac-blue hover:text-white transition-colors duration-200"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </motion.div>
               )}
             </div>

                           {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className={`flex items-center space-x-1 transition-colors duration-300 font-medium text-sm ${
                    isScrolled 
                      ? 'text-zodiac-blue hover:text-caldot-orange' 
                      : 'text-white hover:text-caldot-orange'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} />
                </button>
               
               {servicesDropdown && (
                                   <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    style={{ marginTop: '0.25rem', pointerEvents: 'auto' }}
                  >
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-2 text-zodiac-blue hover:bg-zodiac-blue hover:text-white transition-colors duration-200"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </motion.div>
               )}
             </div>
           </div>

                       {/* CTA Button */}
            <div className="hidden lg:block mr-4 lg:mr-8">
              <Link href="/contact" className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'bg-caldot-orange text-white hover:bg-orange-600' 
                  : 'bg-caldot-orange text-white hover:bg-orange-600'
              }`}>
                Get a Quote
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-zodiac-blue' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-zodiac-blue hover:text-caldot-orange transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* About Us Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-zodiac-blue font-medium mb-2">About Us</div>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 pl-4 py-2 text-gray-600 hover:text-caldot-orange transition-colors duration-300 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-zodiac-blue font-medium mb-2">Services</div>
                {servicesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 pl-4 py-2 text-gray-600 hover:text-caldot-orange transition-colors duration-300 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="pt-4">
                <Link href="/contact" className="btn-secondary w-full text-center block">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
