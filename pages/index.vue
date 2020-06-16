<template>
    <div class="home-container">
        <!-- <logo /> -->

        <div id="img-container">
            <img src="/images/ah.jpg" alt="Andreas Hechler" />
        </div>

        <div id="text-container">
            <h1 id="heading-home" class="title">
                Andreas Hechler
            </h1>

            <h2 id="subheading-home" class="subtitle">
                {{ $t('Software | Agilität | Coaching | Antidiskriminierung') }}
            </h2>

            <div id="short-bio">
                <p>
                    {{
                        $t(
                            'Ich bin Full Stack Web-Entwickler in Berlin. Ich interessiere mich für Agilität im Allgemeinen und für Scrum im Besonderen'
                        )
                    }}.
                </p>
                <p>
                    {{
                        $t(
                            'Ich komme aus der (Erwachsenen-)Bildung und habe als Trainer, Berater und Evaluator gearbeitet. Ich habe auch viel publiziert, Vorträge gehalten und Interviews gegeben.'
                        )
                    }}
                </p>
                <p>
                    {{
                        $t(
                            'Schwerpunkt meiner Arbeit in den letzten Jahrzehnten war Antidiskriminierung und das Schaffen einer Gesellschaft, in der Menschen ohne Angst verschieden sein können.'
                        )
                    }}
                </p>
                <p>
                    {{
                        $t(
                            'Ich bin fasziniert davon, was Sprache kann: die Gedanken und Handlungen von Menschen mit Wörtern verändern oder das, was sie auf dem Bildschirm sehen mit Code.'
                        )
                    }}
                </p>
            </div>

            <div id="social-media">
                <a href="https://github.com/andy-9" target="_blank">
                    <img
                        src="/icons/logo-github.svg"
                        alt="github logo"
                        :title="$t('Mein Profil auf GitHub')"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/andreas-hechler/"
                    target="_blank"
                >
                    <img
                        src="/icons/logo-linkedin.svg"
                        alt="linkedin-logo"
                        :title="$t('Mein Profil auf LinkedIn')"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://www.xing.com/profile/Andreas_Hechler10"
                    target="_blank"
                >
                    <img
                        src="/icons/logo-xing.svg"
                        alt="xing-logo"
                        :title="$t('Mein Profil auf XING')"
                        class="social-media-logo"
                    />
                </a>

                <a href="https://twitter.com/HechlerAndreas" target="_blank">
                    <img
                        src="/icons/logo-twitter.svg"
                        alt="twitter-logo"
                        :title="$t('Mein Profil auf twitter')"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://dissens.academia.edu/AndreasHechler"
                    target="_blank"
                >
                    <img
                        src="/icons/academia.png"
                        alt="academia-logo"
                        :title="$t('Mein Profil auf Academia')"
                        class="social-media-logo"
                /></a>

                <a
                    href="https://www.researchgate.net/profile/Andreas_Hechler"
                    target="_blank"
                >
                    <img
                        src="/icons/researchgate-icon.svg"
                        alt="researchgate-logo"
                        :title="$t('Mein Profil auf Research Gate')"
                        class="social-media-logo"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
    head() {
        return {
            title: 'Andreas Hechler Portfolio',
            meta: []
        }
    }
}
</script>

<style>
.title {
    /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 100px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #35495e; */
    /* position: absolute; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    /* display: block; */
}

.subtitle {
    /* font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    position: absolute; */
    /* padding-bottom: 15px; */
}
</style>

<style scoped>
.home-container {
    height: 90vh;
    display: grid;
    grid-template-columns: 49% 51%;
}

@media only screen and (max-width: 600px) {
    .home-container {
        height: auto;
        padding: 20px;
        grid-template-columns: 100%;
    }

    #img-container img {
        width: 100%;
    }
}

#img-container {
    width: 100%;
    overflow: hidden;
}

#img-container img {
    width: 90%;
}

#text-container {
    margin-right: 10%;
}

#heading-home {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 6em;
    font-weight: 300;
    letter-spacing: 1px;
    color: #35495e;
}

#subheading-home {
    font-weight: 300;
    font-size: 2em;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

#short-bio > p {
    margin: 2% 0;
}

#social-media {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 1em 0 5em -1em;
}

#social-media a {
    padding: 1em;
}

.social-media-logo {
    height: 2em;
    width: 2em;
}

#social-media a:hover {
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(190deg)
        brightness(110%) contrast(100%);
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
