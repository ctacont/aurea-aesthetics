import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import { useSettings } from '@/lib/useSite';

function Section({ title, children }) {
  return (
    <div className="border-t border-neutral-300 py-10">
      <h2 className="font-heading text-2xl font-light">{title}</h2>
      <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-neutral-600">{children}</div>
    </div>
  );
}

export function Impressum() {
  const { settings } = useSettings();
  return (
    <>
      <Seo title="Impressum | Aurea Aesthetics AG" description="Impressum und rechtliche Angaben der Aurea Aesthetics AG, Zürich." path="/impressum" />
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        breadcrumbs={[{ name: 'Startseite', path: '/' }, { name: 'Impressum', path: '/impressum' }]}
      />
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <Section title="Verantwortlich für den Inhalt">
          <address className="not-italic">
            {settings.practice_name}<br />
            {settings.street}<br />
            {settings.postal_code} {settings.city}<br />
            Schweiz
          </address>
        </Section>
        <Section title="Kontakt">
          <p>{settings.phone || 'Telefonnummer wird in Kürze veröffentlicht.'}</p>
          <p>{settings.email || 'Kontaktaufnahme über das Kontaktformular.'}</p>
        </Section>
        <Section title="Rechtsform und Registereintrag">
          <p>
            Aktiengesellschaft nach schweizerischem Recht mit Sitz in Zürich.
            Handelsregister- und UID-Nummer werden nach Vorliegen der offiziellen Angaben ergänzt.
          </p>
        </Section>
        <Section title="Berufsrechtliche Angaben">
          <p>
            Die ärztlichen Leistungen werden durch in der Schweiz zur Berufsausübung berechtigte
            Ärztinnen und Ärzte erbracht. Zuständige Aufsichtsbehörde ist die Gesundheitsdirektion
            des Kantons Zürich.
          </p>
        </Section>
        <Section title="Haftungsausschluss">
          <p>
            Die Inhalte dieser Website dienen der allgemeinen Information über ästhetisch-medizinische
            Behandlungen und ersetzen kein persönliches Arztgespräch. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte wird keine Haftung übernommen.
          </p>
        </Section>
        <div className="border-t border-neutral-300" />
      </div>
    </>
  );
}

export function Datenschutz() {
  const { settings } = useSettings();
  return (
    <>
      <Seo title="Datenschutzerklärung | Aurea Aesthetics AG" description="Informationen zur Verarbeitung personenbezogener Daten bei der Aurea Aesthetics AG, Zürich." path="/datenschutz" />
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        breadcrumbs={[{ name: 'Startseite', path: '/' }, { name: 'Datenschutz', path: '/datenschutz' }]}
      />
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <Section title="Verantwortliche Stelle">
          <address className="not-italic">
            {settings.practice_name}, {settings.street}, {settings.postal_code} {settings.city}
          </address>
        </Section>
        <Section title="Grundsatz">
          <p>
            Wir verarbeiten personenbezogene Daten nach dem schweizerischen Datenschutzgesetz (DSG)
            sowie, soweit anwendbar, nach der Datenschutz-Grundverordnung (DSGVO). Die Vertraulichkeit
            von Patientendaten unterliegt zusätzlich der ärztlichen Schweigepflicht.
          </p>
        </Section>
        <Section title="Daten aus dem Kontaktformular">
          <p>
            Wenn Sie eine Terminanfrage senden, verarbeiten wir Ihren Namen, Ihre Kontaktdaten und Ihre
            Angaben zum Anlass ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Terminvereinbarung.
            Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Pflicht besteht.
          </p>
          <p>
            Bitte senden Sie keine medizinischen Befunde oder besonders schützenswerten
            Gesundheitsdaten über das Formular.
          </p>
        </Section>
        <Section title="Aufbewahrung">
          <p>
            Anfragedaten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine
            gesetzlichen Aufbewahrungspflichten bestehen. Für Patientendokumentationen gelten die
            gesetzlichen Aufbewahrungsfristen.
          </p>
        </Section>
        <Section title="Ihre Rechte">
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
            sowie Datenübertragbarkeit. Wenden Sie sich dafür an die oben genannte verantwortliche Stelle.
          </p>
        </Section>
        <Section title="Externe Dienste">
          <p>
            Sofern für die Terminbuchung ein externer Dienst eingebunden wird, erfolgt die Einbindung
            erst nach Ihrer ausdrücklichen Zustimmung. Es werden keine Tracking- oder
            Werbe-Cookies ohne Einwilligung gesetzt.
          </p>
        </Section>
        <div className="border-t border-neutral-300" />
      </div>
    </>
  );
}

export default Impressum;