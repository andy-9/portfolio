<template>
    <div id="imprint-container">
        <h1>Imprint</h1>
        <div id="imprint-paragraphs">
            <!-- <p>Legal notice for imprint</p> -->
        </div>
        <footer class="white">
            © Andreas Hechler {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Imprint Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style>
html,
body,
#__nuxt,
#__layout,
#__layout > div {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>

<style scoped>
#imprint-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url(/images/footprint.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 2% 5% 1% 5%;
    display: grid;
    grid-template-rows: 1fr auto;
}

h1 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 4em;
    font-weight: 300;
    letter-spacing: 0.4em;
    color: white;
}

#imprint-paragraphs > p {
    color: white;
    padding: 1% 0;
    flex-shrink: 0;
}

footer {
    grid-row-start: 3;
    grid-row-end: 4;
}
</style>
