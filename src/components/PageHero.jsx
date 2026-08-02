import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import { useLanguage } from '@/lib/LanguageContext';

export default function PageHero({ eyebrow, title, accent, lead, image, breadcrumbs = [] }) {
  const { t, langPath } = useLanguage();

  return (
    <section className="relative flex min-h-[70svh] flex-col justify-end bg-[#0A0A0A] pt-36 pb-20 text-white lg:min-h-[78svh] lg:pt-48 lg:pb-28">
      {image &&
      <div className="absolute inset-0">
          <Image src={image} alt="" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-[#0A0A0A]/25" />
        </div>
      }

      <div className="relative w-full px-6 lg:px-16">
        {breadcrumbs.length > 0 &&
        <nav aria-label={t('breadcrumb')} className="inline-flex w-fit max-w-full eyebrow text-white/60 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] lg:-translate-x-[-7%] mb-10">
            {breadcrumbs.map((b, i) =>
          <span key={b.path}>
                {i > 0 && <span className="mx-2 text-[#C9AF80]">·</span>}
                {i === breadcrumbs.length - 1 ?
            <span className="text-white/85">{b.name}</span> :

            <Link to={langPath(b.path)} className="link-underline">{b.name}</Link>
            }
              </span>
          )}
          </nav>
        }

        <div className="border lg:-translate-x-[-10%] border-white/15 bg-black/25 p-8 backdrop-blur-xl backdrop-saturate-150 lg:p-12 max-w-[974px] lg:w-fit">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}

          <h1 className="mt-7 font-heading text-[2.4rem] font-light leading-[1.1] md:text-6xl">
            {title}
            {accent && <span className="block text-[#C9AF80]">{accent}</span>}
          </h1>

          {lead &&
          <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-white/75">{lead}</p>
          }
        </div>
      </div>
    </section>);

}