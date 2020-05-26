<template>
    <div class="">
        <h1>Contact</h1>
        <h2>Contact form</h2>

        <!-- <nuxt-child /> -->

        <p>
            <nuxt-link class="" :to="{ name: 'contact-credits' }" title=""
                >Credits</nuxt-link
            >
        </p>

        <p>
            <nuxt-link
                class=""
                :to="{ name: 'contact-imprint' }"
                title="legal notice"
                >Imprint</nuxt-link
            >
        </p>

        <div class="container">
            <h1 class="title">
                Contact
            </h1>
            <div class="content">
                <form
                    name="contact"
                    heroku-honeypot="bot-field"
                    action="/thanks"
                    method="post"
                    heroku
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <p class="hidden">
                        <label
                            >Don’t fill this out: <input name="bot-field"
                        /></label>
                    </p>

                    <label class="form-label" for="name">
                        Name:
                    </label>
                    <input id="name" class="form-field" name="name" />

                    <label class="form-label" for="email">
                        Email:
                    </label>
                    <input id="email" class="form-field" name="email" />

                    <label class="form-label" for="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        class="form-field"
                        name="message"
                    ></textarea>

                    <input
                        class="form-button"
                        type="submit"
                        value="Send message"
                    />
                </form>
            </div>

            <div class="social-media">
                <a href="https://github.com/andy-9" target="_blank">
                    <img
                        src="/icons/round-github.svg"
                        alt="github logo"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/andreas-hechler-810172192"
                    target="_blank"
                >
                    <img
                        src="/icons/round-linkedin.svg"
                        alt="linkedin-logo"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://www.xing.com/profile/Andreas_Hechler10"
                    target="_blank"
                >
                    <img
                        src="/icons/round-xing.svg"
                        alt="xing-logo"
                        class="social-media-logo"
                    />
                </a>

                <a
                    href="https://dissens.academia.edu/AndreasHechler"
                    target="_blank"
                >
                    <img
                        src="/icons/academia.svg"
                        alt="academia-logo"
                        class="social-media-logo"
                /></a>

                <a
                    href="https://www.researchgate.net/profile/Andreas_Hechler"
                    target="_blank"
                >
                    <img
                        src="/icons/round-researchgate.svg"
                        alt="researchgate-logo"
                        class="social-media-logo"
                    />
                </a>

                <a href="https://twitter.com/HechlerAndreas" target="_blank">
                    <img
                        src="/icons/round-twitter.svg"
                        alt="twitter-logo"
                        class="social-media-logo"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Contact Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
.hidden {
    display: none;
}

.social-media-logo {
    height: 30px;
    width: 30px;
}
</style>
