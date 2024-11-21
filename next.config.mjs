/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://elena-chekredji.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
