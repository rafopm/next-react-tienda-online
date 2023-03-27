/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com","*.netlify.app"],
  },
}

module.exports = nextConfig
