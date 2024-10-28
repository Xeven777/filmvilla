/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "*" }],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
