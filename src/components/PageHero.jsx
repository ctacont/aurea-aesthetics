import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import useParallax from '@/hooks/useParallax';
import { useLanguage } from '@/lib/LanguageContext';

export default function PageHero({ eyebrow, title, accent, lead, image, breadcrumbs = [] }) {
  const { t, langPath } = useLanguage();
  const { ref: bgRef, offset } = useParallax(0.18);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-[#0A0A0A] pt-36 pb-20 text-white lg:min-h-[78svh] lg:pt-48 lg:pb-28">
      {image &&
      <div className={`hero-image-mask absolute inset-0 ${revealed ? 'is-revealed' : ''}`}>
          <div ref={bgRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.18)` }}>
            <Image src={image} alt="" className="h-full w-full" fittingType="fill" />
            <div className="absolute inset-0 bg-[#0A0A0A]/25" />
          </div>
        </div>
      }

      <div className="relative w-full px-6 lg:px-16">
        {breadcrumbs.length > 0 &&
        <Reveal>
            <nav aria-label={t('breadcrumb')} className="mb-10 eyebrow text-white/60 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] lg:pl-[70px] max-w-[974px]">
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
          </Reveal>
        }

        <div className="lg:-translate-x-[-10%] p-8 lg:p-12 max-w-[974px] lg:w-fit">
          <Reveal delay={80}>
            {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          </Reveal>

          <Reveal delay={160} clip>
            <h1 className="mt-7 font-heading text-[2.4rem] font-light leading-[1.1] md:text-6xl">
              {title}
              {accent && <span className="block text-[#C9AF80] text-shadow">{accent}</span>}
            </h1>
          </Reveal>

          {lead &&
          <Reveal delay={260}>
              <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-white/75">{lead}</p>
            </Reveal>
          }
        </div>
      </div>
    </section>);

}