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
</style>
