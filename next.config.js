/** @type {import('next').NextConfig} */
const { SANITY_DATASET_NAME, SANITY_PROJECT_ID } = process.env;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_DATASET_NAME,
    SANITY_PROJECT_ID,
  },
};

module.exports = nextConfig;
