<template>
    <nav id="navbar">
        <nuxt-link class="nav-link" :to="localePath('index')">Home</nuxt-link>

        <nuxt-link
            class="nav-link"
            :to="localePath('software')"
            :title="
                $t(
                    'Größere und kleinere Software-Projekte, die ich gebaut habe'
                )
            "
            >Software</nuxt-link
        >

        <nuxt-link
            class="nav-link"
            :to="localePath('publications')"
            :title="$t('Schreiben und Reden')"
            >{{ $t('Veröffentlichungen') }}</nuxt-link
        >

        <nuxt-link class="nav-link" :to="localePath('about')">{{
            $t('Über mich')
        }}</nuxt-link>

        <nuxt-link
            class="nav-link"
            :to="localePath('contact')"
            :title="$t('Kontaktaufnahme, Dank &amp; Impressum')"
            >{{ $t('Kontakt') }}</nuxt-link
        >

        <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            class="nav-link"
            :to="switchLocalePath(locale.code)"
            :title="$t('Switch to English')"
            >{{ locale.abbr }}</nuxt-link
        >
    </nav>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            )
        }
    }
}
</script>

<style scoped>
nav {
    max-height: 10vh;
    min-height: 10vh;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    mix-blend-mode: screen;
}

nav a {
    color: rgb(85, 84, 84);
}

.nav-link {
    padding: 0 2em;
}
</style>
