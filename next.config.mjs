/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  redirects: () => ([
    {
      source: '/',
      destination: '/ac',
      permanent: true,
    }
  ])
};

export default nextConfig;
