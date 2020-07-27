import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import shrinkRay from 'shrink-ray-current'

export default {
    render: {
        compressor: shrinkRay()
    },
    mode: 'universal',
    // plugins: [{ src: '~plugins/i18n.js', injectAs: 'i18n' }],
    // plugins: [new BundleAnalyzerPlugin()],
    head: {
        htmlAttrs: {
            // lang: this.$i18n.locale
        },
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.png' }
        ]
    },
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },
    layoutTransition: {
        name: 'layout',
        mode: 'out-in'
    },
    /*
     ** Customize the progress-bar color
     */
    loading: '~/components/loading.vue',
    /*
     ** Global CSS
     */
    css: ['~/assets/style.css'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/pwa', 'nuxt-purgecss'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        'nuxt-brotli',
        '@nuxtjs/component-cache',
        [
            'nuxt-i18n',
            {
                strategy: 'prefix_except_default',
                defaultLocale: 'de',
                vueI18n: {
                    fallbackLocale: 'de'
                },
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English',
                        abbr: 'EN',
                        file: 'en.json'
                    },
                    {
                        code: 'de',
                        iso: 'de-DE',
                        name: 'Deutsch',
                        abbr: 'DE',
                        file: 'de.json'
                    }
                ],
                routesNameSeparator: '___',
                lazy: true,
                langDir: 'locales/',
                loadLanguagesAsync: true,
                detectBrowserLanguage: {
                    useCookie: true,
                    alwaysRedirect: true,
                    fallbackLocale: null
                },
                seo: false
            }
        ]
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // analyze: true,
        extend(config, ctx) {}
    }
}
