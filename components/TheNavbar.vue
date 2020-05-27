<template>
    <nav>
        <div class="">
            <nuxt-link class="" :to="{ name: 'index' }">Home</nuxt-link>
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'software' }"
                title="bigger and smaller projects I have built as a software engineer"
                >Software</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'coaching' }"
                title="coaching, education, evaluation and other things I do"
                >Coaching</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link
                class=""
                :to="{ name: 'publications' }"
                title="writing and talking"
                >Publications</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link class="" :to="{ name: 'about' }" title="who is this guy?"
                >About</nuxt-link
            >
        </div>
        <div class="">
            <nuxt-link class="" :to="{ name: 'contact' }" title="get in touch"
                >Contact</nuxt-link
            >
        </div>
        <div class="">
            <!-- <nuxt-link class="" :to="{ name: 'language' }"> -->
            EN | DE
            <!-- </nuxt-link> -->
        </div>
    </nav>
</template>

<script></script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2em;
    font-weight: lighter;
    letter-spacing: 0.5px;
}
</style>
