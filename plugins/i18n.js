import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
    const newLocal = '~/locales/de.json'
    // Get localized path for homepage
    // const localePath = app.localePath('index')
    // Get path to switch current route to English
    // const switchLocalePath = app.switchLocalePath('en')

    // Set the i18n instance on app

    app.i18n = new VueI18n({
        // Set the initial locale
        locale: 'de',

        fallbackLocale: 'de',

        messages: {
            // de: require('~/locales/de.json'),
            de: require(newLocal),
            en: require('~/locales/en.json')
        }
    })
}
