/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.freepik.com", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,  // Enable React Strict Mode
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn-icons-png.freepik.com",
  //       port: "",
  //       pathname: "",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "lh3.googleusercontent.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
};

export default nextConfig;

 