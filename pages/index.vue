<template>
    <div class="container">
        <div>
            <!-- <logo /> -->
            <h1 class="title">
                Andreas Hechler
            </h1>
            <h2 class="subtitle">
                Software | Agility | Coaching | Antidiscrimination
            </h2>

            <img src="/images/ah.jpg" alt="Andreas Hechler" />

            <div>
                <div id="copyright">© Andreas Hechler 2020</div>

                <div class="social-media">
                    <a href="https://github.com/andy-9" target="_blank">
                        <img
                            src="/icons/logo-github.svg"
                            alt="github logo"
                            class="social-media-logo"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/andreas-hechler-810172192"
                        target="_blank"
                    >
                        <img
                            src="/icons/logo-linkedin.svg"
                            alt="linkedin-logo"
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
                            class="social-media-logo"
                        />
                    </a>

                    <a
                        href="https://twitter.com/HechlerAndreas"
                        target="_blank"
                    >
                        <img
                            src="/icons/logo-twitter.svg"
                            alt="twitter-logo"
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
                            class="social-media-logo"
                    /></a>

                    <a
                        href="https://www.researchgate.net/profile/Andreas_Hechler"
                        target="_blank"
                    >
                        <img
                            src="/icons/researchgate-icon.svg"
                            alt="researchgate-logo"
                            class="social-media-logo"
                        />
                    </a>
                </div>
            </div>

            <!-- <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    class="button--green"
                >
                    Documentation
                </a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                >
                    GitHub
                </a>
            </div> -->
        </div>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
    //     components: {
    //         Logo
    //     }
    // }
    head() {
        return {
            title: 'Andreas Hechler Portfolio',
            meta: []
        }
    }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.social-media {
    /* height: 100px; */
    /* width: 100px; */
    /* display: flex; */
}

.sm-container {
    /* height: 100px; */
    /* width: 100px; */
}

.social-media-logo {
    height: 30px;
    width: 30px;
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
