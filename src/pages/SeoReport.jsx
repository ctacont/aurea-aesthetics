import React from 'react';

const SECTIONS = [
  {
    title: '1. Was wurde technisch umgesetzt?',
    items: [
      {
        h: 'Strukturierte Daten (Local Business Schema)',
        t: 'Google erhält nun auf jeder Seite maschinenlesbare Informationen über die Klinik (Adresse, Geo-Koordinaten für Zürich Enge, Fachgebiet). Das ist die Basis für das Ranking bei lokalen Suchanfragen.',
      },
      {
        h: 'Medizinische Auszeichnung',
        t: 'Jede Behandlung ist als „Medical Procedure“ ausgezeichnet und mit der Praxis als Anbieter verknüpft — das signalisiert Suchmaschinen medizinisch fundierte Inhalte.',
      },
      {
        h: 'Social-Media-Optimierung',
        t: 'Die Vorschaubilder (Open Graph) wurden für alle Seiten optimiert, damit die Praxis beim Teilen auf LinkedIn oder WhatsApp professionell erscheint.',
      },
    ],
  },
  {
    title: '2. Warum ist das wichtig?',
    text: 'Suchmaschinen wie Google bevorzugen Websites, die ihre Inhalte klar strukturieren. Durch diese Änderungen wird Aurea Aesthetics von einer „schönen Website“ zu einer autoritären lokalen Quelle für ästhetische Medizin in Zürich.',
  },
  {
    title: '3. Empfohlene nächste Schritte',
    items: [
      {
        h: 'NAP-Konsistenz',
        t: 'Abgleich des Google Business Profils mit unseren Angaben (Name, Adresse, Telefonnummer müssen exakt übereinstimmen).',
      },
      {
        h: 'Content-Erweiterung',
        t: 'Nutzung der Keyword-Cluster aus der Analyse für neue Inhalte, z. B. zu „Medizinische Sicherheit bei Filler-Behandlungen“ und „Natürliche Resultate in Zürich“.',
      },
    ],
  },
];

export default function SeoReport() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 print:py-6 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-6 print:hidden">
          <p className="eyebrow text-neutral-400">Aurea Aesthetics AG</p>
          <button
            onClick={() => window.print()}
            className="border border-neutral-300 px-5 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-neutral-100"
          >
            Als PDF drucken
          </button>
        </div>

        <p className="eyebrow text-[#8A7550]">SEO-Statusbericht</p>
        <h1 className="mt-4 font-heading text-3xl font-light leading-tight md:text-4xl">
          Technische Optimierung aurea-aesthetics.ch
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Datum: 2. August 2026 &nbsp;·&nbsp; Fokus: Lokale Sichtbarkeit (Zürich) &amp; medizinische Autorität
        </p>

        <div className="mt-14 space-y-14">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-heading text-xl font-light border-b border-neutral-200 pb-4">{s.title}</h2>
              {s.text && (
                <p className="mt-5 text-[0.98rem] leading-[1.75] text-neutral-700">{s.text}</p>
              )}
              {s.items && (
                <div className="mt-6 space-y-6">
                  {s.items.map((it) => (
                    <div key={it.h} className="flex gap-4">
                      <span className="mt-3 h-px w-5 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                      <div>
                        <p className="font-heading text-base">{it.h}</p>
                        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-neutral-600">{it.t}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
          Erstellt von Brandtiger.de für Aurea Aesthetics AG
        </p>
      </div>
    </div>
  );
}