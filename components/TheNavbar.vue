<template>
    <nav>
        <div class="logo">
            <nuxt-link class="" :to="{ name: 'index' }"
                >Link for Navbar</nuxt-link
            >
        </div>
    </nav>
</template>

<script></script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
}
</style>
