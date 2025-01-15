/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/robots.txt", // La URL solicitada
        destination: "/api/robots", // La ruta donde se encuentra la API
      },
    ];
  },
  compress: true,
  reactStrictMode: true,
  experimental: {
    //modern: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
