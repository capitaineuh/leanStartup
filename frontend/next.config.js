/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // Correction de l'URL du backend
      },
    ];
  },
};

module.exports = nextConfig; 