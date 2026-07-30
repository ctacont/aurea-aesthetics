import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function TreatmentCard({ treatment }) {
  const { lang, langPath } = useLanguage();
  const title = loc(treatment, 'title', lang) || treatment.title_de;
  const lead = loc(treatment, 'lead', lang) || treatment.lead_de;

  return (
    <Link
      to={langPath(`/behandlungen/${treatment.slug}`)}
      className="group block focus-visible:outline-2"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
        <Image
          src={treatment.image_url}
          alt={title}
          className="h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/55 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-light leading-snug md:text-2xl">
            {title}
          </h3>
          {treatment.duration && (
            <p className="mt-2 eyebrow text-neutral-400">{treatment.duration}</p>
          )}
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-[#C9AF80] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          strokeWidth={1}
        />
      </div>

      {lead && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
          {lead}
        </p>
      )}
    </Link>
  );
}