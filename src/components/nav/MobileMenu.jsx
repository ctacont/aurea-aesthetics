import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { NAV } from '@/components/nav/NavLinks';
import { useTreatments } from '@/lib/useSite';

export default function MobileMenu({ open, onClose }) {
  const { data: treatments = [] } = useTreatments();

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#0A0A0A] text-white transition-opacity duration-500 lg:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-6 py-6">
          <span className="eyebrow text-white/50">Menü</span>
          <button onClick={onClose} aria-label="Menü schliessen" className="p-2">
            <X className="h-5 w-5" strokeWidth={1} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 pb-16">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.path} className="border-b border-white/10">
                <Link
                  to={n.path}
                  onClick={onClose}
                  className="block py-5 font-heading text-3xl font-light"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10 mb-4 text-[#C9AF80]">Behandlungen</p>
          <ul className="space-y-3">
            {treatments.map((t) => (
              <li key={t.id}>
                <Link
                  to={`/behandlungen/${t.slug}`}
                  onClick={onClose}
                  className="font-heading text-lg text-white/70"
                >
                  {t.title_de}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}