/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: { domains: ['images.unsplash.com','i.ytimg.com','res.cloudinary.com'] }
}
module.exports = nextConfig
