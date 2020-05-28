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
                Software | Agility | Coaching | Antidiscrimination
            </h2>

            <div id="short-bio">
                <p>
                    I'm a full stack web developer based in Berlin. I'm
                    interested in agility in general and Scrum in particular.‎
                </p>
                <p>
                    My background is in adult education, as a trainer, coach,
                    and I have even conducted evaluations. I am ‎also a
                    published author and as such am invited to give interviews
                    and lectures on my topics of expertise.‎
                </p>
                <p>
                    Over the past decades, antidiscrimination and the challenge
                    to create a society where people can be ‎different without
                    fear has been the focus of my work.‎
                </p>
                <p>
                    I am fascinated by what language can do - changing people's
                    thoughts with words or the DOM with ‎code is the topic that
                    keeps me busy now.‎
                </p>
            </div>

            <div id="social-media">
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

                <a href="https://twitter.com/HechlerAndreas" target="_blank">
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
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
    //     components: {
    //         Logo
    //     }
    // }
    // let hash = location.hash,
    // let currentElem = document.querySelector(hash),
    // function scrollToPlaces(elem) {
    //     window.scrollTo({
    //         'behavior': 'smooth',
    //         'left': 0,
    //         'top': elem.offsetTop
    //     });
    // }
    // if (currentElem) {
    //     scrollToPlaces(currentElem)
    // },
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
    grid-template-columns: 50% 50%;
}

@media only screen and (max-width: 600px) {
    .home-container {
        height: initial;
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
    /* max-height: 100%; */
    /* width: auto; */
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
    /* position: absolute; */
    padding-bottom: 15px;
}

#short-bio > p {
    margin: 2% 0;
}

#social-media {
    width: 50%;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}

.social-media-logo {
    height: 30px;
    width: 30px;
}

.social-media-logo:hover {
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
