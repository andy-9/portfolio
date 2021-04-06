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
                <h2 id="socialnetwork">
                    <!-- href="https://kite-inc.herokuapp.com/" -->
                    <!-- target="_blank" -->
                    <a
                        href="https://andreashechler.com/software"
                        rel="noreferrer"
                        :title="$t('Currently down')"
                    >
                        <!-- 'Zu meinem Sozialen Netzwerk Kite.Inc (der Start dauert ca. 10 Sekunden)' -->
                        {{ $t('Soziales Netzwerk') }}
                    </a>
                </h2>

                <div class="image-container">
                    <!-- href="https://kite-inc.herokuapp.com/"
                        target="_blank" -->
                    <!-- 'Zu meinem Sozialen Netzwerk Kite.Inc (der Start dauert ca. 10 Sekunden)' -->
                    <a
                        href="https://andreashechler.com/software"
                        rel="noreferrer"
                        ><img
                            src="/images/kite.jpg"
                            :alt="
                                $t(
                                    'Screenshot von Suchergebnissen des Sozialen Netzwerks Kite.Inc'
                                )
                            "
                            :title="$t('Currently down')"
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
                            &amp; Redux, Node, Express, PostgreSQL, Socket.io,
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
                                    'Registrierung, Login, persönliches Profil mit Bio- und Bild-Upload, Senden, Empfangen und Annehmen von Freundschaftsanfragen, Freundschaft beenden, Gespräche in einem Chat-Raum führen, Anzeige der letzten 3 registrierten Benutzer:innen, Suche nach Benutzer:innen mit Vor- und Nachnamen, Anzeigen von Freund:innen von Freund:innen, Abmelden'
                                )
                            }}
                        </p>
                    </div>
                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/socialnetwork"
                                target="_blank"
                                rel="noreferrer"
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
                                        'Benutzer:innen können einem Sozialen Netzwerk beitreten, in diesem Fall einem für inklusive Kitesurfing-Communities.'
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
                </div>
            </div>

            <!-- //////////// Petition //////////// -->
            <div class="small-project-container">
                <h2 id="petition">
                    <a
                        href="https://algobias.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        :title="
                            $t(
                                'Zu meiner Online-Petition (der Start dauert ca. 10 Sekunden)'
                            )
                        "
                        >Petition</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="https://algobias.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/algobias.jpg"
                            :alt="
                                $t(
                                    'Screenshot der Registrierungs-Seite der Online-Petition gegen algorithmische Diskriminierung'
                                )
                            "
                            :title="
                                $t(
                                    'Zu meiner Online-Petition (der Start dauert ca. 10 Sekunden)'
                                )
                            "
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
                                    'Unterstützer:innen können sich registrieren, einloggen, ihre Profilinformationen aktualisieren, unterschreiben, die Unterschrift wieder zurückziehen, Mitunterzeichnende nach Ort sortiert anzeigen lassen, sich abmelden'
                                )
                            }}
                        </p>
                    </div>

                    <p class="code-margin">
                        <strong>
                            <a
                                href="https://github.com/andy-9/petition"
                                target="_blank"
                                rel="noreferrer"
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
                                        'Diese Petition plädiert für die Unterzeichnung der Algo.Rules und gegen algorithmische Diskriminierung. Je nachdem, ob sich Benutzer:innen registrieren und unterschreiben, werden ihnen unterschiedliche Seiten angezeigt. Wenn sie unterzeichnen, werden andere Unterzeichnende, deren Homepages, ihr Alter und ihre Stadt angezeigt.'
                                    )
                                }}
                            </p>
                            <p>
                                {{
                                    $t(
                                        'Ich habe viel über Datenfluss gelernt, die Arbeit mit Session-Cookies, Get- und Post-Routen und wie man sie mit Supertest testet. Ich habe auch mit promises, Passwort-Hashing und inserts, updates, upserts und deletes in der Datenbank gearbeitet. Besonders herausfordernd fand ich die Unterschrift mit canvas und das konditionale Bearbeiten des Benutzer:innen-Profils.'
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
                </div>
            </div>
        </div>

        <span>
            <nuxt-link
                :to="{ localePath: 'software' }"
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
                <h2 id="imageboard">
                    <a
                        href="http://graf-streetart.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        :title="
                            $t(
                                'Zu meinem Imageboard (der Start dauert ca. 10 Sekunden)'
                            )
                        "
                        >Imageboard</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://graf-streetart.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/imageboard.jpg"
                            :alt="
                                $t(
                                    'Screenshot der Startseite des Imageboards für Graffiti und Street Art'
                                )
                            "
                            :title="
                                $t(
                                    'Zu meinem Imageboard (der Start dauert ca. 10 Sekunden)'
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
                            Node, Express, PostgreSQL, Amazon S3, Jest, CSS,
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
                                rel="noreferrer"
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
                                        'Jede:r kann Bilder ihrer Wahl hochladen; das Thema dieses Imageboards ist Graffiti und Street Art.'
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
            </div>

            <!-- //////////// Kaleidoscope //////////// -->

            <div class="small-project-container">
                <h2 id="kaleidoscope">
                    <a
                        href="http://kaleidoscop.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        :title="
                            $t(
                                'Zu meinem online-Kaleidoskop, das meine mittleren und kleineren Projekte zeigt (der Start dauert ca. 10 Sekunden)'
                            )
                        "
                        >{{ $t('Kaleidoskop') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/kaleidoscope.jpg"
                            :alt="
                                $t(
                                    'Screenshot der Startseite des Kaleidoskops mit allen Projekten'
                                )
                            "
                            :title="
                                $t(
                                    'Zu meinem online-Kaleidoskop, das meine mittleren und kleineren Projekte zeigt (der Start dauert ca. 10 Sekunden)'
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
                                rel="noreferrer"
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
                <h2 id="panes">
                    <a
                        href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Skalierte Bilder-Projekt')"
                        >{{ $t('Skalierte Bilder') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/resizable_panes/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Skalierte Bilder-Projekt')"
                        ><img
                            src="/images/panes.jpg"
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
                </div>
            </div>

            <!-- //////////// Spotify Search //////////// -->
            <div class="small-project-container">
                <h2 id="spotify">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spotify_search/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meiner Spotify-Suche')"
                        >{{ $t('Spotify-Suche') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spotify_search/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/spotify.jpg"
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
                                    'Spotify-Datenbank über API durchsuchen, Album/Künstler:in mit verlinktem Cover und Namen anzeigen, mehr Daten durch Button oder Endlos-Scroll laden'
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
                                        "Trotz des Nicht-Vorhandenseins eines eigenen Spotify-Kontos, habe ich trotzdem eine Benutzeroberfläche programmiert, um über eine API die Spotify-Datenbank durchsuchen zu können. Wird nach einer:m Künstler:in oder Album gesucht, werden die ersten 20 Suchbegriffe mit einem Bild des Albums und dem Namen des:r Künstler:in angezeigt. Unten angekommen, kann für die nächsten 20 Suchbegriffe auf 'More' geklickt werden. Endlos-Scroll ist auch möglich. Ich habe jQuery, Clickhandler, mehrere Ajax-'GET'-Requests, CSS-Flexbox und Pseudo-Selektoren verwendet. Ich fand es schwierig, die Reihenfolge herauszufinden, wann welche Funktion aufgerufen werden soll und dass sie sich nicht gegenseitig stören. Schlussendlich habe ich es geschafft, und wer auf den Link unten klickt, hat einen unbegrenzten Vorrat an Suchergebnissen - hoffentlich hast DU ein Spotify-Konto..."
                                    )
                                }}
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Kitty Carousel //////////// -->
            <div class="small-project-container">
                <h2 id="carousel">
                    <a
                        href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Kätzchen-Karussell')"
                        >{{ $t('Kätzchen-Karussell') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/kitty_carousel/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Kätzchen-Karussell')"
                        ><img
                            src="/images/carousel.jpg"
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
                    <div>
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
            </div>

            <!-- //////////// Ticker //////////// -->
            <div class="small-project-container">
                <h2 id="ticker">
                    <a
                        href="http://kaleidoscop.herokuapp.com/ticker/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Ticker-Projekt')"
                        >Ticker</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/ticker/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/ticker.jpg"
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
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Local Storage //////////// -->
            <div class="small-project-container">
                <h2 id="localstorage">
                    <a
                        href="http://kaleidoscop.herokuapp.com/local_storage/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Lokaler Speicher-Projekte')"
                        >{{ $t('Lokaler Speicher') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/local_storage/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/localstorage.jpg"
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
            </div>

            <!-- //////////// JSON-validator //////////// -->

            <div class="small-project-container">
                <h2 id="validator">
                    <a
                        href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem JSON-Validator')"
                        >{{ $t('JSON-Validator') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/JSON_validator/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/JSON.jpg"
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
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Connect 4 //////////// -->
            <div class="small-project-container">
                <h2 id="connectfour">
                    <a
                        href="http://kaleidoscop.herokuapp.com/connect4/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem 4 Gewinnt')"
                        >{{ $t('4 Gewinnt') }}</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/connect4/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/connect4.jpg"
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
                                    '2 Spieler:innen können gegeneinander spielen, horizontale, vertikale oder diagonale Siege, Animation, wenn ein:e Spieler:in gewinnt, die Farbe des Gewinners wird angezeigt, erneut spielen'
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
            </div>

            <!-- //////////// Spiced Homepage //////////// -->

            <div class="small-project-container">
                <h2 id="spicedhomepage">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meinem Spiced Homepage-Projekt')"
                        >Spiced Homepage</a
                    >
                </h2>

                <div class="image-container">
                    <a
                        href="http://kaleidoscop.herokuapp.com/spiced_homepage/"
                        target="_blank"
                        rel="noreferrer"
                        ><img
                            src="/images/spiced.jpg"
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
            </div>
        </div>

        <div class="grid-container">
            <!-- //////////// Incremental Search //////////// -->

            <div class="small-project-container">
                <div class="image-container">
                    <h2 id="incremental">
                        <a
                            href="http://kaleidoscop.herokuapp.com/incremental_search/"
                            target="_blank"
                            rel="noreferrer"
                            :title="$t('zu meiner inkrementellen Suche')"
                        >
                            {{ $t('Inkrementelle Suche') }}
                        </a>
                    </h2>

                    <a
                        href="http://kaleidoscop.herokuapp.com/incremental_search/"
                        target="_blank"
                        rel="noreferrer"
                        :title="$t('zu meiner inkrementellen Suche')"
                        ><img
                            src="/images/incremental_search.jpg"
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
                                        "Ich habe in meinem Leben viele Male inkrementelle Suchen verwendet und kannte diesen Begriff noch nicht einmal, bis ich eine programmieren sollte... Ich habe nie über all die verschiedenen Schritte nachgedacht, die dafür notwendig sind. Ich habe gelernt, wie man mit Mouseovers, Mousedowns und Tastenbefehlen arbeitet und wie man ein Suchergebnis hervorhebt - alles programmiert mit jQuery. Ich habe auch Fokus und Unschärfe verwendet, sollte die Aufmerksamkeit einer Benutzerin schwinden 😉, und schlussendlich war es mein erster Ajax-'GET'-Request, um von einer Länder-API aus suchen zu können."
                                    )
                                }}
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Software Andreas Hechler'
                }
            ]
        }
    }
}
</script>

<style scoped>
#software-container {
    margin: 0 2em 10em 2em;
}

h1 {
    text-align: center;
    margin: 2% 0 2% 0;
}

h2 {
    margin-top: 2em;
}

h2 > a {
    color: black;
}

.software-explanation {
    text-align: center;
    margin: 0 15% 0 15%;
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
    margin-top: 1em;
}

.code-margin {
    margin-top: 1em;
    margin-left: 2em;
}

details {
    font-size: 1.2em;
}

details > summary {
    padding: 2px 6px 2px 16px;
    width: 12em;
    border: none;
    cursor: pointer;
}

details > p {
    font-size: 1em;
    padding: 2px 6px 2px 2em;
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
    margin-right: 0.5em;
}

.up-arrow {
    height: 1em;
    filter: invert();
}

@media only screen and (max-width: 768px) {
    #software-container {
        margin: 0 0.5em 10em 0.5em;
    }

    .software-explanation {
        margin: 0 1% 3% 1%;
    }

    .grid-container {
        grid-template-columns: 1fr;
    }

    .image-container {
        width: 80%;
        margin: 2% auto 0 auto;
    }

    .text-container {
        padding: 5% 0 0 0;
    }

    details > summary {
        padding: 2px 6px 2px 0.85em;
    }
}
</style>
