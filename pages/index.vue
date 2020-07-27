<template>
    <div class="home-container">
        <div id="img-container">
            <img src="/images/ah.jpg" alt="Andreas Hechler" />
        </div>
        <!-- width="583"
                height="583" -->

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
                            'Ich bin Full Stack Web-Entwickler in Berlin. Ich interessiere mich für Software und Coding, außerdem für Agilität im Allgemeinen und für Scrum im Besonderen'
                        )
                    }}.
                </p>
                <p>
                    {{
                        $t(
                            'Ich komme aus der (Erwachsenen-)Bildung und habe als Trainer, Berater und Evaluator gearbeitet. Ich habe auch viel publiziert, Vorträge gehalten und Interviews gegeben.'
                        )
                    }}
                    {{
                        $t(
                            'Schwerpunkt meiner Arbeit in den letzten Jahrzehnten war Antidiskriminierung und das Mitgestalten einer Gesellschaft, in der Menschen ohne Angst verschieden sein können.'
                        )
                    }}
                </p>
                <p>
                    {{
                        $t(
                            'Mich fasziniert, was Sprache kann: die Gedanken und Handlungen von Menschen mit Worten verändern oder das, was sie auf dem Bildschirm sehen mit Code'
                        )
                    }}.
                </p>
            </div>

            <div id="social-media">
                <a
                    href="https://github.com/andy-9"
                    target="_blank"
                    rel="noreferrer"
                >
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
                    rel="noreferrer"
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
                    rel="noreferrer"
                >
                    <img
                        src="/icons/logo-xing.svg"
                        alt="xing-logo"
                        :title="$t('Mein Profil auf XING')"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://twitter.com/HechlerAndreas"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/icons/logo-twitter.svg"
                        alt="twitter-logo"
                        :title="$t('Mein Profil auf twitter')"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://independent.academia.edu/AndreasHechler"
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
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
            title: 'Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
.home-container {
    height: 90vh;
    display: grid;
    grid-template-columns: 49% 51%;
}

#img-container {
    width: 100%;
}

#img-container img {
    width: 90%;
    /* aspect-ratio: attr(width) / attr(height); */
}

#text-container {
    margin-right: 10%;
}

#heading-home {
    font-size: 6em;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 110%;
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
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0 5em -1em;
}

#social-media a {
    padding: 1em;
}

.social-media-logo {
    height: 2em;
    width: 2em;
    opacity: 0.8;
}

#social-media a:hover {
    opacity: 0.5;
}

@media only screen and (max-width: 768px) {
    .home-container {
        padding: 1em;
        grid-template-columns: 100%;
    }

    #img-container {
        margin: 0 auto;
        display: block;
    }

    #img-container img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    #text-container {
        margin-right: 0%;
    }

    #heading-home {
        font-size: 4.8em;
    }

    #subheading-home {
        font-size: 1.5em;
    }
}
</style>
