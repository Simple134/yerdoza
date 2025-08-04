/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
    env: {
      GESTIONO_API_URL: process.env.GESTIONO_API_URL,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.gestiono.app',
          pathname: '/**',
        },
      ],
      domains: ["localhost"]
    },
  }
  
  module.exports = nextConfig 