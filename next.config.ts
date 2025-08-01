import type { NextConfig } from 'next';
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  basePath: basePath,
};

export default nextConfig;
