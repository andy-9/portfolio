export default {
    mode: 'universal',
    // plugins: [{ src: '~plugins/i18n.js', injectAs: 'i18n' }],
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
    buildModules: ['@nuxtjs/eslint-module'],
    /*
     ** Nuxt.js modules
     */
    modules: [
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
                lazy: true,
                loadLanguagesAsync: true,
                langDir: 'locales/',
                detectBrowserLanguage: {
                    useCookie: true,
                    alwaysRedirect: true
                }
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
        extend(config, ctx) {}
    }
}
