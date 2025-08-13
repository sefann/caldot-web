'use client'

import React from 'react'
import Link from 'next/link'
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'General Merchandise', href: '/services#general-merchandise' },
      { name: 'Procurement', href: '/services#procurement' },
      { name: 'Automobile Maintenance', href: '/services#automobile-maintenance' },
      { name: 'Logistics Services', href: '/services#logistics' },
      { name: 'Interior Decoration', href: '/services#interior-decoration' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
                         <div className="flex items-center space-x-3 mb-6">
               <div className="w-24 h-24 lg:w-40 lg:h-40 bg-transparent rounded-lg flex items-center justify-center">
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
                 <span className="text-white font-bold text-3xl lg:text-4xl hidden">C</span>
               </div>
             </div>
            <p className="text-gray-300 mb-6">
              Your All-in-One Partner for Quality Services. We provide comprehensive solutions 
              in general merchandise, procurement, automobile maintenance, logistics, and interior decoration.
            </p>
            
            {/* Caldot Care CTA */}
            <a
              href="https://www.caldotcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-caldot-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              <Car className="w-4 h-4" />
              <span>Try Caldot Care</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-caldot-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-caldot-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-caldot-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-caldot-orange flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-caldot-orange transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-caldot-orange flex-shrink-0" />
                <a
                  href="mailto:info@caldotglobalservices.com"
                  className="text-gray-300 hover:text-caldot-orange transition-colors duration-300"
                >
                  info@caldotglobalservices.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-caldot-orange transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Caldot Global Services. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-caldot-orange transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
