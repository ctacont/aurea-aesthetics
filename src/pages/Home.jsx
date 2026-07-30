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

export default function Home() {
  const { settings } = useSettings();
  const { data: treatments = [] } = useTreatments();
  const { data: doctors = [] } = useDoctors();

  return (
    <>
      <Seo
        title="Ästhetische Medizin Zürich | Aurea Aesthetics AG · Zürich Enge"
        description="Praxis für ästhetische Medizin in Zürich Enge. Behandlung mimischer Falten, Hyaluron Filler, Biostimulatoren und Skinbooster — individuell geplant, präzise durchgeführt, natürlich im Ergebnis."
        path="/"
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