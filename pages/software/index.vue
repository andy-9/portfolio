<template>
    <div id="software-container">
        <h1>Software</h1>

        <p class="software-explanation">
            {{
                $t(
                    'Hier finden sich Softwareprojekte, die ich während meiner Ausbildung zum Full-Stack-Web-Entwickler erstellt habe.'
                )
            }}
            <br />
            {{
                $t(
                    'Weiter oben befinden sich die größeren Projekte, gefolgt von mittleren und kleineren Projekten.'
                )
            }}
        </p>

        <!-- ///////////////////// BIGGER PROJECTS ///////////////////// -->

        <div class="grid-container">
            <!-- //////////// Social Network //////////// -->
            <div class="small-project-container">
                <a
                    href="https://kite-inc.herokuapp.com/"
                    target="_blank"
                    :title="$t('Zu meinem Sozialen Netzwerk Kite.Inc')"
                    ><h2 id="socialnetwork">
                        {{ $t('Soziales Netzwerk') }}
                    </h2></a
                >

                <div class="image-container">
                    <a href="https://kite-inc.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/kite.png"
                            :alt="
                                $t(
                                    'Screenshot von Suchergebnissen des Sozialen Netzwerks Kite.Inc'
                                )
                            "
                            :title="$t('Zu meinem Sozialen Netzwerk Kite.Inc')"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            :alt="$t('Informations-Icon')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Facebook-{{ $t('inspirierte') }}</strong>
                            {{ $t('Single-Page-Application') }}
                            (SPA)
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            :alt="$t('Icon für Code')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Technologien') }}:</strong> React
                            &amp; Redux, Express, Node, PostgreSQL, Socket.io,
                            Amazon S3 and SES, CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Registrierung, Login, persönliches Profil mit Bio- und Bild-Upload, Senden, Empfangen und Annehmen von Freundschaftsanfragen, Freundschaft beenden, Gespräche in einem Chat-Raum führen, Anzeige der letzten 3 registrierten Benutzer\*innen, Suche nach Benutzer\*innen mit Vor- und Nachnamen, Anzeigen von Freund\*innen von Freund\*innen, Abmelden'
                                )
                            }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        'Benutzer\*innen können einem Sozialen Netzwerk beitreten, in diesem Fall einem für inklusive Kitesurfing-Communities.'
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    $t(
                                        'Eine hohe Priorität hat konditionales Rendering, Sicherheitsfragen (Passwort-Hashing, Schutz vor SQL-Injektion, CSRF- und XSS-Angriffen, Reset-Code per E-Mail) und eine differenzierte Fehlerbehandlung (verschiedene Fehlermeldungen werden angezeigt, z.B. wenn die E-Mail nicht in der Datenbank ist, das erneut eingegebene Passwort nicht mit dem ersten Passwort übereinstimmt oder die Eingabefelder leer bleiben) in den Registrierungs-, Login- und Reset-Passwort-Komponenten.'
                                    )
                                }}
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
                    :title="$t('Zu meiner Online-Petition')"
                    ><h2 id="petition">Petition</h2></a
                >

                <div class="image-container">
                    <a href="https://algobias.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/algobias.png"
                            :alt="
                                $t(
                                    'Screenshot der Registrierungs-Seite der Online-Petition gegen algorithmische Diskriminierung'
                                )
                            "
                            :title="$t('Zu meiner Online-Petition')"
                    /></a>
                </div>

                <div class="text-container flex-column">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            :alt="$t('Informations-Icon')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Online-{{ $t('Petition') }}</strong>
                            {{ $t('gegen algorithmische Diskriminierung') }}
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            :alt="$t('Icon für Code')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Technologien') }}:</strong> Express
                            handlebars, Node, PostgreSQL, jQuery, CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Unterstützer\*innen können sich registrieren, einloggen, ihre Profilinformationen aktualisieren, unterschreiben, die Unterschrift wieder zurückziehen, Mitunterzeichnende nach Ort sortiert anzeigen lassen, sich abmelden'
                                )
                            }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        'Diese Petition plädiert für die Unterzeichnung der Algo.Rules und gegen algorithmische Diskriminierung. Je nachdem, ob sich Benutzer\*innen registrieren und unterschreiben, werden ihnen unterschiedliche Seiten angezeigt. Wenn sie unterzeichnen, werden andere Unterzeichnende, deren Homepages, ihr Alter und ihre Stadt angezeigt.'
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    $t(
                                        'Ich habe viel über Datenfluss gelernt, die Arbeit mit Session-Cookies, Get- und Post-Routen und wie man sie mit Supertest testet. Ich habe auch mit promises, Passwort-Hashing und inserts, updates, upserts und deletes in der Datenbank gearbeitet. Besonders herausfordernd fand ich die Unterschrift mit canvas und das konditionale Bearbeiten des Benutzer\innen-Profils.'
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    $t(
                                        'Die Seite verfügt über eine differenzierte Fehlerbehandlung und ist gegen SQL-Injektion, Clickjacking, XSS- und CSRF-Angriffe geschützt.'
                                    )
                                }}
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
                :title="$t('zum Seitenanfang')"
                @click.native="scrollToTop"
            >
                <img
                    src="/icons/chevron-up.svg"
                    :alt="$t('Pfeil nach oben zum Anfang der Seite')"
                    class="up-arrow"
            /></nuxt-link>
        </span>

        <div class="grid-container">
            <!-- //////////// Imageboard //////////// -->

            <div class="small-project-container">
                <a
                    href="http://graf-streetart.herokuapp.com/"
                    target="_blank"
                    :title="$t('Zu meinem Imageboard')"
                    ><h2 id="imageboard">Imageboard</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://graf-streetart.herokuapp.com/"
                        target="_blank"
                        ><img
                            src="/images/imageboard.png"
                            :alt="
                                $t(
                                    'Screenshot der Startseite des Imageboards für Graffiti und Street Art'
                                )
                            "
                            :title="$t('Zu meinem Imageboard')"
                    /></a>
                </div>

                <div class="text-container">
                    <div class="flex-row">
                        <img
                            src="/icons/information-outline.svg"
                            :alt="$t('Informations-Icon')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>Instagram-{{ $t('inspirierte') }}</strong>
                            {{ $t('Single-Page-Application') }}
                            (SPA)
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/code-slash.svg"
                            :alt="$t('Icon für Code')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Technologien') }}:</strong> Vue,
                            Express, Node, PostgreSQL, Amazon S3, Jest, CSS,
                            HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Hochladen von Bildern mit Titel, Beschreibung und Benutzernamen, jedes Bild kann angeklickt und groß angezeigt werden mit mehr Informationen und der Möglichkeit, das Bild zu kommentieren und auch zu löschen, weitere Bilder können geladen werden'
                                )
                            }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        'Jede*r kann Bilder ihrer Wahl hochladen; das Thema dieses Imageboards ist Graffiti und Street Art.'
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    $t(
                                        'Ich habe viel über Vue.js und die Arbeit mit state, un-/mounting, dynamischem Routing, Click-Handlern, Event-Emittern und Wächtern (watchers) gelernt. Das Imageboard ist gegen SQL-Injektion, Clickjacking, XSS- und CSRF-Angriffe geschützt.'
                                    )
                                }}
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
                            :alt="$t('Informations-Icon')"
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
                            :alt="$t('Icon für Code')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Technologien') }}:</strong> Express
                            handlebars, CSS, HTML
                        </p>
                    </div>
                    <div class="flex-row">
                        <img
                            src="/icons/checklist.svg"
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Display
                            of all projects, description-site for each project
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Resize
                            pane with slider, display one image or the other
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Search
                            Spotify database through API, display album/artist
                            with hyperlinked cover and name, load more through
                            button click or infinite scroll
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div class="make-details-visible">
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Watch
                            kitties carouseling, pick a specific image to be
                            displayed again
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <details>
                        <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Get the
                            latest news displayed, click if you are interested
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Write a
                            message and save it in local storage, display and/or
                            delete message
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Test if
                            data is JSON or not
                        </p>
                    </div>

                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> 2
                            players can play against each other, horizontal,
                            vertical or diagonal victories, animation when one
                            player wins, winning color gets displayed, play
                            again
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Pop-up
                            modal, hamburger menu with navigation sliding in
                            from the right, also suited for smaller screens
                        </p>
                    </div>
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
                            :alt="$t('Icon für Funktionalität')"
                            class="social-media-logo"
                        />
                        <p>
                            <strong>{{ $t('Funktionalität') }}:</strong> Search
                            countries, use either mouse or keys
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
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
            console.log('software-page, scrollToTop running')
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
