// add for github delpoyment
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
    //add for github deployment
    reactStrictMode: true,
    crossOrigin: 'anonymous',
    trailingSlash: true,
    env: {
        https://nazrul-99.github.io/portfolio/,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
        {
            protocol: 'https',
            hostname: '*',
        },
        ],
    },
    // from here Importatnt !!**
    output: 'export',
    basePath: isGhPages && isProd ? `/${repo}` : '',
    assetPrefix: isGhPages && isProd ? `/${repo}/` : '',
};

export default nextConfig;
