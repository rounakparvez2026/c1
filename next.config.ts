import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // Disable static exports for pages that have issues with React 19
    experimental: {
        // Improve build stability
        webpackBuildWorker: true
    }
}

export default nextConfig
