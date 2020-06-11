<template>
    <div>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <TheNavbar />

        <!-- <transition name="fade" mode="out-in">
            <router-view :key="$route.path" />
        </transition> -->

        <nuxt />
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
    components: {
        TheNavbar
    },

    mounted() {
        const hash = location.hash
        if (hash) {
            const currentElem = document.querySelector(hash)
            if (currentElem) {
                scrollToPlaces(currentElem)
            }
        }
        // if not true do it, if true set to false, repeat
        function scrollToPlaces(elem) {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: elem.offsetTop
            })
        }

        // function scrollToTop() {
        //     window.scrollTo({
        //         behavior: 'smooth',
        //         left: 0,
        //         top: 0
        //     })
        // }
    }

    // _methods: {
    //     scrollToTop() {
    //         window.scrollTo({
    //             behavior: 'smooth',
    //             left: 0,
    //             top: 0
    //         })
    //     }
    // },
    // get methods() {
    //     return this._methods
    // },
    // set methods(value) {
    //     this._methods = value
    // }
}
</script>

<style></style>
