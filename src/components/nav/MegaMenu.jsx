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
    <div className="grid gap-10 border-t border-white/15 bg-black/25 px-8 py-12 text-white backdrop-blur-2xl backdrop-saturate-150 md:grid-cols-4 md:px-16">
      {GROUPS.map((g) => (
        <div key={g.key}>
          <p className="eyebrow mb-5 text-[#E7D3AA]">{g.label}</p>
          <ul className="space-y-3">
            {treatments
              .filter((t) => t.category === g.key)
              .map((t) => (
                <li key={t.id}>
                  <Link
                    to={`/behandlungen/${t.slug}`}
                    onClick={onNavigate}
                    className="font-heading text-xl text-white/85 transition-colors hover:text-[#E7D3AA]"
                  >
                    {t.title_de}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <p className="eyebrow mb-5 text-[#E7D3AA]">Übersicht</p>
        <Link
          to="/behandlungen"
          onClick={onNavigate}
          className="font-heading text-2xl leading-snug text-white link-underline"
        >
          Alle Behandlungen ansehen
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-white/60">
          Jede Behandlung wird individuell geplant und medizinisch aufgeklärt.
        </p>
      </div>
    </div>
  );
}