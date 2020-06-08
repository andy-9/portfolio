<template>
    <div id="credits-container">
        <h1>Credits</h1>

        <div id="credit-paragraphs">
            <p>
                Checklist icon from Seekicon. Academia icon from Pinclipart. All
                other icons by Ionicon icons. No changes were made.
            </p>
            <p>
                Portrait by
                <a
                    href="https://www.jankopetzky.de/"
                    style="color: white"
                    target="_blank"
                    >Jan Kopetzky</a
                >. Flower image from DarkWorkX. Typewriter image from Leah
                Kelley. Imprint image from Elviss Railijs.
            </p>
            <p>
                Inspirations and code-snippets found on CSS-tricks, codepen.io,
                and stack overflow.
            </p>
            <p>...and probably way more resources I forgot 🙃</p>
            <p>A special thanks to Spiced Academy, MSG, Jan, Gino & Andy.</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Credits',
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
#credits-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url(/images/flower.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: right;
    padding: 5%;
}

h1 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 4em;
    font-weight: 300;
    letter-spacing: 0.4em;
    color: white;
}

#credit-paragraphs > p {
    color: white;
    margin-left: 50%;
    padding: 1% 0;
}
</style>
