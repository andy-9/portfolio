<template>
    <nav id="navbar">
        <!-- <nuxt-link class="nav-link" :to="{ name: 'index' }">Home</nuxt-link> -->
        <nuxt-link class="nav-link" :to="localePath('index')">{{
            $t('Home')
        }}</nuxt-link>

        <!-- <nuxt-link
            class="nav-link"
            :to="{ name: 'software' }"
            title="Bigger and smaller projects I have built as a software engineer"
            >Software</nuxt-link
        > -->
        <nuxt-link
            class="nav-link"
            :to="localePath('software')"
            title="Bigger and smaller projects I have built as a software engineer"
            >{{ $t('Software') }}</nuxt-link
        >

        <!-- <nuxt-link
            class="nav-link"
            :to="{ name: 'publications' }"
            title="Writing and speaking"
            >Publications</nuxt-link
        > -->
        <nuxt-link
            class="nav-link"
            :to="localePath('publications')"
            title="Writing and speaking"
            >{{ $t('Publications') }}</nuxt-link
        >

        <!-- <nuxt-link class="nav-link" :to="{ name: 'about' }" title="About me"
            >About</nuxt-link
        > -->
        <nuxt-link
            class="nav-link"
            :to="localePath('about')"
            title="About me"
            >{{ $t('About') }}</nuxt-link
        >

        <!-- <nuxt-link
            class="nav-link"
            :to="{ name: 'contact' }"
            title="Get in touch, imprint & credits"
            >Contact</nuxt-link
        > -->
        <nuxt-link
            class="nav-link"
            :to="localePath('contact')"
            title="Get in touch, imprint & credits"
            >{{ $t('Contact') }}</nuxt-link
        >

        <div class="language-selector">
            <nuxt-link
                class="nav-link-left"
                :to="{ name: '' }"
                title="Not working yet"
            >
                EN</nuxt-link
            >
            <span class="language-separator">|</span>
            <nuxt-link
                class=""
                :to="{ name: '' }"
                title="Geht bisher noch nicht"
            >
                DE
            </nuxt-link>
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
