<template>
    <div>
        <nav id="navbar">
            <ul>
                <li>
                    <nuxt-link class="nav-link active" :to="localePath('index')"
                        >Home</nuxt-link
                    >
                </li>

                <li>
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
                </li>

                <li>
                    <nuxt-link
                        class="nav-link"
                        :to="localePath('publications')"
                        :title="$t('Schreiben und Reden')"
                        >{{ $t('Veröffentlichungen') }}</nuxt-link
                    >
                </li>

                <li>
                    <nuxt-link class="nav-link" :to="localePath('about')">{{
                        $t('Über mich')
                    }}</nuxt-link>
                </li>

                <li>
                    <nuxt-link
                        class="nav-link"
                        :to="localePath('contact')"
                        :title="$t('Kontaktaufnahme, Dank &amp; Impressum')"
                        >{{ $t('Kontakt') }}</nuxt-link
                    >
                </li>
            </ul>

            <span class="language-switcher">
                <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    class="nav-link"
                    :to="switchLocalePath(locale.code)"
                    :title="$t('Switch to English')"
                    >{{ locale.abbr }}</nuxt-link
                >
            </span>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            )
        }
    },
    head() {
        return {
            title: 'Thank you',
            meta: []
        }
    }
}
</script>

<style scoped>
#navbar {
    min-height: 10vh;
    z-index: 1;
    position: relative;
    mix-blend-mode: screen;
}

#navbar ul {
    font-size: 1.2em;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin-right: 4em;
    align-items: center;
}

#navbar a {
    display: block;
    color: rgb(85, 84, 84);
    text-decoration: none;
    padding: 0.7em 1.1em;
    transition: all 0.5s ease-in-out;
}

#navbar .nav-link.nuxt-link-exact-active {
    color: #35495e;
    border-bottom: 3px solid #35495e;
}

#navbar a:hover {
    opacity: 0.6;
}

.language-switcher {
    position: absolute;
    top: 0vh;
    right: 0.3em;
    font-size: 1.2em;
}

@media only screen and (max-width: 768px) {
    #navbar {
        max-height: initial;
    }

    #navbar a {
        padding: 0.3em 1em;
    }
}
</style>
