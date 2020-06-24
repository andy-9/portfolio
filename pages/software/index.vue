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
                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/socialnetwork"
                                target="_blank"
                            >
                                {{ $t('Der Code auf GitHub') }}
                            </a>
                        </strong>
                    </p>
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

                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/petition"
                                target="_blank"
                            >
                                {{ $t('Der Code auf GitHub') }}
                            </a>
                        </strong>
                    </p>
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
            <!-- <nuxt-link
                :to="localePath('software')"
                class="jump-to-top"
                :title="$t('zum Seitenanfang')"
                @click.native="scrollToTop"
            >
                <img
                    src="/icons/chevron-up.svg"
                    :alt="$t('Pfeil nach oben zum Anfang der Seite')"
                    class="up-arrow"
            /></nuxt-link> -->
            <!-- <nuxt-link
                :to="{ localePath: 'software' }"
                class="jump-to-top"
                :title="$t('zum Seitenanfang')"
                ><img
                    src="/icons/chevron-up.svg"
                    :alt="$t('Pfeil nach oben zum Anfang der Seite')"
                    class="up-arrow"
            /></nuxt-link> -->
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
                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/imageboard"
                                target="_blank"
                            >
                                {{ $t('Der Code auf GitHub') }}
                            </a>
                        </strong>
                    </p>
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
                    :title="
                        $t(
                            'Zu meinem online-Kaleidoskop, das meine mittleren und kleineren Projekte zeigt'
                        )
                    "
                    ><h2 id="kaleidoscope">{{ $t('Kaleidoskop') }}</h2></a
                >

                <div class="image-container">
                    <a href="http://kaleidoscop.herokuapp.com/" target="_blank"
                        ><img
                            src="/images/kaleidoscope.png"
                            :alt="
                                $t(
                                    'Screenshot der Startseite des Kaleidoskops mit allen Projekten'
                                )
                            "
                            :title="
                                $t(
                                    'Zu meinem online-Kaleidoskop, das meine mittleren und kleineren Projekte zeigt'
                                )
                            "
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
                            <strong>{{ $t('Meine kleineren') }}</strong>
                            {{ $t('und mittelgroßen Projekte') }}
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Alle Projekte werden mit Überschrift und Bild angezeigt und für jedes Projekt gibt es eine eigene Seite mit ausführlicher Beschreibung'
                                )
                            }}
                        </p>
                    </div>

                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/kaleidoscope"
                                target="_blank"
                            >
                                {{ $t('Der Code auf GitHub') }}
                            </a>
                        </strong>
                    </p>
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
                    :title="$t('zu meinem Skalierte Bilder-Projekt')"
                    ><h2 id="panes">{{ $t('Skalierte Bilder') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                        target="_blank"
                        :title="$t('zu meinem Skalierte Bilder-Projekt')"
                        ><img
                            src="/images/panes.png"
                            :alt="$t('Screenshot Skalierte Bilder')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Schieberegler für Skalierung der Bildgröße, Anzeige des einen oder des anderen Bildes'
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
                                        '2 übereinander gelegte Bilder, die normalerweise für Vorher-Nachher-Situationen verwendet werden. Ich benutze es zum Gedenken an meine Urgroßmutter Emilie Rau. Wird der weiße Schieberegler nach links geschoben, ist mehr vom Bild auf der rechten Seite zu sehen und umgekehrt. Auf der Programmiere-Ebene habe ich Mousedown, Mousemove und Mouseup-Ereignisse verwendet und offset().left wurde zu einem guten Freund. Schwierig fand ich, das Gleiten des Schiebereglers innerhalb der Grenzen des Bildes zu beenden.'
                                    )
                                }}
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
                    :title="$t('zu meiner Spotify-Suche')"
                    ><h2 id="spotify">{{ $t('Spotify-Suche') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spotify_search/"
                        target="_blank"
                        ><img
                            src="/images/spotify.png"
                            :alt="
                                $t(
                                    'Screenshot Spotify-Suche, Suchergebnisse für \'monae\''
                                )
                            "
                            :title="$t('zu meiner Spotify-Suche')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Spotify-Datenbank über API durchsuchen, Album/Künstler\*in mit verlinktem Cover und Namen anzeigen, mehr Daten durch Button oder Endlos-Scroll laden'
                                )
                            }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div class="make-details-visible">
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        "Trotz des Nicht-Vorhandenseins eines eigenen Spotify-Kontos, habe ich trotzdem eine Benutzeroberfläche programmiert, um über eine API die Spotify-Datenbank durchsuchen zu können. Wird nach einer Künstler\*in oder Album gesucht, werden die ersten 20 Suchbegriffe mit einem Bild des Albums und dem Namen des Künstler\*s angezeigt. Unten angekommen, kann für die nächsten 20 Suchbegriffe auf 'More' geklickt werden. Endlos-Scroll ist auch möglich. Ich habe jQuery, Clickhandler, mehrere Ajax-'GET'-Requests, CSS-Flexbox und Pseudo-Selektoren verwendet. Ich fand es schwierig, die Reihenfolge herauszufinden, wann welche Funktion aufgerufen werden soll und dass sie sich nicht gegenseitig stören. Schlussendlich habe ich es geschafft, und wer auf den Link unten klickt, hat einen unbegrenzten Vorrat an Suchergebnissen - hoffentlich hast DU ein Spotify-Konto..."
                                    )
                                }}
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
                    :title="$t('zu meinem Kätzchen-Karussell')"
                    ><h2 id="carousel">{{ $t('Kätzchen-Karussell') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                        target="_blank"
                        :title="$t('zu meinem Kätzchen-Karussell')"
                        ><img
                            src="/images/carousel.png"
                            :alt="
                                $t(
                                    'Screenshot des Kätzchen-Karussells, ein Kätzchen kommt von rechts rein, während das andere nach links gleitet'
                                )
                            "
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Die Kätzchen kommen von rechts und wandern der Reihe nach nach links, ein bestimmtes Bild kann gezielt angezeigt werden'
                                )
                            }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <details>
                        <summary>{{ $t('Mehr Informationen') }}</summary>
                        <p>
                            {{
                                $t(
                                    '4 Bilder von Kätzchen bewegen sich in einer Endlosschleife von rechts nach links, ein Bild pro Sekunde. Es kann auch ein bestimmtes Bild ausgewählt werden, indem auf den entsprechenden weißen Punkt geklickt wird. Bei der Programmierung waren timing und Raum wichtig, einschließlich des Hinzufügens und Entfernens von QuerySelectors, eventListeners und clickHandlers. Es war das erste Mal, dass ich mit CSS-transitions gearbeitet habe. Niedlich, nicht wahr? Klick auf den Link, um das Kätzchen-Karussell zu sehen...'
                                )
                            }}
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
                    :title="$t('zu meinem Ticker-Projekt')"
                    ><h2 id="ticker">Ticker</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/ticker/"
                        target="_blank"
                        ><img
                            src="/images/ticker.png"
                            :alt="$t('Screenshot des Tickers')"
                            :title="$t('zu meinem Ticker-Projekt')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Die neuesten Nachrichten werden angezeigt und können bei Interesse angeklickt werden'
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
                                        'Ticker sind etwas veraltet, aber eine gute Programmierübung. Meiner läuft von rechts nach links, und wird mit der Maus über einen der Titel gefahren, hört der Ticker auf zu laufen, der Hyperlink wird blau und unterstrichen, und wenn er angeklickt wird, öffnet sich die gewünschte Information in einem neuen Tab. Die Programmierung ist in Vanilla-JavaScript u.a. mit Event Listener, Mouseovers, Mouseoutss, OffsetWidth und AnimationFrames. Wer tiefer in meinen Ticker eintauchen will, findet alle meine Texte, die ins Englische übersetzt wurden... In einer späteren Übung haben wir ein Backend hinzugefügt und Live-Tweets von bestehenden Twitter-Accounts über die twitter-API mittels Token abgerufen.'
                                    )
                                }}
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
                    :title="$t('zu meinem Lokaler Speicher-Projekte')"
                    ><h2 id="localstorage">{{ $t('Lokaler Speicher') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/local_storage/"
                        target="_blank"
                        ><img
                            src="/images/localstorage.png"
                            :alt="$t('Screenshot Lokaler Speicher-Projekt')"
                            :title="$t('zu meinem Lokaler Speicher-Projekte')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Nachricht schreiben und im lokalen Speicher speichern, Nachricht anzeigen und/oder löschen'
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
                                        "Die Arbeit mit dem lokalen Speicher hat Spaß gemacht. Wenn man etwas in das Textfeld schreibt und auf die Schaltfläche 'Keep it a secret!' klickt, verschwindet der Text und die Schaltfläche kann nicht mehr angeklickt werden (um das, was im lokalen Speicher gespeichert wurde, zu behalten). Die Schaltfläche links daneben ('Tell me the secret!') zeigt an, was gespeichert wurde, auch nachdem der Browser geschlossen wurde. Die letzte Schaltfläche ('I don't trust you anymore - forget my secret!') löscht den lokalen Speicher und die Konsole. Ich habe mit jQuery unter Verwendung von Click-Handlern und Try-Catch-Fehlerbehandlung gearbeitet."
                                    )
                                }}
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
                    :title="$t('zu meinem JSON-Validator')"
                    ><h2 id="validator">{{ $t('JSON-Validator') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                        target="_blank"
                        ><img
                            src="/images/JSON.png"
                            :alt="
                                $t(
                                    'Screenshot JSON-Validator, der in grün valides JSON anzeigt'
                                )
                            "
                            :title="$t('zu meinem JSON-Validator')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{ $t('Test, ob Daten JSON sind oder nicht') }}
                        </p>
                    </div>

                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        "Dieser einfache Validierungstest prüft, ob JSON vorliegt oder nicht. Einfach per Copy-Paste in das Textfeld kopieren und auf die Schaltfläche 'Validate JSON' anklicken. Wenn JSON vorliegt, färbt sich der Rand des Textfelds grün und unten im Textfeld blinkt der Text 'Valid JSON!'. Handelt es sich nicht um JSON, färbt sich der Rand des Textfelds rot und es erfolgt ein entsprechender Hinweis. Für den nächste Überprüfung einfach 'Clear textarea' klicken... Programmiert mit jQuery mit der parse()-Methode und Flexbox und Keyframes in CSS."
                                    )
                                }}
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
                    :title="$t('zu meinem 4 Gewinnt')"
                    ><h2 id="connectfour">{{ $t('4 Gewinnt') }}</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/connect4/"
                        target="_blank"
                        ><img
                            src="/images/connect4.png"
                            :alt="
                                $t(
                                    'Screenshot 4 Gewinnt, beide Farben im Spiel'
                                )
                            "
                            :title="$t('zu meinem 4 Gewinnt')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    '2 Spieler\*innen können gegeneinander spielen, horizontale, vertikale oder diagonale Siege, Animation, wenn ein\*e Spieler\*in gewinnt, die Farbe des Gewinners wird angezeigt, erneut spielen'
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
                                        "Schon als Kind habe ich gerne 4 gewinnt gespielt - und tue es bis heute! Ich hätte nie gedacht, dass ich das mal als Computerspiel programmieren würde. Das Schwierigste war das Herausfinden und Programmieren der Diagonalsiege. Man kann entweder dunkelrot oder pink zum Spielen auswählen. Jeder Spielzug wird von einem Klick-Geräusch begleitet. Wenn eine Farbe gewinnt, dehnt sich das ganze Brett aus und die Gewinner-Farbe füllt den ganzen Bildschirm. Diese Animation habe ich mit jQuery erstellt. Zusätzlich gibt es eine Gewinnerinnen-Meldung, die blinkt - diese habe ich mit CSS-Animationen und Keyframes erstellt. Der 'Play again'-Knopf startet ein neues Spiel - Viel Spaß dabei!"
                                    )
                                }}
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
                    :title="$t('zu meinem Spiced Homepage-Projekt')"
                    ><h2 id="spicedhomepage">Spiced Homepage</h2></a
                >

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                        target="_blank"
                        ><img
                            src="/images/spiced.png"
                            :alt="$t('Screenshot Spiced Homepage')"
                            :title="$t('zu meinem Spiced Homepage-Projekt')"
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{
                                $t(
                                    'Pop-up Anzeige, Hamburger-Menü, von rechts hereingleitende Navigation, auch für kleinere Bildschirme geeignet'
                                )
                            }}
                        </p>
                    </div>
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        'Eine Übung zur Erstellung einer Homepage für Spiced mit HTML, CSS und JavaScript/jQuery ohne Flexbox oder Grid - recht anspruchsvoll! Ich habe eine Pop-up-Anzeige und ein von rechts hereingleitendes Menü hinzugefügt. Es ist auch für einen kleineren Bildschirm mit @media screen ausgelegt. Ich habe Animationen und Click-Handler verwendet und mit Un/Sichtbarkeit gespielt.'
                                    )
                                }}
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
                        :title="$t('zu meiner inkrementellen Suche')"
                        ><h2 id="incremental">
                            {{ $t('Inkrementelle Suche') }}
                        </h2></a
                    >

                    <a
                        href="http://kaleidoscop.herokuapp.com/incremental_search/"
                        target="_blank"
                        :title="$t('zu meiner inkrementellen Suche')"
                        ><img
                            src="/images/incremental_search.png"
                            :alt="
                                $t(
                                    'Screenshot inkrementelle Suche für Suchergebnis \'ca\''
                                )
                            "
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
                            <strong>{{ $t('Funktionalität') }}:</strong>
                            {{ $t('Ländersuche, geht mit Maus oder Tasten') }}
                        </p>
                    </div>
                    <!-- Zum Ausklappen -->
                    <div>
                        <details>
                            <summary>{{ $t('Mehr Informationen') }}</summary>
                            <p>
                                {{
                                    $t(
                                        "Ich habe in meinem Leben viele Male inkrementelle Suchen verwendet und kannte diesen Begriff noch nicht einmal, bis ich eine programmieren sollte... Ich habe nie über all die verschiedenen Schritte nachgedacht, die dafür notwendig sind. Ich habe gelernt, wie man mit Mouseovers, Mousedowns und Tastenbefehlen arbeitet und wie man ein Suchergebnis hervorhebt - alles programmiert mit jQuery. Ich habe auch Fokus und Unschärfe verwendet, sollte die Aufmerksamkeit einer Benutzer\*in schwinden 😉, und schlussendlich war es mein erster Ajax-'GET'-Request, um von einer Länder-API aus suchen zu können."
                                    )
                                }}
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
            // console.log('software-page, scrollToTop running')
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

.code-margin {
    margin-top: 2%;
    margin-left: 2em;
}

details {
    font-size: 1.2em;
}

details > summary {
    padding: 2px 6px 2px 0.7em;
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
