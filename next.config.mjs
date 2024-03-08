/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "img.freepik.com",
      "avatars.githubusercontent.com",
      "1h3.googleusercontent.com",
    ],
    // remotePatterns: [
    //     {
    //         protocol: 'https',
    //         hostname: '**',    
    //       },
    // ]
  },
};

export default nextConfig;
