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
            </ul>
            <span class="target"></span>

            <span class="language-switcher">
                <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    class="nav-link"
                    :to="switchLocalePath(locale.code)"
                    :title="$t('Switch to English')"
                    >{{ locale.abbr }}</nuxt-link
                >
            </span>
        </nav>
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
            const links = document.querySelectorAll('#navbar ul a')
            const target = document.querySelector('.target')

            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', (e) => e.preventDefault())
                links[i].addEventListener('click', mouseclickFunc)
                links[i].addEventListener('mouseenter', mouseenterFunc)
                links[i].addEventListener('mouseleave', mouseleaveFunc)
            }

            function mouseclickFunc() {
                if (!this.parentNode.classList.contains('active')) {
                    for (let i = 0; i < links.length; i++) {
                        if (links[i].parentNode.classList.contains('active')) {
                            links[i].parentNode.classList.remove('active')
                        }
                        links[i].style.opacity = '0.5'
                    }

                    this.parentNode.classList.add('active')
                    this.style.opacity = '1'

                    const width = this.getBoundingClientRect().width
                    const height = this.getBoundingClientRect().height
                    const left =
                        this.getBoundingClientRect().left + window.pageXOffset
                    const top =
                        this.getBoundingClientRect().top + window.pageYOffset

                    target.style.width = `${width}px`
                    target.style.height = `${height}px`
                    target.style.left = `${left}px`
                    target.style.top = `${top}px`
                    target.style.transform = 'none'
                }
            }

            function mouseenterFunc() {
                this.style.opacity = '1'
            }

            function mouseleaveFunc() {
                this.style.opacity = '0.5'

                for (let i = 0; i < links.length; i++) {
                    if (links[i].parentNode.classList.contains('active')) {
                        links[i].style.opacity = '1'
                    }
                }
            }

            function resizeFunc() {
                const active = document.querySelector('#navbar li.active')

                if (active) {
                    const left =
                        active.getBoundingClientRect().left + window.pageXOffset
                    const top =
                        active.getBoundingClientRect().top + window.pageYOffset

                    target.style.left = `${left}px`
                    target.style.top = `${top}px`
                }
            }

            window.addEventListener('resize', resizeFunc)
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

    z-index: 1;
    mix-blend-mode: screen;
}

#navbar ul {
    font-size: 1.2em;
    letter-spacing: 0.5px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin-right: 4em;

    align-items: center;
    z-index: 1;
    mix-blend-mode: screen;
}

#navbar ul li {
    mix-blend-mode: screen;
}

#navbar a {
    display: block;
    color: rgb(85, 84, 84);
    text-decoration: none;
    padding: 0.7em 1.5em;
}

.target {
    position: absolute;
    border-bottom: 4px solid rgb(94, 44, 44);
    z-index: -1;
    transform: translateX(-60px);
}

#navbar a,
.target {
    transition: all 0.35s ease-in-out;
}

.language-switcher {
    position: absolute;
    top: 0vh;
    right: 0.3em;
    font-size: 1.2em;
    opacity: 0.5;
}

.language-switcher:hover {
    opacity: 1;
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
