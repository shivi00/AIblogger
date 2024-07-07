/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.gravatar.com'],
  },// adding this domain so to render
}


module.exports = nextConfig
