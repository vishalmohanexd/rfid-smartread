/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['in','ae' ,'uk'],
    defaultLocale: 'in',
  },
  staticPageGenerationTimeout:300
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/point-of-sale',
        destination: '/apps/point-of-sale',
        permanent: false,
      },
      {
        source: '/inventory',
        destination: '/apps/inventory',
        permanent: false,
      },
      {
        source: '/sales',
        destination: '/apps/sales',
        permanent: false,
      },
      {
        source: '/purchase',
        destination: '/apps/purchase',
        permanent: false,
      },
      {
        source: '/finance',
        destination: '/apps/finance',
        permanent: false,
      },
      {
        source: '/hr',
        destination: '/apps/hr',
        permanent: false,
      },
      {
        source: '/hr',
        destination: '/apps/hr',
        permanent: false,
      },
      {
        source: '/retail',
        destination: '/buisnesstype/retail',
        permanent: false,
      },
      {
        source: '/restaurant',
        destination: '/buisnesstype/restaurant',
        permanent: false,
      },
      {
        source: '/noton',
        destination: '/composer',
        permanent: false,
      },
      {
        source: '/professional-services',
        destination: '/support/professional-services',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/resources/contact',
        permanent: false,
      },
      {
        source: '/aboutus',
        destination: '/resources/contact',
        permanent: false,
      },
    ]
  },
}