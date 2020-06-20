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

        <div class="language-selector">
            <nuxt-link
                class="nav-link-left"
                :to="localePath('index', 'en')"
                title="Switch to English"
            >
                EN</nuxt-link
            >

            <span class="language-separator">|</span>

            <nuxt-link
                class=""
                :to="localePath('index', 'de')"
                title="Seite auf Deutsch anzeigen"
            >
                DE</nuxt-link
            >
        </div>
    </nav>
</template>

<script></script>

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

.nav-link-left {
    padding-left: 2em;
}

.language-separator {
    color: rgb(85, 84, 84);
}
</style>
