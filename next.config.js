/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ THIS TELLS VERCEL TO USE APP ROUTER!
  },
};

module.exports = nextConfig;
