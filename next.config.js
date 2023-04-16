/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'es',
  },
  // This breaks the app for now, its a reported issue of the plugin
  // experimental: {
  //   swcPlugins: [
  //     ['@lingui/swc-plugin', {}],
  //   ],
  // },
}

module.exports = nextConfig
