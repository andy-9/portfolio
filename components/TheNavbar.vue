<template>
    <nav id="navbar">
        <div class="">
            <nuxt-link class="nav-link" :to="{ name: 'index' }">Home</nuxt-link>
        </div>

        <div class="">
            <nuxt-link
                class="nav-link"
                :to="{ name: 'software' }"
                title="Bigger and smaller projects I have built as a software engineer"
                >Software</nuxt-link
            >
        </div>

        <div class="">
            <nuxt-link
                class="nav-link"
                :to="{ name: 'coaching' }"
                title="Coaching, education, evaluation and other things I do"
                >Coaching</nuxt-link
            >
        </div>

        <div class="">
            <nuxt-link
                class="nav-link"
                :to="{ name: 'publications' }"
                title="Writing and speaking"
                >Publications</nuxt-link
            >
        </div>

        <div class="">
            <nuxt-link class="nav-link" :to="{ name: 'about' }" title="About me"
                >About</nuxt-link
            >
        </div>

        <div class="">
            <nuxt-link
                class="nav-link"
                :to="{ name: 'contact' }"
                title="Get in touch, imprint & credits"
                >Contact</nuxt-link
            >
        </div>

        <div class="">
            <nuxt-link
                class="nav-link-left"
                :to="{ name: '' }"
                title="Not working yet"
            >
                EN</nuxt-link
            >
            |
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
}

.nav-link {
    padding: 0 2em;
}

.nav-link-left {
    padding-left: 2em;
}
</style>
