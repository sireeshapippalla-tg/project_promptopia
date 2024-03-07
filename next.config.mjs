/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['1h3.googleusercontent.com', 'lh3.googleusercontent.com'], // Add lh3.googleusercontent.com to the domains array
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
};

export default nextConfig;
