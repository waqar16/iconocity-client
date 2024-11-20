// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // images: {
//   //   domains: ["cdn-icons-png.freepik.com", "lh3.googleusercontent.com"],
//   // },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn-icons-png.freepik.com",
//         port: "",
//         pathname: "",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//         port: "",
//         pathname: "",
//       },
//     ],
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
