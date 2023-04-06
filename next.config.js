/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "https://microsignupapi-preprod.findanexpert.net/",
      "https://microsignupapi.findanexpert.net/",
       '1864597015.rsc.cdn77.org'

    ],
    
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Disable optimization
    config.optimization.minimize = false;
    config.optimization.minimizer = [];

    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
}


module.exports = nextConfig
