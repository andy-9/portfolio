<template>
    <div class="">
        <h1>TEST</h1>

        <p></p>
        <div>
            <h2>Test 1: data & methods in script</h2>
            <div>
                <p>main text</p>
                <p>paragraph main text</p>
                <button @click="toggle">
                    Show more
                </button>
            </div>
            <div>
                <p v-if="moreinfo">
                    text text text
                </p>
            </div>

            <h2>Test 2: method in clickevent itself, data in script</h2>
            <div>
                <div @click="seemore = !seemore">
                    <p>more info</p>
                </div>
                <div v-if="seemore">
                    <p>important explanation</p>
                </div>
            </div>

            <h2>Test 3: change button text dynamically</h2>
            <div>
                <p>main text</p>
                <p>paragraph main text</p>
                <button @click="toggleSeen">
                    {{ button.text }}
                </button>
            </div>
            <div>
                <p v-if="seen">text text text</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moreinfo: false,
            seemore: false,
            seen: false,
            button: {
                text: 'More info'
            }
        }
    },
    methods: {
        toggle() {
            this.moreinfo = !this.moreinfo
        },
        toggleSeen() {
            this.seen = !this.seen
            this.button.text = this.seen ? 'Show less' : 'More info'
        }
    },
    head() {
        return {
            title: 'Coaching - Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped></style>
