<template>
    <div>
        <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap"
            rel="stylesheet"
        />

        <TheNavbar />
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
