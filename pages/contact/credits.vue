<template>
    <div id="credits-container">
        <h1>Credits</h1>

        <div id="credit-paragraphs">
            <p>
                {{
                    $t(
                        'Icon Checkliste von Seekicon. Icon Academia von Pinclipart. Alle anderen icons von Ionicon icons. Es wurden keine Veränderungen vorgenommen.'
                    )
                }}
            </p>
            <p>
                Portrait {{ $t('von') }}
                <a
                    href="https://www.jankopetzky.de/"
                    style="color: white"
                    target="_blank"
                    rel="noreferrer"
                    title="Portfolio Jan Kopetzky"
                    >Jan Kopetzky</a
                >.
                {{
                    $t(
                        'Blumenbild von DarkWorkX. Schreibmaschinenbild von Leah Kelley. Bild Fußabdruck im Sand von Elviss Railijs.'
                    )
                }}
            </p>
            <p>
                {{
                    $t(
                        'CSS-tricks, codepen.io und stack overflow für Inspirationen und Code-Schnipsel.'
                    )
                }}
            </p>
            <p>
                {{
                    $t(
                        '...und vermutlich viele weitere Ressourcen, die ich vergessen habe'
                    )
                }}
                🙃
            </p>
            <p>
                {{
                    $t(
                        'Ein ganz besonderer Dank an Spiced Academy, MSG, Jan, Gino &amp; Andy'
                    )
                }}.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.$t('Dank von Andreas Hechler'),
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
    color: white;
}

#credit-paragraphs > p {
    color: white;
    margin-left: 50%;
    padding: 1% 0;
}

@media only screen and (max-width: 768px) {
    #credit-paragraphs > p {
        margin-left: 3%;
    }
}
</style>
