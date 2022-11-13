/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com', 's3-alpha-sig.figma.com'],
  },
}
