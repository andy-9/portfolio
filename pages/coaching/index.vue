<template>
    <!-- <div id="coaching-container"> -->
    <div class="gradient"></div>
    <!-- </div> -->
</template>

<script>
export default {
    head() {
        return {
            title: 'Coaching - Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
.gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        /* #ff0000, */ /* #ee7752, */ #e73c7e,
        #23a6d5 /* #23d5ab */
    );
    background-size: 300% 300%;
    animation: gradient 1s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
