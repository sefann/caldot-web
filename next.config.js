/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    FORMPREE_ID: process.env.FORMPREE_ID || '',
  },
}

module.exports = nextConfig
