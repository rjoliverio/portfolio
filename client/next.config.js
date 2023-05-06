/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_ORIGIN: process.env.NEXT_PUBLIC_API_ORIGIN,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}
