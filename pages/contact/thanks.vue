<template>
    <div>
        <nav id="navbar">
            <ul>
                <li>
                    <nuxt-link class="nav-link" :to="localePath('index')"
                        >Home</nuxt-link
                    >
                </li>

                <li>
                    <nuxt-link
                        class="nav-link"
                        :to="localePath('software')"
                        :title="
                            $t(
                                'Größere und kleinere Software-Projekte, die ich gebaut habe'
                            )
                        "
                        >Software</nuxt-link
                    >
                </li>

                <li>
                    <nuxt-link
                        class="nav-link"
                        :to="localePath('publications')"
                        :title="$t('Schreiben und Reden')"
                        >{{ $t('Veröffentlichungen') }}</nuxt-link
                    >
                </li>

                <li>
                    <nuxt-link class="nav-link" :to="localePath('about')">{{
                        $t('Über mich')
                    }}</nuxt-link>
                </li>

                <li>
                    <nuxt-link
                        class="nav-link"
                        :to="localePath('contact')"
                        :title="$t('Kontaktaufnahme, Dank &amp; Impressum')"
                        >{{ $t('Kontakt') }}</nuxt-link
                    >
                </li>

                <li>
                    <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        class="nav-link"
                        :to="switchLocalePath(locale.code)"
                        :title="$t('Switch to English')"
                        >{{ locale.abbr }}</nuxt-link
                    >
                </li>
            </ul>
        </nav>

        <span class="target"></span>
    </div>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            )
        }
    },
    mounted() {
        ;(function() {
            const target = document.querySelector('.target')
            const links = document.querySelectorAll('#navbar a')

            function mouseenterFunc() {
                if (!this.parentNode.classList.contains('active')) {
                    for (let i = 0; i < links.length; i++) {
                        if (links[i].parentNode.classList.contains('active')) {
                            links[i].parentNode.classList.remove('active')
                        }
                        links[i].style.opacity = '0.25'
                    }

                    this.parentNode.classList.add('active')
                    this.style.opacity = '1'

                    const width = this.getBoundingClientRect().width
                    const height = this.getBoundingClientRect().height
                    const left = this.getBoundingClientRect().left
                    const top = this.getBoundingClientRect().top

                    target.style.width = `${width}px`
                    target.style.height = `${height}px`
                    target.style.left = `${left}px`
                    target.style.top = `${top}px`
                    // target.style.borderColor = 'orange'
                    target.style.transform = 'none'
                }
            }

            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', (e) => e.preventDefault())
                links[i].addEventListener('mouseenter', mouseenterFunc)
            }
        })()
    },
    head() {
        return {
            title: 'Thank you',
            meta: []
        }
    }
}
</script>

<style scoped>
#navbar {
    max-height: 10vh;
    min-height: 10vh;

    /* font-size: 1.2em;
    letter-spacing: 0.5px;

    align-items: center;
    z-index: 1;
    mix-blend-mode: screen; */
}

#navbar ul {
    font-size: 1.2em;
    letter-spacing: 0.5px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;

    align-items: center;
    z-index: 1;
    mix-blend-mode: screen;
}

#navbar li:not(:last-child) {
    margin-right: 20px;
}

#navbar a {
    display: block;
    font-size: 20px;
    color: rgb(85, 84, 84);
    text-decoration: none;
    /* padding: 7px 15px; */
    padding: 0.7em 1.5em;
}

.target {
    position: absolute;
    border-bottom: 4px solid red;
    z-index: -1;
    transform: translateX(-60px);
}

#navbar a,
.target {
    transition: all 0.35s ease-in-out;
}

@media only screen and (max-width: 768px) {
    nav {
        font-size: 1em;
    }

    .nav-link {
        padding: 0.5em 1em;
    }
}
</style>
