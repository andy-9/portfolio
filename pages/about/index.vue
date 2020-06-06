<template>
    <div id="about-container">
        <div class="container-one">
            <div class="text-area-one">
                <h1 class="title">
                    The Short Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="container-two">
            <div class="text-area-two">
                <h1 class="title">
                    The Long Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="container-one">
            <div class="text-area-one">
                <h1 class="title">
                    The Short Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="container-two">
            <div class="text-area-two">
                <h1 class="title">
                    The Long Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="container-one">
            <div class="text-area-one">
                <h1 class="title">
                    The Short Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="container-two">
            <div class="text-area-two">
                <h1 class="title">
                    The Long Version
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>

        <div class="footer nav-fixed-bottom">
            <!-- Pen by:<br /> -->
            <!-- Justin Tan | UI/UX Designer | Front End Developer -->
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
/* //////////// Nr. 1 //////////// */

#about-container {
}

.container-one {
    margin-top: -4vh;
    /* background-color: #292f3b57; */
    background-color: #292f3b;
    /* min-height: 300px; */
    -webkit-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
    padding: 0 5em;
    /* padding: 80px 40px 0; */
}

.container-two {
    background-color: #efefef;
    /* min-height: 300px; */
    -webkit-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
    padding: 0 5em;
}

.text-area-one {
    color: white;
    padding: 5em 0;
    transform: skew(0deg, 6deg);
    -webkit-transform: skew(0deg, 6deg);
}

.text-area-one h1 {
    font-size: 3em;
    font-weight: 700;
}

.text-area-one p {
    color: white;
    /* font-weight: 350; */
}

.text-area-two {
    padding: 5em 0;
    transform: skew(0deg, 6deg);
    -webkit-transform: skew(0deg, 6deg);
}

.text-area-two .title {
    color: #333333;
    font-size: 3em;
    font-weight: 700;
}

.text-area-two .description {
    color: #333333;
    font-size: 1em;
    font-weight: 300;
}

.footer {
    padding: 140px 0 10px 0;
    color: #ffffff;
    background-color: #292f3b;
    margin-top: -70px;
}
</style>
