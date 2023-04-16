/** @type {import('@lingui/conf').LinguiConfig} */
const nextConfig = require('./next.config');

module.exports = {
    locales: nextConfig.i18n.locales,
    sourceLocale: nextConfig.i18n.defaultLocale,
    fallbackLocales: {
        default: nextConfig.i18n.defaultLocale,
        pseudolocale: "en",
    },
    // extractBabelOptions: {
    //     "presets": [
    //         "@babel/preset-typescript",
    //         "@babel/preset-react",
    //     ],
    // },
    catalogs: [{
        path: "src/locales/{locale}/messages",
        include: ['src/pages', 'src/components']
    }],
    format: "po",
}