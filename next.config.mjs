// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn-icons-png.freepik.com", "lh3.googleusercontent.com"],
//   },
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "cdn-icons-png.freepik.com",
//   //       port: "",
//   //       pathname: "",
//   //     },
//   //     {
//   //       protocol: "https",
//   //       hostname: "lh3.googleusercontent.com",
//   //       port: "",
//   //       pathname: "",
//   //     },
//   //   ],
//   // },
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
        pathname: "/**",  // Matches all paths within the domain
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",  // Matches all paths within the domain
      },
    ],
  },
};

export default nextConfig;
