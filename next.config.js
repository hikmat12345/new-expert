/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://microsignupapi-preprod.findanexpert.net/",
      "https://microsignupapi.findanexpert.net/",
       '1864597015.rsc.cdn77.org'

    ],
  },
}

module.exports = nextConfig
