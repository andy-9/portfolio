<template>
    <div id="contact-container">
        <h1>Contact</h1>
        <div class="content">
            <div class="flex-column info-left">
                <p class="white">
                    If you want to get in touch I'll be happy to receive an
                    email or see you on my social media profiles.
                </p>
                <div>
                    <img
                        src="/images/email.png"
                        alt="Email-address Andreas Hechler"
                        class="style-mail"
                    />
                </div>

                <div class="flex-row order-logos">
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

            <p class="bottom">
                <nuxt-link
                    class="white"
                    :to="{ name: 'contact-credits' }"
                    title=""
                    >Credits</nuxt-link
                >
                &
                <nuxt-link
                    class="white"
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

body > * {
    flex-shrink: 0;
}
</style>

<style scoped>
#contact-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    /* flex-shrink: 0; */
}

.content {
    padding: 3%;
    background-image: url(/images/typewriter.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.info-left {
    width: 25%;
    /* height: 20%; */
    justify-content: flex-start;
    flex: 1 0 auto;
}

img.style-mail {
    width: 60%;
    margin: 15% 0;
    filter: invert();
}

/* img.style-mail:hover {
    width: 60%;
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(190deg)
        brightness(110%) contrast(100%);
} */

.social-media-logo {
    height: 30px;
    width: 30px;
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(190deg)
        brightness(110%) contrast(100%);
}

.order-logos {
    justify-content: space-between;
}

.social-media-logo:hover {
    filter: invert();
    /* opacity: 0.3; */
    /* filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)
        brightness(104%) contrast(97%); */
}

.bottom {
    /* bottom: 0; */
    flex-shrink: 0;
}
</style>
