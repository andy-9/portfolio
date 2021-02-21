<template>
    <div>
        <div class="publications-container">
            <h1 id="top">{{ $t('Veröffentlichungen') }}</h1>

            <div class="language-container">
                <nuxt-link
                    :to="{ path: 'publications', hash: '#deutsch' }"
                    :title="
                        $t('Publikationen, Vorträge und Interviews auf Deutsch')
                    "
                    >Deutsch</nuxt-link
                >

                <nuxt-link
                    :to="{ path: 'publications', hash: '#english' }"
                    :title="
                        $t(
                            'Publikationen, Vorträge und Interviews auf Englisch'
                        )
                    "
                    >English</nuxt-link
                >

                <nuxt-link
                    :to="{ path: 'publications', hash: '#turkce' }"
                    :title="$t('Publikationen auf Türkisch')"
                    >Türkçe</nuxt-link
                >

                <nuxt-link
                    :to="{ path: 'publications', hash: '#francais' }"
                    :title="$t('Publikationen auf Französisch')"
                    >Français</nuxt-link
                >
            </div>

            <p class="margin-top">{{ $t('Ich schreibe nicht nur Code') }}.</p>
            <p>
                {{
                    $t(
                        'Ich habe in den vergangenen Jahren eine Reihe von Artikeln geschrieben - von wissenschaftlichen Fachartikeln bis hin zu Blogposts'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        "Die Themen, mit denen ich mich beschäftige, reichen von NS-'Euthanasie' über Neonazismus, Männlichkeit und Sexismus bis hin zu Intergeschlechtlichkeit. Mehr zu meinen Themenschwerpunkten"
                    )
                }}
                <nuxt-link
                    :to="{ path: 'about', hash: '#expertise' }"
                    :title="$t('Themenschwerpunkte von mir')"
                    >{{ $t('hier.') }}</nuxt-link
                >
                {{ $t('Die meisten meiner Texte sind auch auf') }}
                <a
                    href="https://independent.academia.edu/AndreasHechler"
                    target="_blank"
                    rel="noreferrer"
                    >Academia</a
                >
                {{ $t('und') }}
                <a
                    href="https://www.researchgate.net/profile/Andreas_Hechler"
                    target="_blank"
                    rel="noreferrer"
                    >ResearchGate</a
                >{{ $t(' zu finden. Viele von ihnen sind auf') }}
                <nuxt-link
                    :to="{ path: 'publications', hash: '#deutsch' }"
                    :title="
                        $t('Publikationen, Vorträge und Interviews auf Deutsch')
                    "
                    >{{ $t('Deutsch') }}</nuxt-link
                >, {{ $t('einige wurden aber auch ins') }}
                <nuxt-link
                    :to="{ path: 'publications', hash: '#english' }"
                    :title="
                        $t(
                            'Publikationen, Vorträge und Interviews auf Englisch'
                        )
                    "
                    >{{ $t('Englische') }}</nuxt-link
                >
                {{ $t('und einige sogar ins') }}
                <nuxt-link
                    :to="{ path: 'publications', hash: '#turkce' }"
                    :title="$t('Publikationen auf Türkisch')"
                    >{{ $t('Türkische') }}</nuxt-link
                >
                {{ $t('und') }}

                <nuxt-link
                    :to="{ path: 'publications', hash: '#francais' }"
                    :title="$t('Publikationen auf Französisch')"
                    >{{ $t('Französische') }}</nuxt-link
                >
                {{ $t('übersetzt') }}.
            </p>
            <p>
                {{ $t('Unten findet sich auch eine Auswahl von') }}

                <nuxt-link
                    :to="{ path: 'publications', hash: talksHash }"
                    :title="$t('Vorträge')"
                    >{{ $t('Vorträgen') }}</nuxt-link
                >
                {{ $t('und') }}
                <nuxt-link
                    :to="{ path: 'publications', hash: interviewHash }"
                    :title="$t('Interviews')"
                    >{{ $t('Interviews') }}</nuxt-link
                >{{ $t(', die ich gegeben habe') }}.
            </p>

            <span>
                <nuxt-link
                    :to="{ localePath: 'publications' }"
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

            <!-- ///////////////////// ANIMATION ///////////////////// -->

            <span id="peeler" class="peeler-transition">
                <div class="reveal circle_wrapper">
                    <p class="circle">
                        ...{{ $t("und lies' den ganzen Kram") }}! 📚
                    </p>
                </div>

                <div class="sticky peeler-transition">
                    <div class="front circle_wrapper peeler-transition">
                        <div class="circle peeler-transition"></div>
                    </div>
                </div>

                <h4>{{ $t("Schäl' mich") }}!</h4>

                <div class="sticky peeler-transition">
                    <div class="back circle_wrapper peeler-transition">
                        <div class="circle peeler-transition"></div>
                    </div>
                </div>
            </span>

            <hr />

            <!-- ///////////////////// DEUTSCH ///////////////////// -->

            <h2 id="deutsch">Deutsch</h2>

            <p>
                Groß, Melanie / Hechler, Andreas (2021): Intergeschlechtlichkeit
                als Herausforderung für Fachkräfte in Erziehungs- und
                Bildungseinrichtungen. In: Groß, Melanie / Niedenthal, Katrin
                (Hrsg.):
                <a
                    href="https://www.transcript-verlag.de/978-3-8376-5341-0/geschlecht-divers/"
                    target="_blank"
                    rel="noreferrer"
                    >Geschlecht: Divers. Die "Dritte Option" im
                    Personenstandsgesetz - Perspektiven für die Soziale
                    Arbeit</a
                >. Bielefeld, transcript, Verlag, S. 211-223.
            </p>
            <p>
                Hechler, Andreas (2020):
                <a
                    href="https://rechtsextremismus-und-familie.de/mediapool/funktionalisierte_kinder_online.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >Funktionalisierte Kinder. Kindeswohlgefährdung in
                        Neonazifamilien – eine Hilfestellung für Fachkräfte in
                        den Bereichen Recht und (Sozial-)Pädagogik</strong
                    ></a
                >. Herausgegeben von der
                <a
                    href="https://rechtsextremismus-und-familie.de/"
                    target="_blank"
                    rel="noreferrer"
                    >Fachstelle Rechtsextremismus und Familie</a
                >
                / Lidicehaus. Bremen: Eigendruck.
            </p>
            <p class="less-distance">
                <a
                    href="https://issuu.com/lidicehaus/docs/ruf_funktionalisierte_kinder"
                    target="_blank"
                    rel="noreferrer"
                    >Online angucken</a
                >
            </p>
            <p class="less-distance">
                Interviews im
                <a
                    href="https://www.neues-deutschland.de/artikel/1144806.rechte-familien-es-ist-so-gemein-was-diesen-kindern-angetan-wird.html"
                    target="_blank"
                    rel="noreferrer"
                    >Neuen Deutschland</a
                >
                und dem
                <a
                    href="https://www.freitag.de/autoren/peter-nowak/wenn-die-eltern-nazis-sind"
                    target="_blank"
                    rel="noreferrer"
                    >Blog des Freitag</a
                >, Rezensionen in der
                <a
                    href="https://jungle.world/artikel/2020/47/hakenkreuze-malen-der-kita"
                    target="_blank"
                    rel="noreferrer"
                    >Jungle World</a
                >
                und dem
                <a
                    href="https://www.bnr.de/artikel/hintergrund/neonazis-und-kindeswohlgef-hrdung"
                    target="_blank"
                    rel="noreferrer"
                    >Blick nach Rechts</a
                >
            </p>

            <p>
                Hechler, Andreas / Baar, Robert (2020):
                <strong
                    >Mehr als zwei. Intergeschlechtlichkeit in der
                    (Grund-)Schule</strong
                >. In:
                <a
                    href="https://www.friedrich-verlag.de/shop/jenseits-der-norm-516321"
                    target="_blank"
                    rel="noreferrer"
                    >Die Grundschulzeitschrift</a
                >, Nr. 321, Juni 2020, 34. Jg. Hannover: Friedrich Verlag, S.
                40–43.
            </p>

            <p>
                Hechler, Andreas (2020):
                <a
                    href="https://www.arbeitundleben.de/images/download/ARBEIT-UND-LEBEN_Jahrbuch_2019-2020.pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Nicht nur, sondern auch</strong></a
                >. In: Bundesarbeitskreis Arbeit und Leben DGB/VHS: Für soziale
                Gerechtigkeit, gegen Ausgrenzung und Rassismus. Jahrbuch
                2019/2020. Wuppertal: Eigendruck, S. 47–48.
            </p>

            <p class="no-bottom-margin">
                Hechler, Andreas (2020): Texte zu
                <a
                    href="https://inter-nrw.de/category/educators/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Intergeschlechtlichkeit und Pädagogik</strong></a
                >
                auf
                <a href="https://inter-nrw.de/" target="_blank" rel="noreferrer"
                    >inter-nrw.de:</a
                >
            </p>
            <ul>
                <li>
                    <a
                        href="https://inter-nrw.de/hinweise-zu-fuer-paedagoginnen/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Hinweise für Pädagog*innen</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/inter-in-bildung-und-lehre-integrieren/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Inter* in Bildung und Lehre integrieren</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/dos-donts-fuer-paedagoginnen-tipps-fuer-einen-guten-umgang/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Dos &amp; Don'ts für Pädagog*innen – Tipps für
                            einen guten Umgang</strong
                        >
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/arbeitsmaterial/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Arbeitsmaterial</strong>
                    </a>
                </li>
            </ul>

            <p>
                Hechler, Andreas (2019):
                <a
                    href="/files/Hechler - Interdiskriminierung in der extremen Rechten (2019).pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >"Missbildung" – Interdiskriminierung in der extremen
                        Rechten</strong
                    ></a
                >. In: FIPU (Hg.):
                <a
                    href="https://www.mandelbaum.at/buch.php?id=891&menu=buecher"
                    target="_blank"
                    rel="noreferrer"
                >
                    Rechtsextremismus, Band 3: Geschlechterreflektierte
                    Perspektiven</a
                >. Wien/Berlin: mandelbaum Verlag kritik &amp; utopie, S.
                88–122.
            </p>

            <p>
                Hechler, Andreas (2019):

                <a
                    href="/files/Hechler - Alles fuer alle (2019).pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Alles für alle! Geschlechterreflektierte Pädagogik
                        gegen Rechts</strong
                    ></a
                >. In:
                <a
                    href="https://www.bjr.de/service/juna.html"
                    target="_blank"
                    rel="noreferrer"
                    >juna – ‎Jugendnachrichten des Bayerischen Jugendrings</a
                >, Nr. 01/2019, S. 23.
            </p>

            <p>
                Hechler, Andreas (2019):
                <a
                    href="https://ficko-magazin.de/den-zweifel-naehren/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Den Zweifel nähren. Meine kritische Auseinandersetzung
                        mit Männlichkeit</strong
                    ></a
                >. In: FICKO-Magazin vom 12.02.2019.
            </p>

            <p>
                Hechler, Andreas (2019):
                <a
                    href="https://www.annefrank.de/fileadmin/Redaktion/Themenfelder/Zivilgesellschaft_staerken/Dokumente/Diskriminierung__Fokus_Kita.pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Was ist Diskriminierung?</strong></a
                >
                Umfangreiches Handout für das Anne Frank Zentrum Berlin und das
                Deutsche Rote Kreuz Thüringen mit einem Fokus auf den Bereich
                Kita.
            </p>

            <p>
                Hechler, Andreas (2019):
                <a
                    href="https://www.queer.de/detail.php?article_id=32783"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Wie berichte ich über die "Dritte Option"? Eine
                        polemische Anleitung für Journalist*innen</strong
                    ></a
                >. In: queer.de vom 19.01.2019.
            </p>

            <p>
                Hechler, Andreas (2018):
                <a
                    href="/files/Hechler - Diagnosen von Gewicht 2 (2018).pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Diagnosen von Gewicht. Innerfamiliäre Folgen der
                        Ermordung meiner als "lebensunwert" diagnostizierten
                        Urgroßmutter</strong
                    ></a
                >. In: Rotzoll, Maike u.a. (Hrsg.):
                <a
                    href="https://psychiatrie-verlag.de/product/der-regional-vernetzte-krankenmord/"
                    target="_blank"
                    rel="noreferrer"
                    >Der regional vernetzte Krankenmord. Die Heil- und
                    Pflegeanstalt Klingenmünster/Pfalz in Verbindung mit Baden,
                    Bayern, Elsass und Lothringen</a
                >. Köln: Psychiatrie Verlag, S. 204–213.
            </p>

            <p>
                Hechler, Andreas (2017):
                <a
                    href="http://blog.feministische-studien.de/2017/08/aus-der-bahn-geworfen/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Aus der Bahn geworfen</strong></a
                >. In: Blog der feministischen studien vom 16. August 2017. (Zum
                Begriff 'Widerfahrnis')
            </p>

            <details>
                <summary>{{ $t('Mehr') }}</summary>

                <p>
                    Hechler, Andreas (2016):
                    <a
                        href="http://www.bpb.de/politik/extremismus/rechtsextremismus/232123/andreas-hechler-entscheidend-ist-der-kontext"
                        target="_blank"
                        rel="noreferrer"
                        ><strong>Entscheidend ist der Kontext</strong></a
                    >. In: Bundeszentrale für politische Bildung vom 3.08.2016.
                    Debatte: Soll man mit Neonazis reden?
                </p>

                <p>
                    Hechler, Andreas (2016):
                    <a
                        href="https://www.psychosozial-verlag.de/catalog/dispatch-free.php?id=6799"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >"Was ist es denn?" Intergeschlechtlichkeit in
                            Bildung, Pädagogik und Sozialer Arbeit</strong
                        ></a
                    >. In: Katzer, Michaela / Voß, Heinz-Jürgen (Hrsg.):
                    <a href="https://www.psychosozial-verlag.de/6799"
                        >Geschlechtliche, sexuelle und reproduktive
                        Selbstbestimmung. Praxisorientierte Zugänge</a
                    >. Psychosozial-Verlag, Gießen, S. 161–185.
                </p>

                <p class="no-bottom-margin">
                    Hechler, Andreas / Stuve, Olaf (Hrsg.) (2015):
                    <a
                        href="https://library.oapen.org/viewer/web/viewer.html?file=/bitstream/handle/20.500.12657/25626/1004470.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Geschlechterreflektierte Pädagogik gegen
                            Rechts</strong
                        ></a
                    >. Verlag Barbara Budrich, Opladen/Berlin/Toronto.
                </p>

                <ul>
                    <li>
                        Dies.:
                        <a
                            href="http://budrich.de/Zusatzmaterialien/9783847406952_Einleitung.pdf"
                            target="_blank"
                            rel="noreferrer"
                            ><strong>Einleitung</strong></a
                        >, S. 7–42.
                    </li>

                    <li>
                        Dies.:
                        <a
                            href="http://www.budrich.de/DDD/HechlerStuve.pdf"
                            target="_blank"
                            rel="noreferrer"
                            ><strong
                                >Weder 'normal' noch 'richtig':
                                Geschlechterreflektierte Pädagogik als Grundlage
                                einer Neonazismusprävention</strong
                            ></a
                        >, S. 44–72.
                    </li>

                    <li>
                        Könnecke, Bernard / Laumann, Vivien / Hechler, Andreas:
                        <a
                            href="http://gerenep.dissens.de/fileadmin/gerenep/redakteure/docs/gerenep-methodenbeschreibung-praxissituationen-entgeschlechtlichen.pdf"
                            target="_blank"
                            rel="noreferrer"
                            ><strong
                                >Methode: Praxissituationen
                                entgeschlechtlichen</strong
                            ></a
                        >, S. 73–78.
                    </li>

                    <li>
                        Debus, Katharina / Hechler, Andreas:
                        <a
                            href="http://gerenep.dissens.de/fileadmin/gerenep/redakteure/docs/gerenep-methodenbeschreibung-der-grosse-preis.pdf"
                            target="_blank"
                            rel="noreferrer"
                            ><strong>Methode: Der große Preis</strong></a
                        >, S. 100–106.
                    </li>

                    <li>
                        <a
                            href="https://library.oapen.org/viewer/web/viewer.html?file=/bitstream/handle/20.500.12657/25626/1004470.pdf"
                            target="_blank"
                            rel="noreferrer"
                            ><strong
                                >Beharrliche Bilder. Bildsprache und
                                geschlechterreflektierte
                                Neonazismusprävention</strong
                            ></a
                        >, S. 223–237 (gekürzt und überarbeitet
                        <a
                            href="https://forschungsgruppefipu.wordpress.com/2017/11/07/beharrliche-bilder/"
                            target="_blank"
                            rel="noreferrer"
                            >hier</a
                        >).
                    </li>
                </ul>

                <p>
                    Hechler, Andreas (2015):
                    <a
                        href="/files/Hechler - Diagnosen von Gewicht (2015).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Diagnosen von Gewicht. Innerfamiliäre Folgen der
                            Ermordung meiner als 'lebensunwert' diagnostizierten
                            Urgroßmutter</strong
                        ></a
                    >. In: Cora Schmechel u.a. (Hrsg.):
                    <a
                        href="http://www.edition-assemblage.de/gegendiagnose/"
                        target="_blank"
                        rel="noreferrer"
                        >Gegendiagnose. Beiträge zur radikalen Kritik an
                        Psychologie und Psychiatrie</a
                    >. edition assemblage, Münster, S. 143–193.
                </p>

                <p>
                    Hechler, Andreas (2015):
                    <a
                        href="/files/Hechler - Intergeschlechtlichkeit in Bildung (2015).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Intergeschlechtlichkeit in Bildung, Pädagogik und
                            Sozialer Arbeit</strong
                        ></a
                    >. In: BMFSFJ (Hrsg.):
                    <a
                        href="http://www.bmfsfj.de/RedaktionBMFSFJ/Broschuerenstelle/Pdf-Anlagen/Geschlechtliche-Vielfalt,property=pdf,bereich=bmfsfj,sprache=de,rwb=true.pdf"
                        target="_blank"
                        rel="noreferrer"
                        >Geschlechtliche Vielfalt. Begrifflichkeiten,
                        Definitionen und disziplinäre Zugänge zu Trans- und
                        Intergeschlechtlichkeiten. Begleitforschung zur
                        Interministeriellen Arbeitsgruppe Inter- &amp;
                        Transsexualität</a
                    >. Berlin, S. 61–74.
                </p>

                <p>
                    Stuve, Olaf / Hechler, Andreas (2015):
                    <a
                        href="/files/Stuve_Hechler - Geschlechterreflektierende Neonazismusprävention (2015).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Geschlechterreflektierende
                            Neonazismusprävention</strong
                        ></a
                    >. In: deutsche jugend, Nr. 4, 63. Jg., S. 166–175.
                </p>

                <p>
                    Hechler, Andreas (2014):
                    <a
                        href="/files/Hechler - Intergeschlechtlichkeit in Paedagogik (Sozialmagazin 2014).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Intergeschlechtlichkeit als Thema in Pädagogik und
                            Sozialer Arbeit</strong
                        ></a
                    >. In: Sozialmagazin, Nr. 3–4/2014, 39. Jg., S. 46–53.
                </p>

                <p>
                    Hechler, Andreas (2014):
                    <a
                        href="/files/Hechler - Maennlichkeitskritische Neonazismusprävention (2014).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Männlichkeitskritische
                            Neonazismusprävention</strong
                        ></a
                    >. In: Baer, Silke / Möller, Kurt / Wiechmann, Peer (Hrsg.):
                    <a
                        href="https://shop.budrich-academic.de/produkt/verantwortlich-handeln-praxis-der-sozialen-arbeit-mit-rechtsextrem-orientierten-und-gefaehrdeten-jugendlichen/?v=3a52f3c22ed6"
                        target="_blank"
                        rel="noreferrer"
                        >Verantwortlich Handeln: Praxis der Sozialen Arbeit mit
                        rechtsextrem orientierten und gefährdeten
                        Jugendlichen</a
                    >. Opladen/Berlin/Toronto: Verlag Barbara Budrich, S.
                    103–113.
                </p>

                <p>
                    Hechler, Andreas (2014):
                    <a
                        href="/files/Hechler - Diskussion zu Gender und Rechtsextremismus(-praevention) (2014).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Diskussion zu Gender und
                            Rechtsextremismus(-prävention)</strong
                        >
                    </a>
                    im Themenforum des BIKnetz vom 17.–23. Februar 2014.
                </p>

                <p>
                    Hechler, Andreas / Stuve, Olaf / Wielowiejski, Patrick
                    (2013):
                    <a
                        href="/files/Hechler_Stuve_Wielowiejski - Geschlechterreflektierende Neonazismuspraevention (2013).pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Geschlechterreflektierende Neonazismusprävention.
                            Mädchen- und Jungenbilder im Neonazismus –
                            Fortbildung, Praxisprojekte und Beratungen für eine
                            Präventionsarbeit</strong
                        ></a
                    >. In: Switchboard. Zeitschrift für Männer und Jungenarbeit,
                    Nr. 204, Winter 2013, S. 30–34.
                </p>

                <p>
                    Hechler, Andreas (2013):
                    <a
                        href="http://www.kritisch-lesen.de/rezension/hermstories"
                        target="_blank"
                        rel="noreferrer"
                        ><strong>Hermstories</strong></a
                    >. Rezension des Buches "Inter – Erfahrungen
                    intergeschlechtlicher Menschen in der Welt der zwei
                    Geschlechter". In: kritisch lesen, Ausgabe 30 vom 1. Oktober
                    2013.
                </p>

                <p>
                    Hechler, Andreas (2012):
                    <a
                        href="https://gerenep.dissens.de/geschlechterreflektierte-neonazismuspraevention/publikationen-von-dissens-mitarbeitenden-zum-thema/hechler-jungenarbeit-und-neonazismuspraevention"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Männlichkeitskonstruktionen, Jungenarbeit und
                            Neonazismus-Prävention</strong
                        ></a
                    >. In: Dissens e.V. &amp; Debus, Katharina / Könnecke,
                    Bernard / Schwerma, Klaus / Stuve, Olaf (Hg.):
                    <a
                        href="https://www.dissens.de/fileadmin/JuS/Redaktion/Dokumente/Buch/Geschlechterreflektierte_Arbeit_mit_Jungen_an_der_Schule_Dissens_e.V-3.pdf"
                        target="_blank"
                        rel="noreferrer"
                        >Geschlechterreflektierte Arbeit mit Jungen an der
                        Schule. Texte zu Pädagogik und Fortbildung rund um
                        Jungenarbeit, Geschlecht und Bildung</a
                    >. Berlin: Eigendruck, S. 73–91.
                </p>

                <p>
                    Hechler, Andreas (2012):
                    <a
                        href="http://www.jungenarbeit-und-schule.de/fileadmin/JuS/Redaktion/Dokumente/Buch/Hechler%20-%20Intergeschlechtlichkeit.pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Intergeschlechtlichkeit als Thema
                            geschlechterreflektierender Pädagogik</strong
                        ></a
                    >. In: Dissens e.V. &amp; Debus, Katharina / Könnecke,
                    Bernard / Schwerma, Klaus / Stuve, Olaf (Hg.):
                    <a
                        href="https://www.dissens.de/fileadmin/JuS/Redaktion/Dokumente/Buch/Geschlechterreflektierte_Arbeit_mit_Jungen_an_der_Schule_Dissens_e.V-3.pdf"
                        target="_blank"
                        rel="noreferrer"
                        >Geschlechterreflektierte Arbeit mit Jungen an der
                        Schule. Texte zu Pädagogik und Fortbildung rund um
                        Jungenarbeit, Geschlecht und Bildung</a
                    >. Berlin: Eigendruck, S. 125–135.
                </p>

                <p>
                    Diewald, Heidi / Hechler, Andreas / Kröger, Fabian (2008):
                    <a
                        href="/files/Diewald_Hechler_Kroeger_-_Die_alltaegliche_Folter_in_Deutschland_[2008].pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Intersexualität – Die alltägliche Folter in
                            Deutschland</strong
                        ></a
                    >. In: Intersexuelle Menschen e. V. / XY-Frauen:
                    <a
                        href="https://www.im-ev.de/pdf/Schattenbericht_CEDAW_2008-Intersexuelle_Menschen_e_V.pdf"
                        target="_blank"
                        rel="noreferrer"
                        >Schattenbericht zum 6. Staatenbericht der BRD zum
                        Übereinkommen der Vereinten Nationen zur Beseitigung
                        jeder Form der Diskriminierung der Frau (CEDAW)</a
                    >. Hamburg, S. 87–125.
                </p>

                <p>
                    Hechler, Andreas (2008):
                    <a
                        href="/files/Hechler - Voids in Brandenburg (2008).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Voids in Brandenburg – Folgen des deutschen
                            Antisemitismus</strong
                        ></a
                    >. In: JungdemokratInnen / Junge Linke Brandenburg: I
                    remember, remember the 9th of november – Die Erinnerung und
                    das Gedenken an die Novemberpogrome in Deutschland.
                    Berlin-Brandenburg: Eigendruck, S. 37–55.
                </p>

                <p>
                    Krabel, Jens / Hechler, Andreas (2007):
                    <a
                        href="/files/Krabel_Hechler - Für Jungen (und Maedchen) geeignet (2007).pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Für Mädchen und Jungen geeignet</strong></a
                    >. Jungenarbeit in der Kita. In: Welt des Kindes, Nr. 1,
                    Januar/Februar 2007, 85. Jahrgang, S. 22–25.
                </p>

                <p>
                    Hechler, Andreas (2007):
                    <a
                        href="/files/Hechler - Wer fehlt (2007).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Wer fehlt? Voids in Reinhardtsdorf-Schöna</strong
                        ></a
                    >. In: Blask, Falk (Hg.): Ein Dorf voller Narren. Karneval –
                    Idylle – Rechtsextremismus. Berliner Blätter, Sonderheft
                    43/2007. Münster/Hamburg/Berlin/London: Lit Verlag, S.
                    171–196.
                </p>

                <p>
                    Hechler, Andreas (2006):
                    <a
                        href="/files/Hechler - Taeter_innenforschung aus privilegierter Position (2006).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Täter_innenforschung aus privilegierter Position.
                            Rassismus und Antisemitismus im Feld</strong
                        ></a
                    >. In: feldnotizen, Ausgabe 1, S. 11-23.
                </p>

                <p>
                    Hechler, Andreas (2004):
                    <a
                        href="/files/Hechler - Der Kuhzaun (2004).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Der Kuhzaun – Jungenarbeit in Reinickendorf</strong
                        ></a
                    >. In: Die Stadtteilzeitung, Ausgabe Mai 2004, S. 12–13.
                </p>

                <p>
                    Hechler, Andreas (2003):
                    <a
                        href="/files/Hechler - Projektwoche Liebe-Freundschaft-Sexualitaet (2003).pdf"
                        target="_blank"
                        rel="noreferrer"
                        ><strong
                            >Projektwoche "Liebe – Freundschaft –
                            Sexualität"</strong
                        ></a
                    >. In: "Znarelot – Toleranz". Projektarbeit in
                    Marzahn-Hellersdorf 2002. Geschlechterdifferenzierte Arbeit
                    mit Jungen und Mädchen im Kinder- und Jugendfreizeitbereich.
                    Dokumentation, S. 45–50.
                </p>
            </details>

            <!-- ///////////////////////////////////// VORTRÄGE ///////////////////////////////////// -->

            <h3 id="talks_de">
                Vorträge (Auswahl)
            </h3>

            <p>
                11/2020: "<a
                    href="https://www.youtube.com/watch?v=GrJ8d6vyVs8"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Krisengebrüll – Weiblichkeitsabwehr und viriler
                        Resouveränisierungsterror</strong
                    ></a
                >" [ab 1:03:29]. Vortrag im Rahmen der Münchner Veranstaltung
                "<a
                    href="https://www.muenchen.de/rathaus/Stadtverwaltung/Direktorium/Frauengleichstellung/aktionstag_gegen_gewalt.html"
                    target="_blank"
                    rel="noreferrer"
                    >Strategien gegen Antifeminismus & Frauen*hass</a
                >" mit Franziska Schutzbach und Micky Wenngatz am
                internationalen Tag gegen Gewalt gegen Frauen*.
            </p>
            <video controls width="250" poster="/images/krisengebruell.webp">
                <source
                    src="https://dl.dropboxusercontent.com/s/wd9d5unfph2b5al/Strategien_gegen_Antifeminismus_und_Frauenhass.mp4?dl=0"
                    preload="none"
                    type="video/mp4"
                />
                Sorry, your browser does not support embedded videos.
            </video>
            <!-- src="https://dl.dropboxusercontent.com/s/wd9d5unfph2b5al/Strategien_gegen_Antifeminismus_und_Frauenhass.mp4?dl=0#t=3809" -->

            <p>
                10/2020: "<a
                    href="https://www.topfundsoehne.de/ts/de/service/mediathek/videos/2020/137132.html"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Diagnosen von Gewicht</strong></a
                >". Vortrag zur Ausstellungseröffnung "<a
                    href="https://www.topfundsoehne.de/ts/de/service/aktuelles/ausstellungen/2020/136718.html"
                    target="_blank"
                    rel="noreferrer"
                    >Wohin bringt ihr uns? 'Euthanasie'-Verbrechen im
                    Nationalsozialismus</a
                >" im Erinnerungsort Topf & Söhne – Die Ofenbauer von Auschwitz
                in Erfurt.
            </p>
            <video controls width="250">
                <source
                    src="https://dl.dropboxusercontent.com/s/r7nfpviyr105mbb/Hechler_Diagnosen-von-Gewicht.30.10.2020.mp4?dl=0"
                    preload="none"
                    type="video/mp4"
                />
                Sorry, your browser does not support embedded videos.
            </video>

            <p>
                12/2018:
                <strong
                    >"Frauenhasser sucht Frau – Paradoxien und Effekte der
                    Incels"</strong
                >. Vortrag auf dem Symposium
                <a
                    href="https://www.facebook.com/events/269076727130862/"
                    target="_blank"
                    rel="noreferrer"
                >
                    'Antifeminismus im Netz'</a
                >
                der
                <a
                    href="https://www.facebook.com/OnlineCivilCourageDE/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Online Civil Courage Initiative in Berlin</a
                >.
            </p>

            <p>
                10/2018:
                <strong
                    >"Unsäglich – unsagbar? NS-'Euthanasie' und innerfamiliäre
                    Aufarbeitung"</strong
                >. Gespräch mit Barbara Stellbrink-Kesy auf der
                NS-'Euthanasie'-Angehörigentagung in der Gedenkstätte Hadamar.
            </p>

            <p>
                06/2018:
                <strong
                    >"Wer, mit wem und warum? Überlegungen zu einer
                    folgegenerationeninklusiven historisch-politischen
                    Bildungsarbeit zum Nationalsozialismus"</strong
                >. Vortrag zusammen mit Vivien Laumann bei den
                <a
                    href="https://www.nsberatung.de/index.php/de/arbeitsgruppen"
                    target="_blank"
                    rel="noreferrer"
                >
                    Arbeitsgruppen Folgegenerationen</a
                >
                des Bundesverband Information und Beratung für NS-Verfolgte in
                Köln.
            </p>

            <p>
                11/2017:
                <strong>"Von der Freiheit, kein Junge sein zu müssen"</strong>.
                Vortrag beim Fachtag zur Jungenarbeit in Hessen
                <a
                    href="http://www.jungenarbeit-hessen.de/index.php/124-einladung-zur-fachtagung-macht-maennlichkeit-ohnmacht-2"
                    target="_blank"
                    rel="noreferrer"
                >
                    "Macht-Männlichkeit-Ohnmacht?!"</a
                >
                in Frankfurt/M.
            </p>

            <p>
                9/2017 Key Note auf der Tagung
                <a
                    href="http://www.kofas-ggmbh.de/news/2017/8/14/prsentation-der-handreichung-alles-mnnlich-praxistipps-fr-eine-geschlechterreflektierende-fanarbeit"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >"Alles männlich?! Praxistipps für eine
                        geschlechterreflektierende Fanarbeit"</strong
                    >
                </a>
                in der Friedrich-Ebert-Stiftung Berlin.
            </p>

            <p>
                03/2017:
                <strong
                    >"'Zwischendinger' - Cissexismus und Interdiskriminierung
                    von Rechts"</strong
                >. Vortrag auf der Tagung
                <a
                    href="https://intertranswissenschaft.net/tagung-2017/"
                    target="_blank"
                    rel="noreferrer"
                >
                    "Solidarische Bündnisse gegen Diskriminierung und den
                    rechten 'Backlash'? – Perspektiven für Inter* und
                    Trans*-Forschung im Inter*_Trans*-Wissenschaftsnetzwerk"
                </a>
                in Köln.
            </p>

            <p>
                11/2016:
                <strong
                    >"Diagnosen von Gewicht – Innerfamiliäre Folgen der
                    Ermordung meiner als 'lebensunwert' diagnostizierten
                    Urgroßmutter"</strong
                >. Vortrag auf der Herbsttagung
                <a
                    href="http://www.ak-ns-euthanasie.de/wp-content/uploads/2016/02/Herbst_2016.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    "Der regionalvernetzte Krankenmord"</a
                >
                des
                <a
                    href="http://www.ak-ns-euthanasie.de/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Arbeitskreises zur Erforschung der nationalsozialistischen
                    "Euthanasie" und Zwangssterilisation</a
                >
                in Klingenmünster. Ein ähnlicher Vortrag kann hier nachgehört
                werden:
            </p>
            <audio controls>
                <source
                    src="https://dl.dropboxusercontent.com/s/3wz19b69euw4dm6/gegendiagnose.mp3?dl=0"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                11/2016:
                <strong
                    >"Männlichkeit und Neonazismus-(prävention) –
                    Geschlechterreflektierte Pädagogik mit Jungen"</strong
                >. Vortrag auf der Tagung
                <a
                    href="http://www.bag-jungenarbeit.de/termin/hamburg2016"
                    target="_blank"
                    rel="noreferrer"
                >
                    "Rechte Jungen! – Herausforderungen für die Jungenarbeit"</a
                >
                der BAG-Jungenarbeit in Hamburg.
            </p>

            <p>
                03/2016:
                <strong
                    >"'Was, du bist <em>nur ein</em> Geschlecht?!'
                    Geschlechterreflektiertes Handeln gegen Pegida"</strong
                >. Vortrag auf dem Fachforum "'Mach Dich mal grade!' Pegida und
                Geschlecht" in Dresden.
            </p>

            <p>
                10/2015:
                <a
                    href="https://www.dissens.de/fileadmin/gerenep/redakteure/mp3/hechler-stuve-geschlechterreflektierte-paedagogik-gegen-rechts.mp3"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >"Geschlechterreflektierte Pädagogik gegen Rechts –
                        Präsentation der Projektergebnisse und
                        -erfahrungen"</strong
                    ></a
                >. Vortrag zusammen mit Olaf Stuve auf der gleichnamigen
                <a
                    href="https://gerenep.dissens.de/fortbildungsangebote/tagung.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    Fachtagung
                </a>
                in Berlin.
            </p>
            <audio controls>
                <source
                    src="https://www.dissens.de/fileadmin/gerenep/redakteure/mp3/hechler-stuve-geschlechterreflektierte-paedagogik-gegen-rechts.mp3"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                11/2005: Teilnahme an Podiumsdiskussion
                <a
                    href="https://idw-online.de/en/event15188"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >"Tradierungen – Aufhebungen – (Neu)Konstruktionen.
                        Rasse im heutigen deutschen
                        Wissenschaftsbetrieb"</strong
                    ></a
                >
                für die "AG gegen Rassismus" am Zentrum für Literaturforschung
                in Berlin.
            </p>

            <!-- ///////////////////////////////////// INTERVIEWS ///////////////////////////////////// -->

            <h3 id="interviews_de">
                Interviews
            </h3>

            <p>
                Nowak, Peter (2021):
                <a
                    href="https://www.freitag.de/autoren/peter-nowak/wenn-die-eltern-nazis-sind"
                    target="_blank"
                    rel="noreferrer"
                    ><strong> Wenn die Eltern Nazis sind</strong></a
                >. Interview mit Andreas Hechler zu Kindeswohlgefährdung in
                Neonazifamilien. In: Blog des Freitag vom 06.02.2021.
            </p>
            <p>
                Nowak, Peter (2020):
                <a
                    href="https://www.neues-deutschland.de/artikel/1144806.rechte-familien-es-ist-so-gemein-was-diesen-kindern-angetan-wird.html"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >»Es ist so gemein, was diesen Kindern angetan
                        wird«</strong
                    >
                    Nachwuchs als Politikum: Neurechte instrumentalisieren ihre
                    Töchter und Söhne für den vermeintlich höheren Zweck</a
                >. Interview mit Andreas Hechler zu Kindeswohlgefährdung in
                Neonazifamilien. In: Neues Deutschland vom 23.11.2020.
            </p>

            <p>
                Dissens - Institut für Bildung und Forschung (2020): Der
                Dissens-Podcast 'Alles für Alle!'. Sarah Klemm und Ulla
                Wittenzellner im Gespräch mit Andreas Hechler, Mart Busche und
                Olaf Stuve.
            </p>

            <ul>
                <li class="bullet-point-less-distance">
                    <a
                        href="https://www.dissens.de/podcast"
                        target="_blank"
                        rel="noreferrer"
                        >Folge #1 Debatte: Männlichkeit - Teil I.
                        <strong
                            >Was ist Männlichkeit und wohin wollen wir mit der
                            Auseinandersetzung?</strong
                        >
                        (20. Juli 2020)</a
                    >.
                    <audio controls class="distance-audio">
                        <source
                            src="https://dl.dropboxusercontent.com/s/2juxw0ovwytgwkj/Dissens_Podcast_I.mp3?dl=0"
                            type="audio/mp3"
                        />
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </li>

                <li>
                    <a
                        href="https://www.dissens.de/podcast"
                        target="_blank"
                        rel="noreferrer"
                        >Folge #2 Debatte: Männlichkeit - Teil II.
                        <strong
                            >Was motiviert Männer, sich mit Männlichkeit zu
                            beschäftigen?
                        </strong>
                        (27. Juli 2020)</a
                    >.
                    <audio controls class="distance-audio">
                        <source
                            src="https://dl.dropboxusercontent.com/s/zo9ywqfybt6sbur/Dissens_Podcast_II.mp3?dl=0"
                            type="audio/mp3"
                        />
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </li>

                <li>
                    <a
                        href="https://www.dissens.de/podcast"
                        target="_blank"
                        rel="noreferrer"
                        >Folge #3 Debatte: Männlichkeit - Teil III.
                        <strong>Wie verhält Mann sich richtig?</strong>
                        (21. August 2020)</a
                    >.
                    <audio controls class="distance-audio">
                        <source
                            src="https://dl.dropboxusercontent.com/s/uixxnwwy5cmd8n0/Dissens_Podcast_III.mp3?dl=0"
                            type="audio/mp3"
                        />
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </li>
            </ul>

            <p>
                Bundeszentrale für politische Bildung (2020):
                <a
                    href="https://www.bpb.de/veranstaltungen/dokumentation/311298/girls-i-will-destroy-you-frauenhass-im-internet-"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >"Girls, I will destroy you!" – Frauenhass im
                        Internet</strong
                    ></a
                >. Podcast vom 22.06.2020 im Rahmen der Reihe
                <a
                    href="https://www.bpb.de/veranstaltungen/dokumentation/311216/podcast-rechtsextreme-rueckzugsraeume-die-reihe"
                    target="_blank"
                    rel="noreferrer"
                    >"Rechtsextreme Rückzugsräume"</a
                >. Carina Huppertz im Gespräch mit Andreas Hechler und Franziska
                Schutzbach.
            </p>
            <audio controls>
                <source
                    src="https://film.bpb.de/system/files/audios/original/12_Huppertz_Frauenhass%20im%20Internet.mp3"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                Bongen, Robert / Schiele, Katharina (2019):
                <a
                    href="https://daserste.ndr.de/panorama/archiv/2019/Rechte-Terroristen-Hass-auf-Frauen,frauenhass100.html"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Rechte Terroristen: Hass auf Frauen</strong></a
                >. Panorama-Sendung vom 31.10.2019. Interviews mit Anne Helm,
                einer Gamerin und Andreas Hechler.
            </p>
            <video controls width="250" poster="/images/panorama.webp">
                <source
                    src="https://dl.dropboxusercontent.com/s/u9hivxiik3gunsj/hass_auf_frauen.mp4?dl=0"
                    preload="none"
                    type="video/mp4"
                />
                Sorry, your browser does not support embedded videos.
            </video>

            <p>
                Hannah Engelmann (2019):
                <a
                    href="https://www.unrast-verlag.de/neuerscheinungen/antiqueere-ideologie-detail"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Antiqueere Ideologie. Die Suche nach identitärer
                        Sicherheit – und was politische Bildung dagegen
                        ausrichten kann</strong
                    ></a
                >. U.a. Expert*inneninterviews mit Andreas Hechler
                (geschlechterreflektierte Rechtsextremismusprävention), Mutlu
                Ergün-Hamaz (antirassistische Bildungsarbeit) und Ute Neumann
                (geschlechterreflektierende gewerkschaftliche Bildung).
            </p>

            <p>
                <a
                    href="https://bermudafunk.org/sendungen/sendungen/glottal-stop.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    Glottal Stop</a
                >
                @bermuda.funk (2019):
                <a
                    href="https://www.facebook.com/events/2461735190601267/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Antifeminismus</strong> - Sendung vom 06.10.2019</a
                >. Interviews mit Eve Massacre (Manosphere), Veronika Kracher
                (Incels), Tine (Kollegah/Felix Blume) und Andreas Hechler (Rolle
                von Männern).
            </p>
            <audio controls>
                <source
                    src="https://dl.dropboxusercontent.com/s/tfme9mejteh17bo/GlottalStop -  Antifeminismus.2019-10.mp3?dl=0"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                Offen, Susanne (2018):
                <a
                    href="/files/Offen - Interview Hechler (JpB_3_18).pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Komplexe Verhältnisse – Bildungsprozesse zwischen
                        Theorie und Praxis</strong
                    ></a
                >. Wirkungen politischer Bildung am Beispiel der
                Fortbildungsreihe "breit aufgestellt". Perspektiven aus der
                begleitenden Evaluation. Gespräch mit Andreas Hechler. In:
                Journal für politische Bildung, Nr. 3/2018, 8. Jg., Wochenschau
                Verlag, S. 46–51.
            </p>

            <p>
                Schattenblick (2018):
                <a
                    href="http://www.schattenblick.de/infopool/d-brille/report/dbri0092.html"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Befangenheit und Verzicht</strong></a
                >. Interview mit Andreas Hechler zu Medizinkritik,
                'Sterbehilfe', extreme Rechte, Feminismus, Trans- und
                Intergeschlechtlichkeit vom 29.06.2018.
            </p>

            <p>
                Möller, Henrike (2018):
                <a
                    href="http://www.deutschlandfunkkultur.de/antifeministische-maennerrechtsbewegungen-der-verletzte-mann.1264.de.html?dram:article_id=418775"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Der Hass der Zukurzgekommenen</strong></a
                >. Interview mit Andreas Hechler, Rolf Pohl und Ingrid Brodnig
                zu den 'Incels' und der antifeministischen Männerrechtsbewegung
                in Deutschlandfunk Kultur vom 26.05.2018.
            </p>
            <audio controls>
                <source
                    src="https://dl.dropboxusercontent.com/s/dozqvl0amc75d6u/hass_der_zukurzgekommenen.mp3?dl=0"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                Jäger & Sammler (2017):
                <a
                    href="https://www.facebook.com/JaegerundSammlerDE/videos/inter/1984272875188581/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Inter</strong></a
                >. Interview mit Andreas Hechler als Beiratsmitglied der
                Internationalen Vereinigung Intergeschlechtlicher Menschen vom
                18.12.2017.
            </p>
            <video controls width="250" poster="/images/j&s.jpg">
                <source
                    src="https://dl.dropboxusercontent.com/s/893r4b9jh42q8dc/J%26S_Inter.mp4?dl=0"
                    preload="none"
                    type="video/mp4"
                />
                Sorry, your browser does not support embedded videos.
            </video>

            <p>
                Frick, Julia (2017):
                <a
                    href="https://www.gedenkort-t4.eu/de/blog/die-ursache-des-schweigens-ist-nicht-scham"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >"Die Ursache des Schweigens ist nicht Scham"</strong
                    ></a
                >. Interview mit Andreas Hechler in Gedenkort-T4 vom 18.09.2017.
            </p>

            <p>
                Amadeu Antonio Stiftung (2017):
                <a
                    href="https://soundcloud.com/dehatepodcast/04-gender-und-rechte-ideologien"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Gender und rechte Ideologien</strong></a
                >. Podcast des Projekts "de:hate".
            </p>
            <audio controls>
                <source
                    src="https://dl.dropboxusercontent.com/s/ou82r5ndpj00m1u/gender_und_rechte_Ideologien.mp3?dl=0"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <p>
                Maskos, Rebecca (2016):
                <a
                    href="https://rebecca-maskos.net/2016/12/16/der-mord-an-der-uroma-hat-unsere-"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >"Der Mord an der Uroma hat unsere Familie
                        geprägt"</strong
                    ></a
                >. Interview mit Andreas Hechler in Menschen – Das Magazin.
            </p>

            <p>
                Goetz, Judith (2015):
                <a
                    href="https://www.progress-online.at/artikel/die-volksgemeinschaft%E2%80%98%E2%80%98-br%C3%B6ckelt"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Die "Volksgemeinschaft" bröckelt</strong></a
                >
                . Interview mit Andreas Hechler in progress, Nr. 5, S. 26–27.
            </p>

            <p>
                Neue Wege für Jungs (2015):
                <a
                    href="/files/NWfJ - Interview Stuve_Hechler (2015).pdf"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Geschlechterreflektierte Pädagogik gegen Rechts</strong
                    ></a
                >. Interview mit Olaf Stuve und Andreas Hechler vom 30.11.2015.
            </p>

            <hr />

            <!-- ///////////////////// ENGLISH ///////////////////// -->

            <h2 id="english">English</h2>

            <p class="no-bottom-margin">
                Hechler, Andreas (2020):
                <a
                    href="https://inter-nrw.de/en/category/educators-en/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Texts on intersex and pedagogy</strong></a
                >
                on
                <a
                    href="https://inter-nrw.de/en/home/"
                    target="_blank"
                    rel="noreferrer"
                    >inter-nrw.de</a
                >:
            </p>
            <ul>
                <li>
                    <a
                        href="https://inter-nrw.de/en/information-for-educators/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Information for educators</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/en/integrating-inter-into-education-and-teaching/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Integrating inter* into education and
                            teaching</strong
                        >
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/en/dos-donts-for-educators-communication-tips/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Dos &amp; don'ts for educators – communication
                            tips</strong
                        >
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/en/learning-materials/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Learning materials</strong>
                    </a>
                </li>
            </ul>

            <p>
                Hechler, Andreas (2017):
                <a
                    href="http://dsq-sds.org/article/view/5573/4651"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Diagnoses That Matter: My Great-Grandmother's Murder as
                        One Deemed 'Unworthy of Living' and Its Impact on Our
                        Family</strong
                    ></a
                >. In: Disability Studies Quarterly, Vol 37, No 2.
            </p>

            <p>
                Hechler, Andreas (2007):
                <a
                    href="http://www.contactfestival.de/english/archiv/textdocu/other/owsites/07AHechler.htm"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Heteronormativity in Contact Improvisation</strong
                    ></a
                >.<br />
                En français:
                <a
                    href="https://www.researchgate.net/profile/Andreas_Hechler/publication/329880071_Heteronormativite_en_Contact_Improvisation/links/5c1f8fdf92851c22a340e05c/Heteronormativite-en-Contact-Improvisation.pdf?origin=publication_detail"
                    target="_blank"
                    rel="noreferrer"
                    >Hétéronormativité en Contact Improvisation</a
                >.
            </p>

            <h3 id="talks_en">Talks</h3>

            <p>
                10/2016:
                <strong
                    >"'In-Between-Things' – Cissexism and Interphobia within the
                    (Extreme) Right in Germany"</strong
                >. Lecture at the international conference
                <a
                    href="https://www.kuwi.europa-uni.de/de/lehrstuhl/lw/depolitbez/projekte/sexstillsells/index.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    "Sex Still Sells – Paradoxical Right Wing Sexual Politics in
                    Europe"</a
                >
                in Słubice (Polen)‎.
            </p>

            <p>
                04/2009:
                <a
                    href="/files/Kahle_Hechler - Intergenerational dialogue on the Shoah in German families (2009).pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong
                        >"Intergenerational Dialogue on the Shoah in German
                        Families – A Personal Story as a Political
                        Claim"</strong
                    ></a
                >. Presentation with Lena Kahle on family biographies in
                National Socialism in Beit Lochamei Hagetaot/ Ghetto Fighter's
                Museum (Israel).
            </p>

            <h3 id="interviews_en">
                Interviews
            </h3>

            <p>
                American Academy Berlin (2019):
                <a
                    href="https://soundcloud.com/american-academy-berlin/beyond-the-lecture-anne-finger"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Beyond the Lecture: Anne Finger on Disability and the
                        Politics of Memory</strong
                    ></a
                >. Conversation with Andreas Hechler visiting Berlin-Buch.
            </p>
            <audio controls>
                <source
                    src="https://dl.dropboxusercontent.com/s/ljue3tkqpd564oy/disability_and_politics_of_memory.wav?dl=0"
                    type="audio/mp3"
                />
                Your browser does not support the <code>audio</code> element.
            </audio>

            <hr />

            <!-- ///////////////////// TÜRKCE ///////////////////// -->

            <h2 id="turkce">Türkçe</h2>

            <p class="no-bottom-margin">
                Hechler, Andreas (2020):
                <!-- <a
                    href="https://inter-nrw.de/tr/category/egitimciler/"
                    target="_blank"
                    rel="noreferrer"
                    ><strong>Intergeschlechtlichkeit und Pädagogik</strong></a
                > -->

                <a
                    href="https://inter-nrw.de/tr/ev/"
                    target="_blank"
                    rel="noreferrer"
                    >inter-nrw.de</a
                >:
            </p>

            <ul>
                <li>
                    <a
                        href="https://inter-nrw.de/tr/pedagoglar-icin-bilgiler/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Pedagoglar için bilgiler</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/tr/interseks-bireylerin-egitim-ve-oegrenime-entegre-edilmeleri/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >İnterseks bireylerin eğitim ve öğrenime entegre
                            edilmeleri</strong
                        >
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/tr/pedagoglar-acisindan-yapilmasi-ve-yapilmamasi-gerekenler-iyi-bir-iletisim-icin-tavsiyeler/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong
                            >Pedagoglar açısından yapılması ve yapılmaması
                            gerekenler – İyi bir iletişim için
                            tavsiyeler</strong
                        >
                    </a>
                </li>

                <li>
                    <a
                        href="https://inter-nrw.de/tr/calisma-malzemesi/"
                        target="_blank"
                        rel="noreferrer"
                        ><strong>Çalışma malzemesi</strong></a
                    >
                </li>
            </ul>

            <hr />

            <!-- ///////////////////// FRANCAIS ///////////////////// -->

            <h2 id="francais">Français</h2>
            <p>
                Hechler, Andreas (2007):
                <a
                    href="https://www.researchgate.net/profile/Andreas_Hechler/publication/329880071_Heteronormativite_en_Contact_Improvisation/links/5c1f8fdf92851c22a340e05c/Heteronormativite-en-Contact-Improvisation.pdf?origin=publication_detail"
                    target="_blank"
                    rel="noreferrer"
                    ><strong
                        >Hétéronormativité en Contact Improvisation</strong
                    ></a
                >.<br />
                In English:
                <a
                    href="http://www.contactfestival.de/english/archiv/textdocu/other/owsites/07AHechler.htm"
                    target="_blank"
                    rel="noreferrer"
                    >Heteronormativity in Contact Improvisation</a
                >.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        talksHash() {
            if (this.$i18n.locale === 'en') {
                return '#talks_en'
            } else {
                return '#talks_de'
            }
        },
        interviewHash() {
            if (this.$i18n.locale === 'en') {
                return '#interviews_en'
            } else {
                return '#interviews_de'
            }
        }
    },
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
            title: this.$t('Veröffentlichungen Andreas Hechler'),
            meta: [
                // { name: 'keywords', content: 'keyword 1, keyword 2' }
                {
                    hid: 'description',
                    name: 'description',
                    content: '$t("Veröffentlichungen Andreas Hechler")'
                }
            ]
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'IndieFlower-Regular';
    src: url('/fonts/IndieFlower-Regular.ttf') format('truetype');
}

/* ANIMATION */
#peeler {
    position: relative;
    width: 180px;
    height: 180px;
    transform: translateY(-2em);
    float: right;
    backface-visibility: hidden;
}

.peeler-transition {
    transition: all 750ms ease-in-out;
}

#peeler .sticky {
    transform: rotate(225deg);
}

#peeler:hover .sticky {
    transform: rotate(200deg);
}

#peeler .sticky {
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 180px;
}

.circle {
    font-family: IndieFlower-Regular;
    padding: 3%;
}

#peeler .reveal .circle {
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    padding-top: 40px;
    cursor: pointer;
}

#peeler .reveal .circle {
    background: #fafafa;
}

#peeler .circle_wrapper {
    position: absolute;
    width: 180px;
    height: 180px;
    left: 0px;
    top: 0px;
    overflow: hidden;
}

#peeler .circle {
    position: absolute;
    width: 140px;
    height: 140px;
    margin: 20px;
    border-radius: 50%;
}

#peeler .back {
    height: 10px;
    top: 30px;
}

#peeler:hover .back {
    height: 110px;
    top: 130px;
}

#peeler .back .circle {
    margin-top: -130px;
    background-color: red;
    background-image: -webkit-linear-gradient(
        bottom,
        rgba(251, 236, 63, 0),
        rgba(255, 255, 255, 0.6)
    );
}

#peeler:hover .back .circle {
    margin-top: -50px;
}

#peeler .front {
    height: 150px;
    bottom: 0;
    top: auto;
    -webkit-box-shadow: 0 -140px 20px -140px rgba(0, 0, 0, 0.3);
}

#peeler:hover .front {
    height: 50px;
    -webkit-box-shadow: 0 -60px 10px -60px rgba(0, 0, 0, 0.1);
}

#peeler .front .circle {
    margin-top: -10px;
    background: red;
    background-image: -webkit-linear-gradient(
        to top,
        rgba(251, 236, 63, 0) 75%,
        rgb(160, 17, 17) 95%
    );
    background-image: -moz-linear-gradient(
        to top,
        rgba(251, 236, 63, 0) 75%,
        rgb(160, 17, 17) 95%
    );
    background-image: linear-gradient(
        to top,
        rgba(251, 236, 63, 0) 75%,
        rgb(160, 17, 17) 95%
    );
}

#peeler h4 {
    position: absolute;
    width: 180px;
    height: 140px;
    line-height: 170px;
    transition: opacity 50ms linear 400ms;
}

#peeler:hover h4 {
    opacity: 0;
    transition: opacity 50ms linear 300ms;
}

#peeler:hover .front .circle {
    margin-top: -90px;
    background-color: rgb(235, 26, 26);
    background-position: 0 100px;
}

/* STYLING OF PAGE */

.publications-container {
    margin: 0 20% 3% 15%;
}

h1 {
    margin: 3% 0 1% 0;
    display: inline-block;
}

h2 {
    padding: 0 0 1% 0;
}

h3 {
    padding-top: 1em;
}

h4 {
    font-family: IndieFlower-Regular;
    font-size: 1.7em;
    text-align: center;
    color: white;
}

.language-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 400px;
    max-width: 100%;
    /* width: var(--length-heading); */
}

p {
    margin: 1em 0;
}

.no-bottom-margin {
    margin: 1em 0 0 0;
}

ul li {
    font-size: 1.2em;
    transform: translateX(-1em);
}

.margin-top {
    margin-top: 5%;
}

.up-arrow {
    height: 1em;
    filter: invert();
}

details > summary {
    font-size: 1.2em;
    width: 10em;
    background-color: rgb(230, 228, 228);
    padding: 2px 6px;
    border: none;
    margin-bottom: 1em;
    cursor: pointer;
}

audio {
    width: 100%;
    margin-top: -1%;
    outline: none;
}

audio:focus {
    outline: none;
}

video {
    width: 100%;
    height: 12em;
    outline: none;
}

video:focus {
    outline: none;
}

.less-distance {
    margin-top: -0.8em;
}

.bullet-point-less-distance {
    margin-top: -0.5em;
}

.distance-audio {
    margin-top: 0.5em;
}

@media only screen and (max-width: 768px) {
    .publications-container {
        margin: 0 2% 2% 2%;
    }

    .jump-to-top {
        right: 1vw;
    }

    #peeler {
        display: none;
    }
}
</style>
