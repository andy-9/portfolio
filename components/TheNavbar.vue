<template>
    <nav>
        <div class="">
            <nuxt-link class="" :to="{ name: 'index' }">Home</nuxt-link>
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'software' }"
                title="Bigger and smaller projects I have built as a software engineer"
                >Software</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'coaching' }"
                title="Coaching, education, evaluation and other things I do"
                >Coaching</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'publications' }"
                title="Writing and speaking"
                >Publications</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link class="" :to="{ name: 'about' }" title="Who is this guy?"
                >About</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'contact' }"
                title="Get in touch, imprint & credits"
                >Contact</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'language' }"
                title="Switch to English"
            >
                EN</nuxt-link
            >
            |
            <nuxt-link
                class=""
                :to="{ name: 'language' }"
                title="Auf Deutsch anzeigen"
            >
                DE
            </nuxt-link>
        </div>
    </nav>
</template>

<script></script>

<style scoped>
nav {
    font-size: 1.2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.4em 0 2em 0;
    letter-spacing: 0.5px;
}
</style>
