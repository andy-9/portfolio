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

        <Nav />

        <div v-if="$nuxt.isOffline">You are offline</div>
        <nuxt />
    </div>
</template>

<script>
import Nav from '@/components/nav'
export default {
    components: {
        Nav
    },
    head() {
        return this.$nuxtI18nSeo()
    }
}
</script>

<style></style>
