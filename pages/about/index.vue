<template>
    <div id="about-container">
        <div class="panel-1">
            <div class="container">
                <div class="content">
                    <div class="text-area text-center">
                        <h1 class="title">
                            The Short Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-2">
            <div class="container">
                <div class="content">
                    <div class="text-area-2 text-center">
                        <h1 class="title">
                            The Long Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-1">
            <div class="container">
                <div class="content">
                    <div class="text-area text-center">
                        <h1 class="title">
                            The Short Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-2">
            <div class="container">
                <div class="content">
                    <div class="text-area-2 text-center">
                        <h1 class="title">
                            The Long Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-1">
            <div class="container">
                <div class="content">
                    <div class="text-area text-center">
                        <h1 class="title">
                            The Short Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-2">
            <div class="container">
                <div class="content">
                    <div class="text-area-2 text-center">
                        <h1 class="title">
                            The Long Version
                        </h1>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer nav-fixed-bottom text-center">
            Pen by:<br />
            Justin Tan | UI/UX Designer | Front End Developer
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

.panel-1 {
    background-color: #292f3b;
    min-height: 300px;
    -webkit-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
    margin-top: -112px;
    padding: 80px 40px 0;
}

.panel-2 {
    background-color: #efefef;
    min-height: 300px;
    -webkit-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
    padding: 40px 40px 0;
}

.content {
    -webkit-transform: skew(0deg, 6deg);
    transform: skew(0deg, 6deg);
}

.text-area {
    padding: 90px 0;
}

.text-area .title {
    color: #ffffff;
    font-weight: 700;
    font-size: 50px;
}

.text-area .description {
    color: #ffffff;
    font-weight: 300;
    font-size: 16px;
}

.text-area-2 {
    padding: 90px 0;
}

.text-area-2 .title {
    color: #333333;
    font-weight: 700;
    font-size: 50px;
}

.text-area-2 .description {
    color: #333333;
    font-weight: 300;
    font-size: 16px;
}

.footer {
    padding: 140px 0 10px 0;
    color: #ffffff;
    background-color: #292f3b;
    margin-top: -70px;
}
</style>
