/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "pbs.twimg.com",
            },
            {
                hostname: "imagedelivery.net",
            },
        ],
    },
};

export default nextConfig;
