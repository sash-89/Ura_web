module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: [''],
  },
};

const { NEXT_APP_MODE } = process.env;

const nextConfig = {
  prod: {
    publicRuntimeConfig: {
      AUTH_URL: 'https://api-customers.uraa.com',
    },
  },
  dev: {
    publicRuntimeConfig: {
      AUTH_URL: 'https://api-customers.uraa.com',
    },
  },
};

module.exports = nextConfig[NEXT_APP_MODE] || nextConfig.prod;
