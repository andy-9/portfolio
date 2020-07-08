<template>
    <div id="contact-container">
        <h1>{{ $t('Kontakt') }}</h1>

        <div class="content">
            <div class="flex-column info-left">
                <p class="white">
                    {{
                        $t(
                            'Ich freue mich über eine E-Mail oder eine anderweitige Kontaktaufnahme über meine Social Media Profile.'
                        )
                    }}
                </p>
                <div>
                    <img
                        src="/images/email.png"
                        :alt="$t('E-Mail-Addresse Andreas Hechler')"
                        class="style-mail"
                    />
                </div>

                <div class="flex-row order-logos">
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
                        href="https://dissens.academia.edu/AndreasHechler"
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

            <p class="bottom white">
                <nuxt-link
                    class="white"
                    :to="localePath('contact-credits')"
                    :title="$t('Dank und Anerkennung')"
                    >{{ $t('Dank') }}</nuxt-link
                >
                &amp;
                <nuxt-link
                    class="white"
                    :to="localePath('contact-imprint')"
                    :title="$t('Impressum')"
                    >{{ $t('Impressum') }}</nuxt-link
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.$t('Kontakt zu Andreas Hechler'),
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
body > * {
    flex-shrink: 0;
}

#contact-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

h1 {
    margin: 1% 0 2% 3%;
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
    width: 300px;
    justify-content: flex-start;
    flex: 1 0 auto;
}

img.style-mail {
    width: 222px;
    margin: 15% 0;
    filter: invert();
}

.social-media-logo {
    height: 30px;
    width: 30px;
    filter: invert();
}

.order-logos {
    justify-content: space-between;
}

.social-media-logo:hover {
    opacity: 0.5;
}

.bottom {
    flex-shrink: 0;
}
</style>
