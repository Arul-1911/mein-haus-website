/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meinhaus.ca",
        pathname: "/images/service_gallery/**",
      },
    ],
  },
};

export default nextConfig;
