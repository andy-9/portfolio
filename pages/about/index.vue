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

                <!-- <p>
                    <span v-if="code === 'de'">Die</span>
                    <strong> {{ $t('Wissenschaft') }} </strong>
                    {{
                        $t(
                            'für die Fähigkeit, zu analysieren und zu verstehen; die Ethnologie für die Fähigkeit, genau zu beobachten und zuzuhören.'
                        )
                    }}
                </p> -->

                <p
                    v-html="
                        $t(
                            'Die <strong>Wissenschaft</strong> für die Fähigkeit, zu analysieren und zu verstehen; die Ethnologie für die Fähigkeit, genau zu beobachten und zuzuhören.'
                        )
                    "
                ></p>

                <p>
                    {{ $t('Die eigene') }} <strong>{{ $t('Bildung') }}</strong>
                    {{
                        $t(
                            '(ich bin bildungshungrig!) und das Wissen um Lernprozesse, um andere begleiten zu können.'
                        )
                    }}
                </p>

                <p
                    v-html="
                        $t(
                            'Die <strong>Politik</strong> und mein Interesse an der Verbindung der kleinen mit den ganz großen Fragen, dem Individuum und der Gesellschaft, dem Alltag und der Herrschaft, der Psyche und der Macht.'
                        )
                    "
                ></p>

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

                <p
                    v-html="
                        $t(
                            'Die <strong>Kommunikationspsychologie und Gewaltfreie Kommunikation</strong> für Klärungsprozesse, das Auseinanderhalten von Eigenem und Fremdem und der Hinführung zu Gefühlen.'
                        )
                    "
                ></p>

                <p
                    v-html="
                        $t(
                            'Die <strong>Radikale Therapie und Transaktionsanalyse</strong> für die Selbstreflexion und die Fokussierung auf Gruppenprozesse, Beziehung, Kommunikation und Unterstützung.'
                        )
                    "
                ></p>

                <p
                    v-html="
                        $t(
                            'Die <strong>Kontaktimprovisation</strong> für Freude, Leichtigkeit, experimentieren, aushandeln, somatisches Erleben, Achtsamkeit und Flow in der Gruppe.'
                        )
                    "
                ></p>
            </div>
        </div>

        <div class="container-three">
            <div class="text-area-one">
                <!-- //////////////// PROFESSIONAL CAREER //////////////// -->

                <h2 class="less-margin-bottom">Professional Career</h2>

                <!-- ////////// OCCUPATION ////////// -->

                <div class="indent-after-heading-two">
                    <h3>Occupation</h3>

                    <ul>
                        <li>
                            <strong
                                >Development of software in front- and
                                backend</strong
                            >
                            (JavaScript, Node, Vue, React/Redux, Express,
                            Handlebars, jQuery, Socket.io, Jest, PostgreSQL,
                            GitHub, HTML, CSS)
                        </li>

                        <li>
                            <strong>Process support/facilitation</strong>
                            (coaching, counseling, evaluation, complaint
                            management)
                        </li>

                        <div>
                            <details
                                ><summary>Details</summary>

                                <p>
                                    2019: Cascade Information Systems:
                                    <strong
                                        >Location and product
                                        certification</strong
                                    >
                                    according to Common Criteria
                                </p>

                                <p>
                                    2019: Westnetz GmbH / D-LABS GmbH:
                                    <strong
                                        >Analysis of the company
                                        homepage</strong
                                    >
                                    under aspects of gender equality,
                                    suggestions for change
                                </p>

                                <p>
                                    2018-2019: Anne Frank Center / German Red
                                    Cross Thuringia:
                                    <b
                                        >Process support for measures against
                                        discrimination and prevention of
                                        right-wing extremism</b
                                    >
                                    for day-care center advisors of the German
                                    Red Cross Thuringia
                                </p>

                                <p>
                                    2018: Against forgetting - For democracy:
                                    Extensive
                                    <strong>Evaluation</strong>
                                    (non-participating observations, interviews,
                                    material analysis, interim and final report)
                                    of the
                                    <i
                                        >Argumentation training against
                                        right-wing slogans</i
                                    >
                                </p>

                                <p>
                                    2018: Free Software Foundation Europe:
                                    <strong>Consulting and training</strong> for
                                    the implementation of a code of conduct and
                                    anti-discrimination measures
                                </p>

                                <p>
                                    2016-2018: KoFaS - Competence Group Fan
                                    Cultures & Sports:
                                    <strong>Support and Coaching</strong> for
                                    the implementation of gender-reflected
                                    measures in football
                                </p>

                                <p>
                                    2017-2018: Bundesarbeitskreis Arbeit und
                                    Leben: Extensive
                                    <strong>Evaluation</strong>
                                    (non-participating observations, interviews,
                                    material analysis, interim and final report)
                                    of the qualification course
                                    <i
                                        >broadly positioned - training to
                                        prevent ideologies of inequality</i
                                    >
                                </p>

                                <p>
                                    2016-2017: ufuq.de:
                                    <strong>Team consulting and support</strong>
                                    on gender-reflected approaches, train the
                                    trainer
                                </p>

                                <p>
                                    2017: Anne Frank Center: Content
                                    <strong>proofreading</strong> of educational
                                    materials
                                </p>

                                <p>
                                    2017: Federal Coordination of Specialized
                                    Counseling Services against Sexualized
                                    Violence in Childhood and Youth (BKSF):
                                    Research and development of proposals for a
                                    <strong
                                        >complaints management procedure</strong
                                    >
                                </p>

                                <p>
                                    2016: Dissens - Institute for Education and
                                    Research: <strong>Coordination</strong> of
                                    the revision of an online presence
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>Further education and training</strong>,
                            train-the-trainer, workshops
                        </li>
                        <div>
                            <details
                                ><summary>Details</summary>

                                <p>
                                    2010-2020: 1-9-day
                                    <b
                                        >further education and train the trainer
                                        courses</b
                                    >
                                    for teachers, social workers and political
                                    educators throughout Germany
                                </p>

                                <p class="indent-content-in-details">
                                    <i>Institutions</i>: Amt für Lehrerbildung
                                    Hessen, Bildungsministerium
                                    Mecklenburg-Vorpommern, German Children and
                                    Youth Foundation, Dissens – Institute for
                                    Education and Research, Institute for Youth
                                    Work Gauting, Institut für
                                    Qualitätsentwicklung an Schulen
                                    Schleswig-Holstein, Landesinstitut für
                                    Schule und Medien Berlin-Brandenburg,
                                    Landesschulbehörde Niedersachsen,
                                    Landessportbund Sachsen-Anhalt,
                                    Landesverwaltungsamt Sachsen-Anhalt, RAA
                                    Brandenburg, Pedagogical Institute Munich,
                                    Paritätisches Bildungswerk Bundesverband,
                                    Sozialpädagogisches Fortbildungsinstitut
                                    Berlin-Brandenburg, Villa Fohrde
                                </p>

                                <p class="indent-content-in-details">
                                    <i>Individual schools and associations</i>:
                                    Alfred Brehm Elementary School Berlin,
                                    Dunant Elementary School Berlin,
                                    Martin-Luther-High School Eisenach,
                                    Miteinander e.V. (Saxony-Anhalt), Vielfalt
                                    e.V. Berlin, Werbellin Elementary School
                                    Berlin, Willi-Graf-High School Berlin
                                </p>

                                <p>2010–2019: <strong>Workshops</strong></p>

                                <p class="indent-content-in-details">
                                    <i>Institutions</i>: amongst others: Amadeu
                                    Antonio Foundation, Dissens – Institute for
                                    Education and Research,
                                    Rosa-Luxemburg-Foundation
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>Scientific practice research</strong>,
                            <strong>lectures</strong>, publications and editing
                        </li>

                        <div>
                            <details
                                ><summary>Details</summary>

                                <p>
                                    2011–2018:
                                    <b
                                        >Teaching positions and lectures at
                                        universities</b
                                    >: Alice Salomon College Berlin, European
                                    University Viadrina Frankfurt (Oder),
                                    European Solidarity Centre Gdańsk,
                                    Evangelische Hochschule Berlin, University
                                    of Applied Sciences Kiel, Hochschule
                                    Hannover, Katholische Hochschule für
                                    Sozialwesen Berlin, University Göttingen,
                                    University Kiel, University of Central
                                    Lancashire Preston
                                </p>

                                <p>
                                    2013–2015:
                                    <b
                                        >Research and further education project
                                        on gender-reflected neo-Nazi prevention
                                        at Dissens - Institute for Education and
                                        Research</b
                                    >: Project management, conception and
                                    planning; nationwide professional and train
                                    the trainer trainings (up to 9 days);
                                    consulting and supervision of practical
                                    projects; inputs; teaching of methods;
                                    lectures; preparation of scientific
                                    findings; conference organization and
                                    implementation; financial applications and
                                    contact with funding agencies; supervision
                                    of interns and honorary team
                                </p>

                                <p>
                                    2010–2012:
                                    <b
                                        >Nationwide advanced trainings in the
                                        further education project
                                        <i>Boys' work and school</i> of Dissens
                                        e. V.</b
                                    >: 8-day teacher training courses on the
                                    topic of working with boys; train the
                                    trainer trainings; inputs, teaching of
                                    methods, consulting
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>Gender sensitive social work</strong>
                            (2002-2017)
                        </li>

                        <div>
                            <details
                                ><summary>Details</summary>

                                <p>
                                    2016–2017:
                                    <b
                                        >2-day workshops for primary and
                                        secondary school classes</b
                                    >
                                    in different cities (Berlin, Hesse,
                                    Schleswig-Holstein): Gender-reflective
                                    pedagogy, gender and sexual diversity
                                </p>

                                <p>
                                    2009–2012:
                                    <b
                                        >Hilfen zur Erziehung (social group work
                                        and individual case help) at Dissens e.
                                        V.</b
                                    >: Social group work (§ 29 SGB VIII) and
                                    educational assistance (§ 30 SGB VIII);
                                    gender-related social work with a boys'
                                    group; conducting one-on-one interviews,
                                    discussion rounds, leisure activities and
                                    sports
                                </p>

                                <p>
                                    2009–2010:
                                    <b
                                        >Boys' work at the
                                        <i>Alte Molkerei Frille</i></b
                                    >: gender-sensitive pedagogy, prevention of
                                    violence, promotion of social competence and
                                    development of conflict resolution with boys
                                </p>

                                <p>
                                    2009–2010:
                                    <b
                                        >Hilfen zur Erziehung at the Björn
                                        Schulz Foundation</b
                                    >: Educational assistance (§ 30 SGB VIII)
                                    and social work with families (§ 31 SGB
                                    VIII); support for families with a severely
                                    disabled child; work with non-disabled male
                                    siblings and their specific problems;
                                    counseling for parents in educational
                                    questions and conflicts
                                </p>

                                <p>
                                    2002–2006:
                                    <b
                                        >Boys' work at Dissens e. V. and Pat-Ex
                                        e. V.</b
                                    >: Preparation, implementation and follow-up
                                    of project days and weeks for boys on the
                                    conflict resolution, sexuality, career
                                    choice and male socialization
                                </p>
                            </details>
                        </div>

                        <li>
                            <strong>Voluntary service</strong> in Tel
                            Aviv-Jaffa/Israel (2009)
                        </li>

                        <li>
                            Employment at the
                            <strong>News Agency Reuters</strong> (2004-2008)
                            (during studies)
                        </li>

                        <li>
                            <strong>Psychosocial support</strong> at the
                            Psychosozialer Verbund Treptow (2001-2006) (during
                            studies)
                        </li>
                    </ul>

                    <!-- ////////// EDUCATION ////////// -->
                    <h3>Education</h3>

                    <p>
                        2020: Spiced Academy, on-site 3-months
                        <strong>full stack web development bootcamp</strong>
                        focused on JavaScript (Berlin)
                    </p>

                    <p>
                        2019: 6-week <strong>Scrum Master internship</strong> at
                        SuccessYou GmbH (Berlin)
                    </p>

                    <p>
                        1998-2008:
                        <b
                            >Studies in Cultural Anthropology and Gender
                            Studies</b
                        >
                        at Humboldt University of Berlin
                    </p>

                    <p>
                        2004: 3-month
                        <strong>internship in the European Parliament</strong>
                        (Brussels)
                    </p>

                    <p>
                        1997-1998: <strong>Voluntary Ecological Year</strong> at
                        BUNDjugend (Berlin)
                    </p>

                    <p>
                        1989-1997: <strong>Abitur/Graduation</strong> at
                        Sophie-Charlotte-High School (Berlin)
                    </p>

                    <p>
                        1994-1995:
                        <strong>High School Graduation</strong> (Tennessee/USA)
                    </p>

                    <!-- ////////// CERTIFICATES & TRAININGS ////////// -->

                    <h3>Certificates, further education and training</h3>

                    <p>
                        2020: Professional Scrum Master (PSM I) and Professional
                        Scrum Product Owner (PSPO I)
                    </p>

                    <p>
                        2012-2013: Further education to become a child attorney
                    </p>

                    <p>2010: Further training as a Betzavta trainer</p>

                    <p>2005–2006: One-year training in Shiatsu</p>

                    <p>2005: Training as youth group leader (JuLeiCa)</p>

                    <p>
                        Agility, project management, moderation, argumentation-,
                        communication and discussion trainings, visualization,
                        fundraising, press and public relations, social media,
                        blended learning, OER, hate & counter-speech,
                        interviewing, anti-discrimination pedagogy, social
                        justice, intersectional violence prevention, sexualized
                        violence against boys, neo-Nazism/right-wing extremism,
                        critical whiteness, action against everyday racism,
                        anti-Semitism and many more
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
