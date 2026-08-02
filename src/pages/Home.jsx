import React from 'react';
import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import TreatmentMatrix from '@/components/home/TreatmentMatrix';
import DoctorSection from '@/components/home/DoctorSection';
import Pillars from '@/components/home/Pillars';
import LocationSection from '@/components/home/LocationSection';
import Process from '@/components/home/Process';
import FaqPreview from '@/components/home/FaqPreview';
import CtaBand from '@/components/CtaBand';
import { useSettings, useTreatments, useDoctors } from '@/lib/useSite';
import { medicalBusinessSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { settings } = useSettings();
  const { data: treatments = [] } = useTreatments();
  const { data: doctors = [] } = useDoctors();
  const { t, lang, neutralPath } = useLanguage();

  return (
    <>
      <Seo
        title={t('homeSeo.title')}
        description={t('homeSeo.description')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={IMAGES.hero}
        jsonLd={medicalBusinessSchema(settings)}
      />
      <Hero settings={settings} />
      <Philosophy />
      {treatments.length > 0 && <TreatmentMatrix treatments={treatments} />}
      <DoctorSection doctors={doctors} />
      <Pillars />
      <LocationSection settings={settings} />
      <Process />
      <FaqPreview />
      <CtaBand settings={settings} />
    </>
  );
}