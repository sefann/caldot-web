'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Filter, 
  ExternalLink, 
  Calendar,
  Tag,
  CheckCircle,
  Clock
} from 'lucide-react'

const ProjectsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'general-merchandise', name: 'General Merchandise' },
    { id: 'procurement', name: 'Procurement' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'interior-decoration', name: 'Interior Decoration' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Corporate Office Interior Design',
      category: 'interior-decoration',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Modern office space transformation for a leading tech company, creating an inspiring and productive work environment.',
      date: '2024-01-15',
      status: 'Completed',
      client: 'TechCorp Industries',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Supply Chain Optimization',
      category: 'procurement',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'End-to-end supply chain management for manufacturing client, reducing costs by 25% and improving efficiency.',
      date: '2024-02-20',
      status: 'In Progress',
      client: 'Manufacturing Solutions Inc.',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Retail Store Merchandise Setup',
      category: 'general-merchandise',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete merchandise setup for new retail chain, including product sourcing and store layout optimization.',
      date: '2023-12-10',
      status: 'Completed',
      client: 'Retail Chain Corp.',
      duration: '2 months'
    },
    {
      id: 4,
      title: 'Fleet Management System',
      category: 'logistics',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive fleet management solution for transportation company with real-time tracking and optimization.',
      date: '2023-11-05',
      status: 'Completed',
      client: 'Transport Solutions Ltd.',
      duration: '4 months'
    },
    {
      id: 5,
      title: 'Hotel Interior Renovation',
      category: 'interior-decoration',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxury hotel interior renovation project, creating elegant and comfortable guest experiences.',
      date: '2024-03-01',
      status: 'In Progress',
      client: 'Luxury Hotels Group',
      duration: '8 months'
    },
    {
      id: 6,
      title: 'Global Procurement Strategy',
      category: 'procurement',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Strategic global procurement implementation for multinational corporation, optimizing supplier networks.',
      date: '2023-10-15',
      status: 'Completed',
      client: 'Global Corp International',
      duration: '12 months'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful projects across various industries. 
              Each project showcases our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zodiac-blue mb-6">
              Browse Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Filter projects by category to find examples of our work in your area of interest.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-caldot-orange text-white shadow-lg'
                    : 'bg-white text-zodiac-blue hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  >
                    <div className="absolute inset-0 bg-zodiac-blue bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-caldot-orange text-white">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zodiac-blue mb-3 group-hover:text-caldot-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(project.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Duration: {project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Project #{project.id}
                    </span>
                    <div className="flex items-center text-caldot-orange font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg">
                No projects found for the selected category.
              </div>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 px-6 py-2 bg-caldot-orange text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zodiac-blue mb-6">
              Project Statistics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record of successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Completed', icon: CheckCircle },
              { number: '50+', label: 'Happy Clients', icon: '👥' },
              { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '15+', label: 'Years Experience', icon: '📅' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">
                  {typeof stat.icon === 'string' ? stat.icon : <stat.icon className="w-12 h-12 text-caldot-orange mx-auto" />}
                </div>
                <div className="text-3xl font-bold text-zodiac-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ProjectsPage
