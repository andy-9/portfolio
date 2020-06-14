export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
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
     ** Plugins to load before mounting the App
     */
    // plugins: ['~/plugins/i18n.js'],
    // router: {
    //     middleware: ['i18n']
    // },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-i18n',
            {
                strategy: 'prefix_except_default',
                // strategy: 'no_prefix',
                defaultLocale: 'de',
                vueI18n: {
                    fallbackLocale: 'de'
                },
                locales: [
                    {
                        code: 'de',
                        iso: 'de-DE',
                        name: 'Deutsch',
                        file: 'de.json'
                        // langFile: 'de.json'
                    },
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English',
                        file: 'en.json'
                        // langFile: 'en.json'
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
    // i18n: {
    //     locales: ['en', 'de'],
    //     defaultLocale: 'de',
    //     vueI18n: {
    //         fallbackLocale: 'de',
    //         messages: {
    // de: require('~/locales/de.json'),
    // en: require('~/locales/en.json')
    //         }
    //     }
    // },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
    // serverMiddleware: ['~/api/contact']
}
