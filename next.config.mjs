// add for github delpoyment
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'portfolio';
const baseUrl = isGhPages && isProd ? `/${repo}` : ''; // define baseUrl


/** @type {import('next').NextConfig} */
const nextConfig = {
    //add for github deployment
    reactStrictMode: true,
    crossOrigin: 'anonymous',
    trailingSlash: true,
    env: {
        baseUrl,
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
