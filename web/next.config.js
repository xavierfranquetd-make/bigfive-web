const createNextIntlPlugin = require('next-intl/plugin');
const { withContentlayer } = require('next-contentlayer');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = withContentlayer(withNextIntl(nextConfig));
