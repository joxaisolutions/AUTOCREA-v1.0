/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    ...(process.env.REPLIT_DEV_DOMAIN
      ? [`https://${process.env.REPLIT_DEV_DOMAIN}`]
      : []),
    ...(process.env.REPLIT_DOMAINS
      ? process.env.REPLIT_DOMAINS.split(',').map((d) => `https://${d.trim()}`)
      : []),
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
