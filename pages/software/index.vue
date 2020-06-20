<template>
    <div id="software-container">
        <h1>Software</h1>

        <p class="software-explanation">
            The following displays software projects I have built when being
            trained to become a full stack web developer.<br />On top are the
            bigger projects followed by medium-sized and smaller projects.
        </p>

        <!-- ///////////////////// BIGGER PROJECTS ///////////////////// -->

        <div class="grid-container">
            <!-- //////////// Social Network //////////// -->
            <div class="small-project-container">
                <a
                    href="https://kite-inc.herokuapp.com/"
                    target="_blank"
                    title="Visit my Social Network"
                    ><h2 id="socialnetwork">Social Network</h2></a
                >

                <div class="image-container">
                    <a href="https://kite-inc.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/kite.png"
                            alt="screenshot of social Network Kite.Inc displaying some search results"
                            title="Visit my Social Network"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            alt="icon for information"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Facebook-inspired</strong>
                            single-page-application (SPA)
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            alt="icon for code"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Tech stack:</strong> React & Redux, Express,
                            Node, PostgreSQL, Socket.io, Amazon S3 and SES, CSS,
                            HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> a personal profile with
                            bio and image upload, sending, receiving and
                            accepting friend requests, unfriend, having
                            conversations in a chat room, display of last 3
                            registered users, searching for users by first and
                            last name, showing friends of friends, logout
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                Users can join a social network, in this case
                                focusing on inclusive kitesurfing communities.
                            </p>
                            <p>
                                A high priority is on conditional rendering,
                                security issues (password hashing, protection
                                against SQL-injection, CSRF- and XSS-attacks,
                                reset code by mail) and a differentiated error
                                handling (different error messages get
                                displayed, e.g. if the email is not in the
                                database, the retyped password does not match
                                the first or password or the input fields are
                                left empty) in the register, login, and reset
                                password components.
                            </p>
                        </details>
                    </div>
                    <!-- <button @click="toggleSocialNetwork">
                    {{ button.text }}
                </button>
                <div v-if="infoSocialNetwork">
                </div> -->
                </div>
            </div>

            <!-- //////////// Petition //////////// -->
            <div class="small-project-container">
                <a
                    href="https://algobias.herokuapp.com/"
                    target="_blank"
                    title="Visit my online petition"
                    ><h2 id="petition">Petition</h2></a
                >

                <div class="image-container">
                    <a href="https://algobias.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/algobias.png"
                            alt="screenshot of petition against algorithmic bias displaying the register site"
                            title="Visit my online petition"
                    /></a>
                </div>

                <div class="text-container flex-column">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            alt="icon for information"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Online-Petition</strong> against algorithmic
                            bias
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            alt="icon for code"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Tech stack:</strong> Express handlebars,
                            Node, PostgreSQL, jQuery, CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> supporters can register,
                            login, update their profile information, sign,
                            unsign, view fellow signees sorted by location,
                            logout
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                This petition advocates for signing the
                                Algo.Rules and against algorithmic bias.
                                Depending on whether users register and sign,
                                they get served different sites. If they sign,
                                other signees, their homepages, age and city are
                                displayed.
                            </p>
                            <p>
                                I learned about dataflow, working with
                                session-cookies, get- and post-routes and how to
                                test them with supertest. I was also working
                                with promises, password hashing and inserts,
                                updates, upserts and deletes in the database.
                                Getting the signature on a canvas and
                                conditionally editing the profile I found
                                particularly challenging.
                            </p>
                            <p>
                                The site has a differentiated error-handling and
                                is protected against SQL-injection,
                                clickjacking, XSS- and CSRF-attacks.
                            </p>
                        </details>
                    </div>
                    <!-- <button @click="togglePetition">
                    {{ button.text }}
                </button>
                <div v-if="infoPetition">
                </div> -->
                </div>
            </div>
        </div>

        <span>
            <nuxt-link
                :to="localePath('software')"
                class="jump-to-top"
                title="Scroll to top"
                @click.native="scrollToTop"
            >
                <img
                    src="/icons/chevron-up.svg"
                    alt="up-arrow to jump to the top of the page"
                    class="up-arrow"
            /></nuxt-link>
        </span>

        <div class="grid-container">
            <!-- //////////// Imageboard //////////// -->

            <div class="small-project-container">
                <a
                    href="http://graf-streetart.herokuapp.com/"
                    target="_blank"
                    title="Visit my imageboard"
                    ><h2 id="imageboard">Imageboard</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://graf-streetart.herokuapp.com/"
                        target="_blank"
                        ><img
                            src="/images/imageboard.png"
                            alt="screenshot of imageboard graffiti and street art displaying landing page"
                            title="Visit my imageboard"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            alt="icon for information"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Instagram-inspired</strong>
                            single-page-application (SPA)
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            alt="icon for code"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Tech stack:</strong> Vue, Express, Node,
                            PostgreSQL, Amazon S3, Jest, CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> upload of images with
                            title, description and user-name, each image can be
                            clicked and displayed in large with more info and
                            the possibility to comment and also delete the
                            image, more images can be loaded
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                Anyone can upload images of their choosing; the
                                theme of this imageboard is graffiti and street
                                art.
                            </p>
                            <p>
                                I learned about Vue.js and working with state,
                                un/mounting, dynamic routing, click handlers,
                                event-emitters and watchers. The imageboard is
                                protected against SQL-injection, clickjacking,
                                XSS- and CSRF-attacks.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleImageboard">
                    {{ button.text }}
                </button>
                <div v-if="infoImageboard">
                </div> -->
            </div>

            <!-- //////////// Kaleidoscope //////////// -->

            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/"
                    target="_blank"
                    title="Visit my online Kaleidoscope displaying all my medium-sized and smaller projects"
                    ><h2 id="kaleidoscope">Kaleidoscope</h2></a
                >

                <div class="image-container">
                    <a href="http://kaleidoscop.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/kaleidoscope.png"
                            alt="screenshot of Kaleidoscope displaying the landing page with all the projects"
                            title="Visit my online Kaleidoscope displaying all my medium-sized and smaller projects"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            alt="icon for information"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>My smaller</strong>
                            and medium-sized projects
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            alt="icon for code"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Tech stack:</strong> Express handlebars,
                            CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Display of all projects,
                            description-site for each project
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ///////////////////// SMALLER PROJECTS ///////////////////// -->

        <div class="grid-container">
            <!-- //////////// Resizable Panes //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                    target="_blank"
                    title="Visit my resizable panes project"
                    ><h2 id="panes">Resizable Panes</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                        target="_blank"
                        title="Visit my resizable panes project"
                        ><img
                            src="/images/panes.png"
                            alt="screenshot of resizable panes"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Resize pane with slider,
                            display one image or the other
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                2 images blending into each other, usually used
                                for before-after-images. I used it to
                                commemorate my great-grandmother Emilie Rau. If
                                you click on the white slider in the middle and
                                slide it to the left you will see more of the
                                image on the right-hand side and vice versa.
                                Programming-wise I used mousedown, mousemove and
                                mouseup events and offset().left became a good
                                friend. It was difficult to end the sliding
                                within the boundaries of the pane.
                            </p>
                        </details>
                    </div>
                    <!-- <button @click="togglePanes">
                {{ button.text }}
            </button>
            <div v-if="infoPanes">
            </div> -->
                </div>
            </div>

            <!-- //////////// Spotify Search //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/spotify_search/"
                    target="_blank"
                    title="Visit my Spotify search"
                    ><h2 id="spotify">Spotify Search</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spotify_search/"
                        target="_blank"
                        ><img
                            src="/images/spotify.png"
                            alt="screenshot of spotify search, displaying search results for 'monae'"
                            title="Visit my Spotify search"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Search Spotify database
                            through API, display album/artist with hyperlinked
                            cover and name, load more through button click or
                            infinite scroll
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div class="make-details-visible">
                        <details>
                            <summary>More info</summary>
                            <p>
                                Still not having a Spotify account myself,
                                nonetheless I programmed a user interface to
                                search via an API the spotify database. When you
                                search for an artist or album the first 20
                                search items are displayed with an image of the
                                album and the name of the artist. If you've
                                reached the bottom, you can click 'More' to load
                                the next 20 items. I also added infinite scroll.
                                I used jQuery, clickhandlers, several ajax
                                'GET'-requests, CSS flexbox and all kinds of
                                animations with pseudo-selectors - fun! I found
                                it quite difficult to figure out the order when
                                to call which function and that they don't
                                interfere with each other. In the end I managed
                                and if you click on the link below you have an
                                unlimited supply of search results - hopefully
                                YOU have a spotify account...
                            </p>
                        </details>
                    </div>
                    <!-- <button @click="toggleSpotify">
                    {{ button.text }}
                </button>
                <div v-if="infoSpotify">
                </div> -->
                </div>
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Kitty Carousel //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                    target="_blank"
                    title="Visit my kitty carousel project"
                    ><h2 id="carousel">Kitty Carousel</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                        target="_blank"
                        title="Visit my kitty carousel project"
                        ><img
                            src="/images/carousel.png"
                            alt="screenshot of kitty carousel displaying one kitty sliding to the left and one another coming in from the right"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Watch kitties
                            carouseling, pick a specific image to be displayed
                            again
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <details>
                        <summary>More info</summary>
                        <p>
                            4 kitty-images move from right to left in an endless
                            loop, one image per second. You can also pick a
                            specific image by clicking on the corresponding
                            white dot. Timing and space was important to program
                            the carousel, including the addition and removal of
                            querySelectors, eventListeners and clickHandlers. It
                            was also the first time I worked with
                            CSS-transitions. It's cute, ain't it? Click on the
                            link to watch the kitties carouseling...
                        </p>
                    </details>
                </div>
            </div>
            <!-- <button @click="toggleCarousel">
                {{ button.text }}
            </button>
            <div v-if="infoCarousel">
            </div> -->

            <!-- //////////// Ticker //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/ticker/"
                    target="_blank"
                    title="Visit my ticker project"
                    ><h2 id="ticker">Ticker</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/ticker/"
                        target="_blank"
                        ><img
                            src="/images/ticker.png"
                            alt="screenshot of ticker running"
                            title="Visit my ticker project"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Get the latest news
                            displayed, click if you are interested
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                Tickers are a bit outdated, but a good
                                programming exercise. Mine runs from right to
                                left, and if you mouseover on one of the titles
                                the ticker stops running, the hyperlink becomes
                                blue and underlined and if clicked the desired
                                information opens in a new tab. The programming
                                is in vanilla JavaScript with event listeners,
                                mouseovers, mouseouts, offsetWidth and
                                AnimationFrames among other things. If you wanna
                                deep dive into my ticker you get to read all my
                                texts that got translated into English... In a
                                later exercise we added a backend and fetched
                                live data from existing twitter-accounts through
                                the twitter-API using tokens.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleTicker">
                {{ button.text }}
            </button>
            <div v-if="infoTicker">
            </div> -->
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Local Storage //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/local_storage/"
                    target="_blank"
                    title="Visit my local storage project"
                    ><h2 id="localstorage">Local Storage</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/local_storage/"
                        target="_blank"
                        ><img
                            src="/images/localstorage.png"
                            alt="screenshot of local storage project"
                            title="Visit my local storage project"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Write a message and save
                            it in local storage, display and/or delete message
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                Working with local storage was fun. If you write
                                something in the text field and click the button
                                'Keep it a secret!' the text disappears and the
                                button cannot be clicked again (to keep what was
                                saved to local storage). The button left to this
                                ('Tell me the secret!') reveals what was saved,
                                even after the browser was closed. The last
                                button ('I don't trust you anymore - forget my
                                secret!') clears the local storage and the
                                console. I worked with jQuery using click
                                handlers and try-catch error-handling.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleStorage">
                {{ button.text }}
            </button>
            <div v-if="infoStorage">
            </div> -->
            </div>

            <!-- //////////// JSON-validator //////////// -->

            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                    target="_blank"
                    title="Visit my JSON-validator"
                    ><h2 id="validator">JSON-validator</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                        target="_blank"
                        ><img
                            src="/images/JSON.png"
                            alt="screenshot of JSON-validator displaying vald JSON in green"
                            title="Visit my JSON-validator"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Test if data is JSON or
                            not
                        </p>
                    </div>

                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                This simple validation test tells you if you
                                have JSON or not. Simply copy-paste in the
                                textfield and hit the 'Validate JSON' button. If
                                you have JSON, the border of the textfield turns
                                into green and a 'Valid JSON!' text blinks at
                                the bottom of the textfield. If you don't have
                                valid JSON, the border turns red and it will let
                                you know that you do not have valid JSON. 'Clear
                                textarea' to test some more... Done with jQuery
                                with the parse()-method and flexbox and
                                keyframes in CSS.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleJSON">
                {{ button.text }}
            </button>
            <div v-if="infoJSON">
            </div> -->
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Connect 4 //////////// -->
            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/connect4/"
                    target="_blank"
                    title="Visit my Connect 4 project"
                    ><h2 id="connectfour">Connect 4</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/connect4/"
                        target="_blank"
                        ><img
                            src="/images/connect4.png"
                            alt="screenshot of connect four, both colors in the game"
                            title="Visit my Connect 4 project"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> 2 players can play
                            against each other, horizontal, vertical or diagonal
                            victories, animation when one player wins, winning
                            color gets displayed, play again
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                I loved playing Connect 4 as a child - and I
                                still do today! I never thought I would build
                                one as a computer game. The hardest part was
                                figuring out and programming the diagonal
                                victories. You can either pick dark-red or pink
                                to play. Every move is accompanied by a sound.
                                When one color wins, the whole board expands and
                                the winning color fills the screen. This
                                animation I did with jQuery. Additionally, there
                                is a winning-message blinking - I programmed
                                this in CSS with animations and keyframes. The
                                'Play again' button restarts a new game - you
                                should give it a shot!
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleConnect">
                {{ button.text }}
            </button>
            <div v-if="infoConnect">
            </div> -->
            </div>

            <!-- //////////// Spiced Homepage //////////// -->

            <div class="small-project-container">
                <a
                    href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                    target="_blank"
                    title="Visit my Spiced homepage project"
                    ><h2 id="spicedhomepage">Spiced Homepage</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                        target="_blank"
                        ><img
                            src="/images/spiced.png"
                            alt="screenshot of spiced homepage"
                            title="Visit my Spiced homepage project"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Pop-up modal, hamburger
                            menu with navigation sliding in from the right, also
                            suited for smaller screens
                        </p>
                    </div>
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                An exercise in building a homepage for Spiced
                                with HTML, CSS and JavaScript/jQuery without
                                flexbox or grid - quite challenging! I worked on
                                it several times, adding a pop-up modal and a
                                menu that slides in from the right. It is also
                                designed for a smaller screen with @media
                                screen. I used animations, click handlers and
                                (dis)played (with) in/visibility.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- Zum Ausklappen -->
                <!-- <button @click="toggleSpiced">
                {{ button.text }}
            </button>
            <div v-if="infoSpiced">
            </div> -->
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Incremental Search //////////// -->

            <div class="small-project-container">
                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/incremental_search/"
                        target="_blank"
                        title="Visit my incremental search project"
                        ><h2 id="incremental">Incremental Search</h2></a
                    >

                    <a
                        href="http://kaleidoscop.herokuapp.com/incremental_search/"
                        target="_blank"
                        title="Visit my incremental search project"
                        ><img
                            src="/images/incremental_search.png"
                            alt="screenshot of incremental search displaying search results for 'ca'"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            alt="icon for features"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Features:</strong> Search countries, use
                            either mouse or keys
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>More info</summary>
                            <p>
                                I have used incremental searches many times in
                                my life and did not even know this term until I
                                had to build one... I never thought about all
                                the different steps that need to be programmed.
                                I learned how to work with mouseovers,
                                mousedowns and key-commands and how to highlight
                                my search result, all programmed with jQuery. I
                                also used focus and blur when a user's attention
                                blurs (pun intended 😉) and after all it was my
                                first ajax 'GET'-request to search from an API
                                serving over 200 countries.
                            </p>
                        </details>
                    </div>
                </div>
                <!-- <button @click="toggleIncremental">
                    {{ button.text }}
                </button>
                <div v-if="infoIncremental"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         button: {
    //             text: 'More info'
    //         },
    //         infoSocialNetwork: false,
    //     }
    // },
    // methods: {
    //     toggleSocialNetwork(e) {
    //         // e.stopPropagation()
    //         // e.preventDefault()
    //         this.infoSocialNetwork = !this.infoSocialNetwork
    //         this.button.text = this.infoSocialNetwork
    //             ? 'Show less'
    //             : 'More info'
    //     },
    _methods: {
        scrollToTop() {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: 0
            })
        }
    },
    get methods() {
        return this._methods
    },
    set methods(value) {
        this._methods = value
    },
    head() {
        return {
            title: 'Software - Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
#software-container {
    margin: 0 2em 2em 2em;
}

h1 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 4em;
    font-weight: 300;
    letter-spacing: 0.4em;
    text-align: center;
    margin: 2% 0 2% 0;
}

h2 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 2.8em;
    font-weight: 300;
    letter-spacing: 0.2em;
    padding-top: 1em;
}

.software-explanation {
    text-align: center;
    margin: 0 15% 3% 15%;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.small-project-container {
    width: 100%;
}

.image-container {
    width: 60%;
    margin: 3% 0 0 20%;
}

.image-container img {
    width: 100%;
}

.image-container:hover {
    filter: brightness(110%);
}

.text-container {
    width: 100%;
    padding: 5% 5% 0 5%;
}

.text-container > div {
    margin-top: 2%;
}

details {
    font-size: 1.2em;
}

details > summary {
    padding: 2px 6px;
    width: 15em;
    border: none;
    cursor: pointer;
}

details > p {
    font-size: 1em;
    padding: 2px 6px;
    margin: 0;
}

#socialnetwork,
#imageboard,
#petition,
#kaleidoscope,
#spotify,
#panes,
#connectfour,
#carousel,
#spicedhomepage,
#localstorage,
#validator,
#ticker,
#incremental {
    text-align: center;
}

.small-project-container {
    width: 100%;
}

.make-details-visible {
    margin-top: 1% !important;
    margin-right: 2%;
}

.social-media-logo {
    height: 30px;
    width: 30px;
    font-size: 1.2em;
    margin-right: 0.5em;
}

.up-arrow {
    height: 1em;
    filter: invert();
}

.jump-to-top {
    position: sticky;
    left: 97vw;
    top: 90vh;
    padding: 0.5em 0.5em;
    background-color: rgb(85, 84, 84, 0.5);
    color: white;
    border-radius: 50%;
}

.jump-to-top:hover {
    background-color: rgb(94, 44, 44);
    text-decoration: none;
}
</style>
