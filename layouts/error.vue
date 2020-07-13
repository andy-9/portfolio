<template>
    <div id="error-container">
        <div class="text-container">
            <p>
                {{
                    $t(
                        '...wir haben überall gesucht und sind sogar ins All geflogen'
                    )
                }}.
            </p>

            <p>{{ $t('Aber es bestätigt sich die traurige Wahrheit') }}:</p>

            <h1>
                {{ $t('Diese Seite existiert nicht') }}
            </h1>

            <nuxt-link class="backToHome" :to="localePath('index')">{{
                $t('ZURÜCK ZU HOME')
            }}</nuxt-link>
        </div>

        <div class="section-wrapper">
            <div class="waves-bottom">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        class="shape-fill"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        class="shape-fill"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.$t('Diese Seite existiert nicht'),
            meta: [
                {
                    name: 'viewport',
                    _content:
                        'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                    get content() {
                        return this._content
                    },
                    set content(value) {
                        this._content = value
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>
#error-container {
    flex-grow: 1;
    background-image: url(/images/error.png);
    background-repeat: no-repeat;
    background-size: contain;
}

.text-container {
    float: right;
    margin: 4em 12em 0 3em;
}

.text-container > p {
    font-size: 1.2em;
    margin-top: 1em;
}

.text-container h1 {
    margin: 1em 0 2em 0;
}

.backToHome {
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0.7em 2em;
    border: solid 1px rgb(85, 84, 84);
    border-radius: 2%;
    margin-left: 6em;
}

.backToHome:hover {
    color: white;
    background-color: rgb(85, 84, 84, 0.3);
    text-decoration: none;
    border: solid 1px white;
}

.waves-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.waves-bottom svg {
    position: relative;
    display: block;
    width: calc(105% + 1.3px);
    height: 123px;
}

.waves-bottom .shape-fill {
    fill: #ffd1d1;
}

@media only screen and (max-width: 768px) {
    .text-container {
        float: left;
        text-align: center;
        margin: 1em;
    }

    .text-container h1 {
        font-size: 3em;
        margin: 1em 0 1em 0;
    }

    .backToHome {
        margin-left: 0;
    }
}
</style>
