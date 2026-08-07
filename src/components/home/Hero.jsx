import React, { useState, useEffect, useRef } from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import GoldButton from '@/components/GoldButton';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';
import { subscribeScroll } from '@/lib/scrollManager';

const SLIDE_INTERVAL = 5000;
const FADE_DURATION = 5000;

export default function Hero({ settings }) {
  const { t, langPath } = useLanguage();
  const { handleBook } = useBooking();
  const bgRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [parallax, setParallax] = useState(0);
  const [scrollFx, setScrollFx] = useState({
    scale: 1,
    textShift: 0,
    textFade: 1
  });

  const [reduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');

    const onChange = (e) => {
      setIsMobile(e.matches);
    };

    mq.addEventListener('change', onChange);

    return () => {
      mq.removeEventListener('change', onChange);
    };
  }, []);

  const customSlides = Array.isArray(settings.hero_slides)
    ? settings.hero_slides
        .filter((s) => s && s.active && s.src)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .slice(0, 3)
        .map((s) => ({
          src: s.src,
          focalPointX: 0.5,
          focalPointY: 0.5
        }))
    : [];

  const slides = customSlides;

  const hasVideo = !!settings.hero_video_url;
  const hasSlider = !hasVideo && slides.length > 0;

  const singleImageSrc = settings.hero_image_url || IMAGES.hero;

  const mobileFallback = hasVideo
    ? settings.hero_video_mobile_image_url ||
      settings.hero_image_url ||
      IMAGES.hero
    : settings.hero_image_url ||
      (hasSlider ? slides[0].src : IMAGES.hero);

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % slides.length);
  };

  const startAuto = () => {
    if (hasVideo || !hasSlider || reduceMotion || isMobile) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(goNext, SLIDE_INTERVAL);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = null;
  };

  useEffect(() => {
    if (hasVideo || !hasSlider || reduceMotion || isMobile) return;

    startAuto();

    return () => {
      stopAuto();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasVideo, hasSlider, isMobile]);

  useEffect(() => {
    const id = setTimeout(() => {
      setMounted(true);
    }, 80);

    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduce || window.innerWidth < 768) return;

    const isTabletFx = window.innerWidth < 1024;

    const update = () => {
      const progress = Math.min(
        window.scrollY / window.innerHeight,
        1
      );

      if (isTabletFx) {
        setParallax(
          Math.min(window.scrollY * 0.125, 16)
        );

        setScrollFx({
          scale: 1 + progress * 0.02,
          textShift: progress * -6,
          textFade: 1 - progress * 0.08
        });
      } else {
        setParallax(
          window.scrollY * 0.25
        );

        setScrollFx({
          scale: 1 + progress * 0.04,
          textShift: progress * -10,
          textFade: 1 - progress * 0.15
        });
      }
    };

    const unsubscribe = subscribeScroll(update);

    update();

    return unsubscribe;
  }, []);

  const stagger = () =>
    `transition-all duration-[2300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      mounted
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 -translate-x-[50%]'
    }`;

  const delayStyle = (ms) => ({
    transitionDelay: `${ms}ms`
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      <div
        ref={bgRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translateY(${parallax}px) scale(${scrollFx.scale})`,
          willChange: 'transform'
        }}
      >
        {hasVideo ? (
          <>
            {!isMobile && (
              <video
                src={settings.hero_video_url}
                autoPlay={!reduceMotion}
                muted
                loop={!reduceMotion}
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            {isMobile && (
              <div className="absolute inset-0">
                <Image
                  src={mobileFallback}
                  alt={t('hero.alt')}
                  className="h-full w-full object-cover"
                  fittingType="fill"
                />
              </div>
            )}
          </>
        ) : hasSlider ? (
          <div className="absolute inset-0">
            {isMobile ? (
              <Image
                src={mobileFallback}
                alt={t('hero.alt')}
                className="h-full w-full object-cover"
                fittingType="fill"
              />
            ) : (
              slides.map((slide, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity ease-in-out"
                  style={{
                    opacity: i === currentIndex ? 1 : 0,
                    zIndex: i,
                    transitionDuration: `${FADE_DURATION}ms`
                  }}
                >
                  <Image
                    key={
                      i === currentIndex
                        ? `${i}-active`
                        : i
                    }
                    src={slide.src}
                    alt={t('hero.alt')}
                    className={`h-full w-full object-cover ${
                      i === currentIndex
                        ? 'animate-kenburns'
                        : ''
                    }`}
                    fittingType="fill"
                    focalPointX={slide.focalPointX}
                    focalPointY={slide.focalPointY}
                  />
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src={
                isMobile
                  ? mobileFallback
                  : singleImageSrc
              }
              alt={t('hero.alt')}
              className="h-full w-full object-cover"
              fittingType="fill"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-[#0A0A0A]/20 to-transparent" />
      </div>

      <div className="relative flex w-full items-end px-6 pb-20 pt-44 lg:px-16 lg:pb-28 lg:pt-52">
        <div
          className="relative z-30 max-w-[720px] text-left text-white"
          style={{
            transform: `translateY(${scrollFx.textShift}px)`,
            opacity: scrollFx.textFade,
            willChange: 'transform'
          }}
        >
          <div
            className={stagger()}
            style={delayStyle(0)}
          >
            <Eyebrow tone="light">
              {t('hero.tagEyebrow')}
            </Eyebrow>
          </div>

          <h1
            className={`mt-7 font-heading text-[2.4rem] font-light leading-[1.1] [text-shadow:0_4px_30px_rgba(0,0,0,0.45)] md:text-[3.4rem] ${stagger()}`}
            style={delayStyle(140)}
          >
            {t('hero.title')}

            <span className="mt-2 block text-[#C9AF80]">
              {t('hero.accent')}
            </span>
          </h1>

          <p
            className={`mt-8 max-w-md text-[0.98rem] leading-relaxed text-white/85 [text-shadow:0_2px_16px_rgba(0,0,0,0.4)] ${stagger()}`}
            style={delayStyle(280)}
          >
            {t('hero.lead', {
              street: settings.street
            })}
          </p>

          <div
            className={`mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center ${stagger()}`}
            style={delayStyle(420)}
          >
            <GoldButton
              onClick={handleBook}
              data-booking-cta="true"
              tone="primary"
              className="w-full sm:w-auto"
            >
              {t('hero.beratungAnfragen')}
            </GoldButton>

            <GoldButton
              to={langPath('/praxis')}
              tone="outline"
              className="w-full border-[#C9AF80] text-[#F5F3EE] hover:bg-[#C9AF80] hover:text-[#0A0A0A] sm:w-auto"
            >
              {t('hero.behandlungenEntdecken')}
            </GoldButton>
          </div>

          <address
            className={`mt-12 not-italic eyebrow text-white/70 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] ${stagger()}`}
            style={delayStyle(560)}
          >
            {t('hero.building')} · {settings.street} · {settings.city}
          </address>
        </div>
      </div>
    </section>
  );
}