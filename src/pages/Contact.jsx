import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ConsultationForm from '@/components/contact/ConsultationForm';
import { useSettings } from '@/lib/useSite';
import { medicalBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';

export default function Contact() {
  const { settings } = useSettings();
  const crumbs = [{ name: 'Startseite', path: '/' }, { name: 'Kontakt & Termin', path: '/kontakt-termin' }];

  return (
    <>
      <Seo
        title="Kontakt & Terminanfrage | Aurea Aesthetics AG Zürich Enge"
        description="Terminanfrage für eine persönliche Beratung in der Praxis für ästhetische Medizin an der Tödistrasse 1 in Zürich Enge."
        path="/kontakt-termin"
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />
      <PageHero
        eyebrow="Kontakt & Termin"
        title="Persönliche Beratung"
        accent="in Zürich Enge."
        lead="Wir nehmen bewusst eine begrenzte Anzahl neuer Patientinnen und Patienten auf. Senden Sie Ihre Anfrage — wir melden uns diskret zurück."
        image={IMAGES.contact}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Terminanfrage</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-heading text-[2rem] font-light leading-tight md:text-4xl">
                Ihre Anfrage
              </h2>
            </Reveal>
            <Reveal delay={140} className="mt-12">
              <ConsultationForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="bg-[#F4F1EE] p-10 lg:p-12">
                <p className="eyebrow text-[#8A7550]">Praxis</p>
                <address className="mt-6 not-italic text-lg font-heading leading-relaxed">
                  {settings.practice_name}<br />
                  {settings.street}<br />
                  {settings.postal_code} {settings.city}<br />
                  Schweiz
                </address>

                <dl className="mt-10 space-y-7 border-t border-[#E8E2D9] pt-8">
                  <div>
                    <dt className="eyebrow text-neutral-400">Telefon</dt>
                    <dd className="mt-2 text-[0.98rem]">
                      {settings.phone ? (
                        <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="link-underline">{settings.phone}</a>
                      ) : (
                        <span className="text-neutral-500">Wird in Kürze veröffentlicht</span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-neutral-400">E-Mail</dt>
                    <dd className="mt-2 text-[0.98rem]">
                      {settings.email ? (
                        <a href={`mailto:${settings.email}`} className="link-underline">{settings.email}</a>
                      ) : (
                        <span className="text-neutral-500">Bitte nutzen Sie das Formular</span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-neutral-400">Erreichbarkeit</dt>
                    <dd className="mt-2 whitespace-pre-line text-[0.98rem] text-neutral-600">
                      {settings.opening_hours || 'Termine ausschliesslich nach persönlicher Vereinbarung.'}
                    </dd>
                  </div>
                </dl>

                {settings.booking_url && (
                  <a
                    href={settings.booking_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block border border-[#0A0A0A]/25 px-8 py-4 eyebrow transition-colors duration-500 hover:bg-[#C9AF80]"
                  >
                    Online-Terminbuchung
                  </a>
                )}

                <p className="mt-10 border-t border-[#E8E2D9] pt-6 text-xs leading-relaxed text-neutral-500">
                  Ihre Angaben werden vertraulich und nach schweizerischem Datenschutzrecht
                  verarbeitet. Bitte senden Sie keine medizinischen Befunde über dieses Formular.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}