import React from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/lib/site';

export default function Philosophy() {
  return (
    <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Philosophie</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            Ästhetische Medizin bedeutet nicht Veränderung,
            <span className="text-[#8A7550]"> sondern Ausgleich.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={IMAGES.texture}
                alt="Warme Steinoberfläche mit Wasserfilm — Sinnbild für Präzision und Fluidität"
                className="h-full w-full"
                fittingType="fill"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={200}>
              <p className="text-lg leading-[1.75] text-neutral-700">
                Jedes Gesicht folgt einer eigenen Ordnung. Unsere Aufgabe ist nicht, diese Ordnung zu
                überschreiben, sondern sie zu verstehen — und dort behutsam zu unterstützen, wo Volumen,
                Spannkraft oder Hautqualität nachgelassen haben.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 border-l border-[#C9AF80] pl-8">
                <p className="font-heading text-2xl font-light leading-snug text-neutral-800 md:text-3xl">
                  Wir behandeln ästhetische Medizin als Medizin — mit Anamnese, Aufklärung,
                  Indikationsstellung und Nachkontrolle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-[#8A7550]">Zurückhaltung</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-neutral-600">
                    Weniger ist häufig medizinisch richtiger. Wir empfehlen konsequent das geringste
                    wirksame Verfahren — und sagen auch ab, wenn eine Behandlung nicht sinnvoll ist.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[#8A7550]">Präzision</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-neutral-600">
                    Anatomische Analyse, millimetergenaue Applikation und dokumentierte Verläufe
                    bilden die Grundlage jeder Behandlung.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}