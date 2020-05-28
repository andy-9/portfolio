<template>
    <div>
        <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap"
            rel="stylesheet"
        />

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
    }
}
</script>

<style></style>
