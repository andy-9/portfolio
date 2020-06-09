<template>
    <div>
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
        function scrollToPlaces(elem) {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: elem.offsetTop
            })
        }
    }
}
</script>

<style></style>
