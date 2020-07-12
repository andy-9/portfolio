<template>
    <div id="imprint-container">
        <h1>{{ $t('Impressum') }}</h1>
        <div id="imprint-paragraphs">
            <h2>{{ $t('Angaben gemäß § 5 TMG') }}</h2>
            <p>Andreas Hechler</p>
            <p>Allee der Kosmonauten 67</p>
            <p>12681 Berlin</p>
            <p>
                {{ $t('E-Mail') }}
                :
                <img
                    src="/images/email.png"
                    :alt="$t('E-Mail-Addresse Andreas Hechler')"
                    class="style-mail"
                />
            </p>
            <h2>{{ $t('Haftung für Links auf dieser Website') }}</h2>
            <p>
                {{
                    $t(
                        'Meine Webseite enthält Links zu anderen Webseiten, für deren Inhalt ich nicht verantwortlich bin. Haftung für verlinkte Websites besteht für mich nicht, da ich keine Kenntnis rechtswidriger Tätigkeiten hatte und habe, mir solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und ich Links sofort entfernen werde, sollten mir Rechtswidrigkeiten bekannt werden'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        'Wenn Ihnen rechtswidrige Links auf meiner Website auffallen, bitte ich Sie, mich zu kontaktieren. Sie finden die Kontaktdaten oben'
                    )
                }}.
            </p>

            <h2>{{ $t('Urheberrechtshinweis') }}</h2>
            <p>
                {{
                    $t(
                        'Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung von mir. Downloads und Kopien dieser Seite sind nur für den privaten, nicht-kommerziellen Gebrauch gestattet. Falls notwendig, werde ich die unerlaubte Nutzung von Teilen der Inhalte meiner Seite rechtlich verfolgen'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        'Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitte ich Sie, mich zu kontaktieren'
                    )
                }}
            </p>

            <h2>{{ $t('Bildernachweis') }}</h2>
            <p>
                {{
                    $t(
                        'Die Fotos und Screenshots auf dieser Webseite sind urheberrechtlich geschützt'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        'Die Bilderrechte liegen bei mir oder den Fotograf*innen, die'
                    )
                }}

                <nuxt-link
                    :to="localePath('contact-credits')"
                    :title="$t('Dank und Anerkennung')"
                    >{{ $t('hier') }}</nuxt-link
                >
                {{ $t('aufgeführt werden') }}.
            </p>

            <h2>{{ $t('Datenschutz') }}</h2>
            <p>
                {{
                    $t(
                        'Die Nutzung meiner Webseite ist ohne Angabe personenbezogener Daten möglich'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        'Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich'
                    )
                }}.
            </p>
            <p>
                {{
                    $t(
                        'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Ich behalte mir ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen durch beispielsweise Spam-E-Mails vor'
                    )
                }}.
            </p>
        </div>
        <footer class="white">
            © Andreas Hechler {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.$t('Impressum Andreas Hechler'),
            meta: []
        }
    }
}
</script>

<style>
html,
body,
#__nuxt,
#__layout,
#__layout > div {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>

<style scoped>
#imprint-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-image: url(/images/footprint.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 2% 5% 1% 5%;
    display: grid;
    grid-template-rows: 1fr auto;
}

h1 {
    color: white;
}

#imprint-paragraphs > p {
    color: white;
    padding: 0.2% 0;
    flex-shrink: 0;
}

img.style-mail {
    width: 12em;
    transform: translateY(0.36em);
    filter: invert();
}

#imprint-paragraphs > h2 {
    font-size: 1.6em;
    letter-spacing: 1px;
    color: white;
    margin-top: 2em;
}

footer {
    grid-row-start: 3;
    grid-row-end: 4;
    margin-top: 4em;
}
</style>
