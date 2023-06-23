/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
    reactRoot: true,
    },
    images: {
        domains: ["image.tmdb.org"],
    },
};
module.exports = nextConfig;
