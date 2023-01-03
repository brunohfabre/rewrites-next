/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/development/:path*',
        destination: 'http://127.0.0.1:5001/development/:path*',
      },
      {
        source: '/support/:path*',
        destination: 'http://127.0.0.1:5002/support/:path*',
      },
    ]
  },
}

module.exports = nextConfig
