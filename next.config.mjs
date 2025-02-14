/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "*" }],
        dangerouslyAllowSVG: true,
    },
    experimental: {
        staleTimes: {
            dynamic: 50,
            static: 200,
        },
    },
};

export default nextConfig;
