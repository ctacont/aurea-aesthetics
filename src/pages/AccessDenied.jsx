import React from 'react';
import Seo from '@/components/Seo';
import GoldButton from '@/components/GoldButton';

export default function AccessDenied() {
  return (
    <>
      <Seo title="Kein Zugriff | Aurea Aesthetics" noindex path="/admin" />
      <div className="flex min-h-[100svh] items-center justify-center px-6">
        <div className="text-center">
          <p className="eyebrow text-[#8A7550]">Zugriff verweigert</p>
          <h1 className="mt-6 font-heading text-5xl font-light">Kein Zugriff</h1>
          <p className="mt-6 max-w-md text-neutral-500">
            Sie haben keine Berechtigung, diesen Bereich aufzurufen. Wenden Sie sich an den
            Praxisinhaber, falls Ihnen Admin-Zugang gewährt werden soll.
          </p>
          <div className="mt-10 flex justify-center">
            <GoldButton to="/" tone="primary">Zurück zur Startseite</GoldButton>
          </div>
        </div>
      </div>
    </>
  );
}