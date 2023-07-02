/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com'
          },
        ],
      },
}
=======
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
>>>>>>> 5bc94419394ac00efd32a7443d888f9729a755c8

module.exports = nextConfig;