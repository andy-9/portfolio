<template>
    <div class="">
        <h1>Software</h1>

        <!-- ///////////////////// BIGGER PROJECTS ///////////////////// -->

        <h2 id="bigger-projects">Bigger projects</h2>

        <div>
            <h3><p>Social Network</p></h3>
            <img
                src="/images/kite.png"
                alt="Screenshot of social Network Kite.Inc displaying some search results"
            />
            <a href="https://kite-inc.herokuapp.com/" target="_blank"
                >Kite.Inc</a
            >
        </div>

        <div>
            <h3><p>Imageboard</p></h3>
            <img src="/images/imageboard.png" alt="" />
            <a href="http://graf-streetart.herokuapp.com/" target="_blank"
                >Graffiti & Street Art</a
            >
        </div>

        <div>
            <h3><p>Petition</p></h3>
            <img src="/images/algobias.png" alt="" />
            <a href="https://algobias.herokuapp.com/" target="_blank"
                >Petition against algorithmic bias
            </a>
        </div>

        <!-- ///////////////////// SMALLER PROJECTS ///////////////////// -->
        <h2 id="smaller-projects">Smaller projects</h2>

        <div>
            <h3>
                <img src="/images/kaleidoscope.png" alt="" />

                <a href="http://kaleidoscop.herokuapp.com/" target="_blank"
                    >Kaleidoscope</a
                >
            </h3>
            <p>Express handlebars</p>
        </div>

        <div>
            <h3>
                <img src="/images/spotify.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/spotify_search/"
                    target="_blank"
                    >Spotify Search</a
                >
            </h3>
            <p>
                Still not having a Spotify account myself, nonetheless I
                programmed a user interface to search via an API the spotify
                database. When you search for an artist or album the first 20
                search items are displayed with an image of the album and the
                name of the artist. If you've reached the bottom, you can click
                'More' to load the next 20 items. I also added infinite scroll.
                I used jQuery, clickhandlers, several ajax 'GET'-requests, CSS
                flexbox and all kinds of animations with pseudo-selectors - fun!
                I found it quite difficult to figure out the order when to call
                which function and that they don't interfere with each other. In
                the end I managed and if you click on the link below you have an
                unlimited supply of search results - hopefully YOU have a
                spotify account...
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/panes.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                    target="_blank"
                    >Resizable Panes</a
                >
            </h3>
            <p>
                2 images blending into each other, usually used for
                before-after-images. I used it to commemorate my
                great-grandmother Emilie Rau. If you click on the white slider
                in the middle and slide it to the left you will see more of the
                image on the right-hand side and vice versa. Programming-wise I
                used mousedown, mousemove and mouseup events and offset().left
                became a good friend. It was difficult to end the sliding within
                the boundaries of the pane.
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/connect4.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/connect4/"
                    target="_blank"
                    >Connect 4</a
                >
            </h3>
            <p>
                I loved playing Connect 4 as a child - and I still do today! I
                never thought I would build one as a computer game. The hardest
                part was figuring out and programming the diagonal victories.
                You can either pick dark-red or pink to play. Every move is
                accompanied by a sound. When one color wins, the whole board
                expands and the winning color fills the screen. This animation I
                did with jQuery. Additionally, there is a winning-message
                blinking - I programmed this in CSS with animations and
                keyframes. The 'Play again' button restarts a new game - you
                should give it a shot!
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/carousel.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                    target="_blank"
                    >Kitty Carousel</a
                >
            </h3>
            <p>
                4 kitty-images move from right to left in an endless loop, one
                image per second. You can also pick a specific image by clicking
                on the corresponding white dot. Timing and space was important
                to program the carousel, including the addition and removal of
                querySelectors, eventListeners and clickHandlers. It was also
                the first time I worked with CSS-transitions. It's cute, ain't
                it? Click on the link below to watch the kitties carouseling...
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/spiced.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                    target="_blank"
                    >Spiced Homepage</a
                >
            </h3>
            <p>
                An exercise in building a homepage for Spiced with HTML, CSS and
                JavaScript/jQuery without flexbox or grid - quite challenging! I
                worked on it several times, adding a pop-up modal and a menu
                that slides in from the right. It is also designed for a smaller
                screen with @media screen. I used animations, click handlers and
                (dis)played (with) in/visibility.
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/localstorage.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/local_storage/"
                    target="_blank"
                    >Local Storage</a
                >
            </h3>
            <p>
                Working with local storage was fun. If you write something in
                the text field and click the button 'Keep it a secret!' the text
                disappears and the button cannot be clicked again (to keep what
                was saved to local storage). The button left to this ('Tell me
                the secret!') reveals what was saved, even after the browser was
                closed. The last button ('I don't trust you anymore - forget my
                secret!') clears the local storage and the console. I worked
                with jQuery using click handlers and try-catch error-handling.
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/JSON.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                    target="_blank"
                    >JSON-validator</a
                >
            </h3>
            <p>
                This simple validation test tells you if you have JSON or not.
                Simply copy-paste in the textfield and hit the 'Validate JSON'
                button. If you have JSON, the border of the textfield turns into
                green and a 'Valid JSON!' text blinks at the bottom of the
                textfield. If you don't have valid JSON, the border turns red
                and it will let you know that you do not have valid JSON. 'Clear
                textarea' to test some more... Done with jQuery with the
                parse()-method and flexbox and keyframes in CSS.
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/ticker.png" alt="" />

                <a
                    href="http://kaleidoscop.herokuapp.com/ticker/"
                    target="_blank"
                    >Ticker</a
                >
            </h3>
            <p>
                Tickers are a bit outdated, but a good programming exercise.
                Mine runs from right to left, and if you mouseover on one of the
                titles the ticker stops running, the hyperlink becomes blue and
                underlined and if clicked the desired information opens in a new
                tab. The programming is in vanilla JavaScript with event
                listeners, mouseovers, mouseouts, offsetWidth and
                AnimationFrames among other things. If you wanna deep dive into
                my ticker you get to read all my texts that got translated into
                English... In a later exercise we added a backend and fetched
                live data from existing twitter-accounts through the twitter-API
                using tokens.
            </p>
        </div>

        <div>
            <h3>
                <img src="/images/incremental_search.png" alt="" />
                <a
                    href="http://kaleidoscop.herokuapp.com/incremental_search/"
                    target="_blank"
                    >Incremental Search</a
                >
            </h3>
            <p>
                I have used incremental searches many times in my life and did
                not even know this term until I had to build one... I never
                thought about all the different steps that need to be
                programmed. I learned how to work with mouseovers, mousedowns
                and key-commands and how to highlight my search result, all
                programmed with jQuery. I also used focus and blur when a user's
                attention blurs (pun intended 😉) and after all it was my first
                ajax 'GET'-request to search from an API serving over 200
                countries.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Software - Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped></style>
