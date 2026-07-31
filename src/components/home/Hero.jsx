import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import GoldButton from '@/components/GoldButton';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

const SLIDE_INTERVAL = 5000;
const FADE_DURATION = 5000;

export default function Hero({ settings }) {
  const { t, langPath } = useLanguage();

  const customSlides = Array.isArray(settings.hero_slides) ?
  settings.hero_slides.
  filter((s) => s && s.active && s.src).
  sort((a, b) => (a.order || 0) - (b.order || 0)).
  map((s) => ({ src: s.src, focalPointX: 0.5, focalPointY: 0.5 })) :
  [];

  const slides = customSlides.length > 0 ?
  customSlides :
  [
  { src: IMAGES.zurich, focalPointX: 0.5, focalPointY: 0.5 },
  { src: IMAGES.interior, focalPointX: 0.5, focalPointY: 0.5 },
  { src: IMAGES.hero, focalPointX: 0.88, focalPointY: 0.42 }];



  const hasVideo = !!settings.hero_video_url;
  const showArrows = !hasVideo && slides.length >= 2;
  const mobileFallback = settings.hero_video_mobile_image_url || slides[0].src;

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goNext = () => setCurrentIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);

  const startAuto = () => {
    if (hasVideo) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, SLIDE_INTERVAL);
  };
  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (hasVideo) return;
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasVideo]);

  const handleManual = (dir) => {
    stopAuto();
    if (dir === 'next') goNext();else
    goPrev();
    startAuto();
  };

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}>
      
      <div className="absolute inset-0 overflow-hidden">
        {hasVideo ?
        <>
            <video
            src={settings.hero_video_url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 hidden h-full w-full object-cover md:block" />
          
            <div className="absolute inset-0 block md:hidden">
              <Image
              src={mobileFallback}
              alt={t('hero.alt')}
              className="h-full w-full object-cover"
              fittingType="fill" />
            
            </div>
          </> :

        <div className="absolute left-[-250px] top-0 h-full w-[calc(100%+250px)]">
            {slides.map((slide, i) =>
          <div
            key={i}
            className="absolute left-[250px] top-0 h-full w-[calc(100%-250px)] transition-opacity ease-in-out"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i,
              transitionDuration: `${FADE_DURATION}ms`
            }}>
            
              <Image
              src={slide.src}
              alt={t('hero.alt')}
              className="h-full w-full object-cover"
              fittingType="fill"
              focalPointX={slide.focalPointX}
              focalPointY={slide.focalPointY} />
            
            </div>
          )}
          </div>
        }
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/45 via-[#0A0A0A]/15 to-transparent" />
      </div>

      {showArrows &&
      <button
        onClick={() => handleManual('prev')}
        aria-label="Previous"
        className="hidden md:flex absolute left-6 top-1/2 z-40 h-11 w-11 -translate-y-1/2 items-center justify-center border-white/20 text-white backdrop-blur-sm transition-colors border/0 bg-white/0 hover:bg-white/0">
          
          <ChevronLeft className="h-5 w-5" strokeWidth={1} />
        </button>
      }
      {showArrows &&
      <button
        onClick={() => handleManual('next')}
        aria-label="Next"
        className="hidden md:flex absolute right-6 top-1/2 z-40 h-11 w-11 -translate-y-1/2 items-center justify-center border-white/20 text-white backdrop-blur-sm transition-colors border/0 hover:bg-white/0 bg-white/0">
          
          <ChevronRight className="h-5 w-5" strokeWidth={1} />
        </button>
      }

      <div className="relative flex w-full items-end px-6 pb-20 pt-44 lg:px-16 lg:pb-28 lg:pt-52">
        <div className="relative z-30 border max-w-[974px] text-left text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] py-6 px-6 lg:-translate-x-[-10%] min-[1980px]:max-w-[33vw] border-white/15 bg-black/25 backdrop-blur-xl backdrop-saturate-150 lg:w-fit">
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
            <GoldButton to={langPath('/kontakt-termin')} tone="primary" className="flex-1 w-full sm:w-auto">{t('hero.beratungAnfragen')}</GoldButton>
            <GoldButton to={langPath('/behandlungen')} tone="outline" className="border flex-1 border-[#C9AF80] text-[#F5F3EE] hover:bg-[#C9AF80] hover:text-[#0A0A0A]">{t('hero.behandlungenEntdecken')}</GoldButton>
          </div>

          <address className="mt-12 not-italic eyebrow text-white/70">
            {settings.street} · {settings.postal_code} {settings.city}
          </address>
        </div>
      </div>
    </section>);

}