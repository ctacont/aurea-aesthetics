import React from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import GoldButton from '@/components/GoldButton';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero({ settings }) {
  const { t, langPath } = useLanguage();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[-250px] top-0 h-full w-[calc(100%+250px)]"
          style={{ transform: 'translateX(250px)' }}>
          
          <Image
            src={settings.hero_image_url || IMAGES.hero}
            alt={t('hero.alt')}
            className="h-full w-full object-cover"
            fittingType="fill"
            focalPointX={0.88}
            focalPointY={0.42} />
          
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/45 via-[#0A0A0A]/15 to-transparent" />
      </div>

      <div className="relative flex w-full items-end px-6 pb-20 pt-44 lg:px-16 lg:pb-28 lg:pt-52">
        
        <div className="border border-white/10 bg-white/[0.06] text-left text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-200 max-w-[974px] bg-white/[0.06] py-6 px-6 lg:-translate-x-[-10%] min-[1980px]:max-w-[33vw]">
          <Eyebrow tone="light">
            {settings.practice_name} · {settings.district}
          </Eyebrow>

          <h1 className="mt-7 font-heading text-[2.2rem] font-light leading-[1.1] md:text-[3.2rem]">
            {t('hero.title')}
            <span className="mt-2 block text-[#C9AF80]">{t('hero.accent')}</span>
          </h1>

          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-white/85">
            {t('hero.lead', { street: settings.street })}
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <GoldButton to={langPath('/kontakt-termin')} tone="primary" className="flex-1">{t('hero.beratungAnfragen')}

            </GoldButton>
            <GoldButton to={langPath('/behandlungen')} tone="outline" className="border flex-1 border-[#C9AF80] text-[#F5F3EE] hover:bg-[#C9AF80] hover:text-[#0A0A0A]">{t('hero.behandlungenEntdecken')}

            </GoldButton>
          </div>

          <address className="mt-12 not-italic eyebrow text-white/70">
            {settings.street} · {settings.postal_code} {settings.city}
          </address>
        </div>
      </div>
    </section>);

}