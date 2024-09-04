/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static export
    webpack: (config, context) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        }
        return config
    }
};

export default nextConfig;
