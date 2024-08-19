/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  
    reactStrictMode: true,
    basePath: "/kristianhlm.github.io",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
