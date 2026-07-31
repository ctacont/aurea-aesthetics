import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

const COPY = {
  de: {
    eyebrow: 'Persönliche Beratung',
    title: 'Ihr Gesicht. Ihre Geschichte.',
    link: 'Beratung anfragen',
  },
  en: {
    eyebrow: 'Personal consultation',
    title: 'Your face. Your story.',
    link: 'Request consultation',
  },
};

export default function ConsultationCta() {
  const { lang, langPath } = useLanguage();
  const copy = COPY[lang] || COPY.de;

  return (
    <Link to={langPath('/kontakt-termin')} className="group block focus-visible:outline-2">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
        <Image
          src={IMAGES.contact}
          alt={copy.eyebrow}
          className="h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
      </div>

      <div className="mt-5 flex flex-col items-start">
        <h3 className="font-heading text-xl font-light leading-snug md:text-2xl">
          {copy.title}
        </h3>
        <p className="mt-2 eyebrow text-[#8A7550]">{copy.eyebrow}</p>
        <span className="mt-3 eyebrow inline-flex items-center gap-3 link-underline">
          {copy.link}
          <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
        </span>
      </div>
    </Link>
  );
}