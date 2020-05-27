<template>
    <div id="contact-container">
        <h1>Contact</h1>
        <div class="content">
            <form
                name="contact"
                heroku-honeypot="bot-field"
                action="/contact/thanks"
                method="post"
                heroku
            >
                <input type="hidden" name="form-name" value="contact" />

                <p class="hidden">
                    <label
                        >Don’t fill this out: <input name="bot-field"
                    /></label>
                </p>

                <div>
                    <label class="form-label" for="name">
                        Name:
                    </label>
                    <img
                        src="/icons/person-circle-outline.svg"
                        alt="icon for person"
                        class="social-media-logo"
                    />
                    <input id="name" class="form-field" name="name" />
                </div>

                <div>
                    <label class="form-label" for="email">
                        Email:
                    </label>
                    <img
                        src="/icons/at-outline.svg"
                        alt="@-icon for email"
                        class="social-media-logo"
                    />
                    <input id="email" class="form-field" name="email" />
                </div>

                <div>
                    <label class="form-label" for="message">
                        Message:
                    </label>
                    <img
                        src="/icons/pencil-outline.svg"
                        alt="pen for textfield"
                        class="social-media-logo"
                    />
                    <textarea
                        id="message"
                        class="form-field"
                        name="message"
                    ></textarea>
                </div>

                <input class="form-button" type="submit" value="Send message" />
            </form>

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
.content {
    height: 100vh;
    background-image: url(/images/typewriter.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.hidden {
    display: none;
}

.social-media-logo {
    height: 30px;
    width: 30px;
    color: black;
}

.social-media-logo:hover {
    opacity: 0.5;
}
</style>
