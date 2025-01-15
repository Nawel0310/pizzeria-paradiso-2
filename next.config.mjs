/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/robots.txt', // La URL solicitada
          destination: '/api/robots', // La ruta donde se encuentra la API
        },
      ];
    },
  };
export default nextConfig;
