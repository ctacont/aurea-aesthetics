import React from 'react';
import { Link } from 'react-router-dom';
import { useTreatments } from '@/lib/useSite';

const GROUPS = [
  { key: 'injektion', label: 'Injektionsbehandlungen' },
  { key: 'biostimulation', label: 'Biostimulation' },
  { key: 'haut', label: 'Hautqualität' },
];

export default function MegaMenu({ onNavigate }) {
  const { data: treatments = [] } = useTreatments();

  return (
    <div className="grid gap-10 border-t border-[#E8E2D9] bg-[#FAF9F7] px-8 py-12 text-neutral-900 md:grid-cols-4 md:px-16">
      {GROUPS.map((g) => (
        <div key={g.key}>
          <p className="eyebrow mb-5 text-[#8A7550]">{g.label}</p>
          <ul className="space-y-3">
            {treatments
              .filter((t) => t.category === g.key)
              .map((t) => (
                <li key={t.id}>
                  <Link
                    to={`/behandlungen/${t.slug}`}
                    onClick={onNavigate}
                    className="font-heading text-xl text-neutral-700 transition-colors hover:text-[#8A7550]"
                  >
                    {t.title_de}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div className="border-t border-[#E8E2D9] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <p className="eyebrow mb-5 text-[#8A7550]">Übersicht</p>
        <Link
          to="/behandlungen"
          onClick={onNavigate}
          className="font-heading text-2xl leading-snug text-neutral-900 link-underline"
        >
          Alle Behandlungen ansehen
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-neutral-500">
          Jede Behandlung wird individuell geplant und medizinisch aufgeklärt.
        </p>
      </div>
    </div>
  );
}