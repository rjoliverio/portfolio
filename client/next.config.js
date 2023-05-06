/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_ORIGIN: process.env.API_ORIGIN,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}
