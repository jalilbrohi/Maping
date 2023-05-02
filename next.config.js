/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "orkw6vhtvc8o",
    CONTENTFUL_ACCESS_KEY: "wBNE4J9I97SNVSEW5n87fnCZ7SsiiRqEEP0E_CHVyF8",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
