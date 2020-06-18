<template>
    <div id="about-container">
        <div class="container-one">
            <div class="text-area-one">
                <h1>{{ $t('Hallo') }},</h1>
                <h1>{{ $t('ich bin') }} Andreas Hechler.</h1>
                <p>
                    <strong>
                        {{
                            $t(
                                'Ich bin Full Stack Web-Entwickler in Berlin. Ich interessiere mich für Agilität im Allgemeinen und für Scrum im Besonderen'
                            )
                        }}
                        ({{ $t('ich bin zertifizierter PSM I und PSPO I') }}).
                        {{
                            $t(
                                'Ich nutze diese Seite auch, um meine Arbeitsergebnisse, Projekte und Forschung allen so zugänglich und verfügbar wie möglich zu machen'
                            )
                        }}.
                    </strong>
                </p>
                <p>
                    {{
                        $t(
                            'Ich komme aus der (Erwachsenen-)Bildung und habe als Trainer, Berater und Evaluator gearbeitet. Ich habe auch viel publiziert, Vorträge gehalten und Interviews gegeben.'
                        )
                    }}
                    {{
                        $t(
                            'Schwerpunkt meiner Arbeit in den letzten Jahrzehnten war Antidiskriminierung und das Schaffen einer Gesellschaft, in der Menschen ohne Angst verschieden sein können.'
                        )
                    }}
                </p>
                <p>
                    {{
                        $t(
                            'Ich bin fasziniert davon, was Sprache kann: die Gedanken und Handlungen von Menschen mit Wörtern verändern oder das, was sie auf dem Bildschirm sehen mit Code.'
                        )
                    }}
                    {{
                        $t(
                            'Ich arbeite gerne in einem sozialen Umfeld, in dem Zusammenarbeit und offene Kommunikation gelebt werden. Ich schätze einen Arbeitsplatz, an dem ich meine kritischen Gedanken sinnvoll einsetzen kann, intellektuell herausgefordert werde und beruflich wachse'
                        )
                    }}.
                </p>
            </div>
        </div>

        <div class="container-two">
            <div class="text-area-two">
                <!-- //////////////// INFLUENCES //////////////// -->

                <h2>{{ $t('Was mich prägt') }}</h2>

                <p>
                    {{ $t('Die') }}
                    <strong> {{ $t('Wissenschaft') }} </strong>
                    {{
                        $t(
                            'für die Fähigkeit, zu analysieren und zu verstehen; die Ethnologie für die Fähigkeit, genau zu beobachten und zuzuhören.'
                        )
                    }}
                </p>

                <p>
                    {{ $t('Die eigene') }} <strong>{{ $t('Bildung') }}</strong>
                    {{
                        $t(
                            '(ich bin bildungshungrig!) und das Wissen um Lernprozesse, um andere begleiten zu können.'
                        )
                    }}
                </p>

                <p>
                    {{ $t('Die') }} <strong>{{ $t('Politik') }}</strong>
                    {{
                        $t(
                            'und mein Interesse an der Verbindung der kleinen mit den ganz großen Fragen, dem Individuum und der Gesellschaft, dem Alltag und der Herrschaft, der Psyche und der Macht.'
                        )
                    }}
                </p>

                <p>
                    <strong>{{
                        $t(
                            'Inklusion, Diversität und Diskriminierungssensibilität'
                        )
                    }}</strong>
                    {{
                        $t(
                            'als Leitlinien und Anker für eine gerechte und freie Gesellschaft.'
                        )
                    }}
                </p>

                <p>
                    {{ $t('Die') }}
                    <strong>{{
                        $t(
                            'Kommunikationspsychologie und Gewaltfreie Kommunikation'
                        )
                    }}</strong>
                    {{
                        $t(
                            'für Klärungsprozesse, das Auseinanderhalten von Eigenem und Fremdem und der Hinführung zu Gefühlen.'
                        )
                    }}
                </p>

                <p>
                    {{ $t('Die') }}
                    <strong>{{
                        $t('Radikale Therapie und Transaktionsanalyse')
                    }}</strong>
                    {{
                        $t(
                            'für die Selbstreflexion und die Fokussierung auf Gruppenprozesse, Beziehung, Kommunikation und Unterstützung.'
                        )
                    }}
                </p>

                <p>
                    {{ $t('Die') }}
                    <strong>{{ $t('Kontaktimprovisation') }}</strong>
                    {{
                        $t(
                            'für Freude, Leichtigkeit, experimentieren, aushandeln, somatisches Erleben, Achtsamkeit und Flow in der Gruppe.'
                        )
                    }}
                </p>
            </div>
        </div>

        <div class="container-three">
            <div class="text-area-one">
                <!-- //////////////// PROFESSIONAL CAREER //////////////// -->

                <h2 class="less-margin-bottom">
                    {{ $t('Beruflicher Werdegang') }}
                </h2>

                <!-- ////////// OCCUPATION ////////// -->

                <div class="indent-after-heading-two">
                    <h3>{{ $t('Tätigkeiten') }}</h3>

                    <ul>
                        <li>
                            <strong>{{
                                $t(
                                    'Entwicklung von Software im Front- und Backend'
                                )
                            }}</strong>
                            (JavaScript, Node, Vue, React/Redux, Express,
                            Handlebars, jQuery, Socket.io, Jest, PostgreSQL,
                            GitHub, HTML, CSS)
                        </li>

                        <li>
                            <strong>{{ $t('Prozessbegleitung') }}</strong>
                            ({{
                                $t(
                                    'Coaching, Beratung, Evaluation, Beschwerdemanagement'
                                )
                            }})
                        </li>

                        <div>
                            <details
                                ><summary>{{ $t('Ausführlicher') }}</summary>

                                <p>
                                    2019:
                                    {{
                                        $t('Cascade Informationssysteme GmbH')
                                    }}:
                                    <strong>{{
                                        $t(
                                            'Standort- und Produktzertifizierung'
                                        )
                                    }}</strong>
                                    {{ $t('nach Common Criteria') }}
                                </p>

                                <p>
                                    2019: Westnetz GmbH / D-LABS GmbH:
                                    <strong>{{
                                        $t('Analyse der Firmen-Homepage')
                                    }}</strong>
                                    {{
                                        $t(
                                            'unter Aspekten von Geschlechtergerechtigkeit, Vorschläge zur Veränderung'
                                        )
                                    }}
                                </p>

                                <p>
                                    2018-2019:
                                    {{
                                        $t(
                                            'Anne Frank Zentrum / Deutsches Rotes Kreuz Thüringen'
                                        )
                                    }}:
                                    <strong>{{
                                        $t(
                                            'Prozessbegleitung zu Antidiskriminierung und Rechtsextremismusprävention'
                                        )
                                    }}</strong>
                                    {{
                                        $t(
                                            'für Kita-Berater\*innen des DRK Thüringen'
                                        )
                                    }}
                                </p>

                                <p>
                                    2018:
                                    {{
                                        $t(
                                            'Gegen Vergessen – Für Demokratie: Umfangreiche'
                                        )
                                    }}
                                    <strong>Evaluation</strong>
                                    {{
                                        $t(
                                            '(nicht-teilnehmende Beobachtungen, Interviews, Materialauswertung, Zwischen- und Abschlussbericht) der'
                                        )
                                    }}

                                    <em>{{
                                        $t(
                                            'Argumentationstrainings gegen rechte Parolen'
                                        )
                                    }}</em>
                                </p>

                                <p>
                                    2018: Free Software Foundation Europe:
                                    <strong>{{
                                        $t('Beratung und Training')
                                    }}</strong>
                                    {{
                                        $t(
                                            'zur Implementierung eines Code of Conduct und Maßnahmen der Antidiskriminierung'
                                        )
                                    }}
                                </p>

                                <p>
                                    2016-2018:
                                    {{
                                        $t(
                                            'KoFaS – Kompetenzgruppe Fankulturen & Sport'
                                        )
                                    }}:
                                    <strong>{{
                                        $t('Begleitung und Coaching')
                                    }}</strong>
                                    {{
                                        $t(
                                            'zur Implementierung geschlechterreflek­tierter Maßnahmen im Fußball'
                                        )
                                    }}
                                </p>

                                <p>
                                    2017-2018: Bundesarbeitskreis Arbeit und
                                    Leben: {{ $t('Umfangreiche') }}
                                    <strong>Evaluation</strong>
                                    {{
                                        $t(
                                            '(nicht-teilnehmende Beobachtungen, Interviews, Materialauswertung, Zwischen- und Abschlussbericht) der Qualifizierungsreihe'
                                        )
                                    }}
                                    <em>{{
                                        $t(
                                            'breit aufgestellt – Fortbildung zur Prävention von Ungleichwertigkeitsvorstellungen'
                                        )
                                    }}</em>
                                </p>

                                <p>
                                    2016-2017: ufuq.de:
                                    <strong>{{
                                        $t('Teamberatung und -begleitung')
                                    }}</strong>
                                    {{
                                        $t(
                                            'zu geschlechterreflektierten Ansätzen, Multiplikator\*innen-Schulung'
                                        )
                                    }}
                                </p>

                                <p>
                                    2017:
                                    {{ $t('Anne Frank Zentrum: Inhaltliches')
                                    }}<strong> {{ $t('Lektorat') }} </strong>
                                    {{ $t('von Bildungsmaterialien') }}
                                </p>

                                <p>
                                    2017:
                                    {{
                                        $t(
                                            'Bundeskoordinierung Spezialisierter Fachberatung gegen sexualisierte Gewalt in Kindheit und Jugend (BKSF): Recherche und Entwicklung von Vorschlägen für ein'
                                        )
                                    }}
                                    <strong
                                        >{{
                                            $t('Beschwerdemanagementverfahren')
                                        }}
                                    </strong>
                                </p>

                                <p>
                                    2016: Dissens -
                                    {{
                                        $t(
                                            'Institut für Bildung und Forschung'
                                        )
                                    }}:
                                    <strong>{{ $t('Koordination') }}</strong>
                                    {{
                                        $t(
                                            'der Überarbeitung einer Online-Präsenz'
                                        )
                                    }}
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>{{
                                $t('Fort- und Weiterbildungen')
                            }}</strong
                            >, {{ $t('Train-the-Trainer, Workshops') }}
                        </li>
                        <div>
                            <details
                                ><summary>{{ $t('Ausführlicher') }}</summary>

                                <p>
                                    2010-2020: {{ $t('1-9-tägige') }}
                                    <b>{{
                                        $t(
                                            'Fort- und Weiterbildungen und Train the Trainer-Schulungen'
                                        )
                                    }}</b>
                                    {{
                                        $t(
                                            'für Lehrer\*innen, Sozialarbeiter\*innen und politische Bildner\*innen im gesamten Bundesgebiet'
                                        )
                                    }}
                                </p>

                                <p class="indent-content-in-details">
                                    <em>{{ $t('Auftraggebende/Träger') }}</em
                                    >:
                                    {{
                                        $t(
                                            'Amt für Lehrerbildung Hessen, Bildungsministerium Mecklenburg-Vorpommern, Deutsche Kinder- und Jugendstiftung gGmbH, Dissens – Institut für Bildung und Forschung, Institut für Jugendarbeit Gauting, Institut für Qualitätsentwicklung an Schulen Schleswig-Holstein, Landesinstitut für Schule und Medien Berlin-Brandenburg, Landesschulbehörde Niedersachsen, Landessportbund Sachsen-Anhalt, Landesverwaltungsamt Sachsen-Anhalt, RAA Brandenburg, Pädagogisches Institut München, Paritätisches Bildungswerk Bundesverband, Sozialpädagogisches Fortbildungsinstitut Berlin-Brandenburg, Villa Fohrde'
                                        )
                                    }}
                                </p>

                                <p class="indent-content-in-details">
                                    <em>{{
                                        $t('Einzelne Schulen und Vereine')
                                    }}</em
                                    >:
                                    {{
                                        $t(
                                            'Alfred Brehm Grundschule Berlin, Dunant Grundschule Berlin, Martin-Luther-Gymnasium Eisenach, Miteinander e.V. (Sachsen-Anhalt), Vielfalt e.V. Berlin, Werbellin Grundschule Berlin, Willi-Graf-Gymnasium Berlin'
                                        )
                                    }}
                                </p>

                                <p>2010–2019: <strong>Workshops</strong></p>
                                <p class="indent-content-in-details">
                                    <em>{{ $t('Auftraggebende/Träger') }}</em
                                    >:
                                    {{
                                        $t(
                                            'u.a. Amadeu Antonio Stiftung, Dissens – Institut für Bildung und Forschung, Rosa-Luxemburg-Stiftung'
                                        )
                                    }}
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>{{
                                $t(
                                    'Wissenschaftliche Praxisforschung, Vorträge'
                                )
                            }}</strong
                            >, {{ $t('Fachbeiträge und Lektorat') }}
                        </li>

                        <div>
                            <details
                                ><summary>{{ $t('Ausführlicher') }}</summary>

                                <p>
                                    2011–2018:
                                    <strong>{{
                                        $t(
                                            'Lehraufträge und Vorträge an Hochschulen'
                                        )
                                    }}</strong
                                    >:
                                    {{
                                        $t(
                                            'Alice Salomon Hochschule Berlin, Europa Universität Viadrina Frankfurt (Oder), European Solidarity Centre Gdańsk, Evangelische Hochschule Berlin, Fachhochschule Kiel, Hochschule Hannover, Katholische Hochschule für Sozialwesen Berlin, Universität Göttingen, Universität Kiel, University of Central Lancashire Preston'
                                        )
                                    }}
                                </p>

                                <p>
                                    2013–2015:
                                    <a
                                        href="https://gerenep.dissens.de/"
                                        target="_blank"
                                        style="color: lightgrey"
                                    >
                                        <strong>{{
                                            $t(
                                                'Forschungs- und Fortbildungsprojekt zu geschlechterreflektierter Neonazismusprävention bei Dissens – Institut für Bildung und Forschung'
                                            )
                                        }}</strong></a
                                    >:
                                    {{
                                        $t(
                                            'Projektmanagement, -konzeption und -planung; bundesweite Multiplikator\*innen- und Train the Trainer-Schulungen (bis 9 Tage); Beratung und Betreuung von Praxisprojekten; Inhaltliche Inputs; Vermittlung von Methoden und Vortragstätigkeiten; Aufbereitung wissenschaftlicher Erkenntnisse; Tagungsorganisation und -durchführung; Finanzanträge und Kontakt zu Zuwendungsgeber\*innen; Praktikant\*innen- und Honorarteambetreuung'
                                        )
                                    }}
                                </p>

                                <p>
                                    2010–2012:
                                    <strong
                                        >{{
                                            $t(
                                                'Bundesweite Fortbildungstätigkeit beim Fortbildungsprojekt'
                                            )
                                        }}
                                        <a
                                            href="http://www.jungenarbeit-und-schule.de/"
                                            target="_blank"
                                            style="color: lightgrey"
                                        >
                                            <em>{{
                                                $t('Jungenarbeit und Schule')
                                            }}</em></a
                                        ></strong
                                    >:
                                    {{
                                        $t(
                                            '8-tägige Lehrer*innenschulungen zum Thema Arbeit mit Jungen; Train the Trainer-Weiterbildung; inhaltliche Inputs, Vermittlung von Methoden, Beratung'
                                        )
                                    }}
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>{{ $t('Jungenarbeit') }}</strong>
                            {{ $t('und Hilfen zur Erziehung') }}
                            (2002-2017)
                        </li>

                        <div>
                            <details
                                ><summary>{{ $t('Ausführlicher') }}</summary>

                                <p>
                                    2016–2017:
                                    <strong
                                        >{{
                                            $t(
                                                '2-Tages-Workshops für Schulklassen an Grund- und Oberschulen'
                                            )
                                        }}
                                    </strong>
                                    {{
                                        $t(
                                            'in verschiedenen Städten (Berlin, Hessen, Schleswig-Holstein): Geschlechterreflektierte Pädagogik, geschlechtliche und sexuelle Vielfalt'
                                        )
                                    }}
                                </p>

                                <p>
                                    2009–2012:
                                    <strong>{{
                                        $t(
                                            'Hilfen zur Erziehung (Soziale Gruppenarbeit und Einzelfallhilfe) bei Dissens e. V.:'
                                        )
                                    }}</strong>
                                    {{
                                        $t(
                                            'Soziale Gruppenarbeit (§ 29 SGB VIII) und Erziehungsbeistand (§ 30 SGB VIII); geschlechtsbezogene Betreuung einer Jungengruppe; Durchführung von Einzelgesprächen, Gesprächsrunden, Freizeitgestaltung und Sportangeboten'
                                        )
                                    }}
                                </p>

                                <p>
                                    2009–2010:
                                    <strong
                                        >{{ $t('Jungenarbeit in der') }}
                                        <em>{{
                                            $t(
                                                'Heimvolkshochschule Alte Molkerei Frille:'
                                            )
                                        }}</em></strong
                                    >
                                    {{
                                        $t(
                                            'geschlechtsbezogene Pädagogik, Gewaltprävention, Förderung von sozialer Kompetenz und Erarbeitung von Konfliktlösungen mit Jungen'
                                        )
                                    }}
                                </p>

                                <p>
                                    2009–2010:
                                    <strong
                                        >{{
                                            $t(
                                                'Hilfen zur Erziehung bei der Björn-Schulz-Stiftung:'
                                            )
                                        }} </strong
                                    >{{
                                        $t(
                                            'Erziehungsbeistand (§ 30 SGB VIII) und Sozialpädagogische Familienhilfe (§ 31 SGB VIII); Unterstützung von Familien mit einem schwerbehinderten Kind; Arbeit mit nichtbehinderten männlichen Geschwisterkindern und deren spezifischen Problemlagen; Beratung von Eltern in Erziehungsfragen und bei Konflikten'
                                        )
                                    }}
                                </p>

                                <p>
                                    2002–2006:
                                    <strong
                                        >{{
                                            $t(
                                                'Jungenarbeit bei Dissens e. V. und Pat-Ex e. V.:'
                                            )
                                        }}
                                    </strong>
                                    {{
                                        $t(
                                            'Vorbereitung, Durchführung und Nachbereitung von Projekttagen und -wochen für Jungen zu Streitkultur, Sexualität, Berufswahl und männlicher Sozialisation; Betreuung der Besucher des Jungentreffs im offenen Bereich: Durchführung von Einzelgesprächen, Gesprächsrunden, Freizeitgestaltung und Sportangeboten'
                                        )
                                    }}
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>{{ $t('Freiwilligendienst') }}</strong> in
                            Tel Aviv-Jaffa/Israel (2009)
                        </li>

                        <li>
                            {{ $t('Anstellung bei der') }}
                            <strong>{{
                                $t('Nachrichtenagentur Reuters')
                            }}</strong>
                            (2004-2008) ({{ $t('studienbegleitend') }})
                        </li>

                        <li>
                            <strong>{{ $t('Psychosoziale Betreuung') }}</strong>
                            {{ $t('beim Psychosozialen') }}
                            Verbund Treptow (2001-2006) ({{
                                $t('studienbegleitend')
                            }})
                        </li>
                    </ul>

                    <!-- ////////// EDUCATION ////////// -->
                    <h3>{{ $t('Ausbildung') }}</h3>

                    <p>
                        2020:
                        {{
                            $t(
                                'Spiced Academy, 3-monatige Vollzeit-Ausbildung vor Ort als'
                            )
                        }}
                        <strong>{{ $t('Full Stack Web-Entwickler') }}</strong>
                        {{ $t('mit einem JavaScript-Schwerpunkt') }}
                        (Berlin)
                    </p>

                    <p>
                        2019: {{ $t('6-wöchiges') }}
                        <strong>{{ $t('Scrum-Master-Praktikum') }}</strong>
                        {{ $t('bei SuccessYou GmbH') }} (Berlin)
                    </p>

                    <p>
                        1998-2008:
                        <strong
                            >{{
                                $t(
                                    'Studium der Europäischen Ethnologie und Gender Studies'
                                )
                            }}
                        </strong>
                        {{ $t('an der Humboldt-Universität zu Berlin') }}
                    </p>

                    <p>
                        2004: {{ $t('3-monatiges') }}
                        <strong>{{
                            $t('Praktikum im Europäischen Parlament')
                        }}</strong>
                        ({{ $t('Brüssel') }})
                    </p>

                    <p>
                        1997-1998:
                        <strong
                            >{{ $t('Freiwilliges Ökologisches Jahr') }}
                        </strong>
                        {{ $t('bei der') }}
                        BUNDjugend (Berlin)
                    </p>

                    <p>
                        1989-1997: <strong>{{ $t('Abitur') }}</strong>
                        {{ $t('an der Sophie-Charlotte-Oberschule') }} (Berlin)
                    </p>

                    <p>
                        1994-1995:
                        <strong>{{ $t('Abschluss (Graduation)') }}</strong> Dyer
                        County High School (Tennessee/USA)
                    </p>

                    <!-- ////////// CERTIFICATES & TRAININGS ////////// -->

                    <h3>{{ $t('Zertifikate, Fort- & Weiterbildungen') }}</h3>

                    <p>
                        2020: Professional Scrum Master (PSM I)
                        {{ $t('und') }} Professional Scrum Product Owner (PSPO
                        I)
                    </p>

                    <p>
                        2012-2013:
                        {{ $t('Weiterbildung zum Verfahrensbeistand') }}
                    </p>

                    <p>2010: {{ $t('Weiterbildung zum Betzavta-Trainer') }}</p>

                    <p>2005–2006: {{ $t('1-jährige Shiatsu-Ausbildung') }}</p>

                    <p>
                        2005:
                        {{ $t('Ausbildung zum Jugendgruppenleiter') }} (JuLeiCa)
                    </p>

                    <p>
                        {{
                            $t(
                                'Agilität, Projektmanagement, Moderation, Argumentations-, Kommunikations- und Diskussionstrainings, Visualisierung, Fundraising, Presse- und Öffentlichkeitsarbeit, Social Media, Blended Learning, OER, Hate & Counter-Speech, Interviewführung, Antidiskriminierungspädagogik, Social Justice, [Intersektionale Gewaltprävention](https://www.dissens.de/isgp/fortbildung.php), Sexualisierte Gewalt an Jungen, Neonazismus/Rechtsextremismus, Critical Whiteness, Handeln gegen Alltagsrassismus, Antisemitismus und viele mehr'
                            )
                        }}
                    </p>

                    <!-- ////////// AREAS OF EXPERTISE ////////// -->

                    <h3 id="expertise">Areas of expertise</h3>

                    <p>Research, practice and theory on the topics:</p>

                    <ul>
                        <li>Multidimensional Discrimination/Privilege</li>

                        <li>Gender Reflective Pedagogy</li>

                        <li>Boys' work</li>

                        <li>
                            Gender and neo-Nazism (among others interphobia,
                            manosphere, incels)
                        </li>

                        <li>Intersex in education and pedagogy</li>

                        <li>Queer theory and masculinity</li>

                        <li>(sexualized) violence</li>

                        <li>Antisemitism, racism, critical whiteness</li>

                        <li>
                            National Socialism, politics of memory and family
                            biographies
                        </li>

                        <li>
                            Disability Studies, Eugenics and NS-'euthanasia'
                        </li>

                        <li>
                            Digitalization, social media, hate speech,
                            algorithmic discrimination
                        </li>

                        <li>Agility, Scrum</li>
                    </ul>
                </div>
            </div>

            <nuxt-link
                :to="localePath('about')"
                title="Scroll to top"
                @click.native="scrollToTop"
            >
                <img
                    src="/icons/triangle-sharp.svg"
                    alt="icon for features"
                    class="triangle-to-top"
            /></nuxt-link>
        </div>

        <!-- //////////////// VOLUNTEER WORK //////////////// -->

        <div class="container-four">
            <div class="text-area-four">
                <h2>Volunteer work</h2>
                <p>
                    Member of the <strong>advisory board</strong> of the
                    <a href="https://oiigermany.org/" target="_blank"
                        >Organization Intersex International (OII / IVIM)
                        Germany</a
                    >
                </p>
            </div>
        </div>

        <div id="circle"></div>

        <!-- <div class="footer nav-fixed-bottom">
            Pen by:<br />
            Justin Tan | UI/UX Designer | Front End Developer
        </div> -->
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
            title: 'About Andreas Hechler',
            meta: []
        }
    }
}
</script>

<style scoped>
.container-one,
.container-two,
.container-three,
.container-four {
    transform: skew(0deg, -6deg);
    -webkit-transform: skew(0deg, -6deg);
    padding: 0 15em 0 5em;
}

.container-one {
    margin-top: -4vh;
    background-color: #292f3b;
}

.container-two {
    background-color: #efefef;
}

.container-three {
    background-color: #292f3b;
    mix-blend-mode: difference;
}

.container-four {
    margin-top: 1vh;
    background-color: white;
}

.text-area-one,
.text-area-two,
.text-area-four {
    transform: skew(0deg, 6deg);
    -webkit-transform: skew(0deg, 6deg);
}

.text-area-one {
    padding-top: 6em;
    padding-bottom: 5em;
}

.text-area-two {
    padding: 1em 0 5em 0;
}

.text-area-four {
    padding: 5em 0 0;
}

.text-area-one h1,
.text-area-two h1 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 3em;
    font-weight: 700;
    color: white;
    line-height: 130%;
}

.text-area-one h2,
.text-area-two h2,
.text-area-four h2 {
    font-family: 'Ubuntu-Light', sans-serif;
    font-size: 2.4em;
    font-weight: 700;
}

.text-area-one h2 {
    margin-top: 1em;
    color: white;
    mix-blend-mode: difference;
}

.text-area-two h2 {
    color: #333333;
    margin: 3em 0 0.4em 0;
}

.text-area-four h2 {
    color: #333333;
    margin: 1em 0 0.4em 0;
}

.text-area-one p {
    color: white;
    padding: 0.5em 0;
    line-height: 150%;
    font-weight: 400;
}

.text-area-two p {
    color: #333333;
    padding: 0.5em 0;
    line-height: 150%;
    font-weight: 400;
}

.less-margin-bottom {
    margin-bottom: -1em;
}

.indent-after-heading-two {
    padding-left: 3em;
    padding-top: 1em;
}

h3 {
    font-size: 1.5em;
    font-variant: small-caps;
    color: white;
    padding-bottom: 0.5em;
    padding-top: 2em;
}

ul {
    margin-left: -1em;
}

li {
    color: white;
    font-size: 1.2em;
    /* font-weight: 350; */
    padding: 0.4em 0;
}

details {
    color: white;
    padding-left: 1em;
    padding-bottom: 0.4em;
}

details p {
    margin-left: 6.2em;
    text-indent: -5.3em;
}

details .indent-content-in-details {
    margin-left: 11.5em;
}

.triangle-to-top-one {
    /* filter: invert(); */
    /* filter: grayscale(70%); */
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(190deg)
        brightness(110%) contrast(100%);
    margin-left: 75vw;
    height: 2em;
    font-size: 2em;
    transform: translateY(0.32em);
}

.triangle-to-top {
    filter: invert();
    margin-left: 70vw;
    height: 2em;
    font-size: 2em;
    transform: translateY(0.5em);
}

#circle {
    height: 5em;
    width: 5em;
    border: 0.6em purple solid;
    border-radius: 50%;
    margin: 5em auto;
}

.footer {
    padding: 140px 0 10px 0;
    color: #ffffff;
    background-color: #292f3b;
    margin-top: -70px;
}
</style>
