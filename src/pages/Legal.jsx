import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import { useSettings } from '@/lib/useSite';
import { useLanguage } from '@/lib/LanguageContext';

function Section({ title, children }) {
  return (
    <div className="border-t border-neutral-300 py-10">
      <h2 className="font-heading text-2xl font-light">{title}</h2>
      <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-neutral-600">{children}</div>
    </div>
  );
}

export function Impressum() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  return (
    <>
      <Seo title={t('legal.impressumSeoTitle')} description={t('legal.impressumSeoDesc')} path={neutralPath(window.location.pathname)} lang={lang} />
      <PageHero
        eyebrow={t('legal.impressumEyebrow')}
        title={t('legal.impressumTitle')}
        breadcrumbs={[{ name: t('legal.crumbHome'), path: '/' }, { name: t('legal.crumbImpressum'), path: '/impressum' }]}
      />
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <Section title={t('legal.impressumResponsible')}>
          <address className="not-italic">
            {settings.practice_name}<br />
            {settings.street}<br />
            {settings.postal_code} {settings.city}<br />
            {t('legal.switzerland')}
          </address>
        </Section>
        <Section title={t('legal.impressumContact')}>
          <p>{settings.phone || t('legal.impressumContactPhone')}</p>
          <p>{settings.email || t('legal.impressumContactEmail')}</p>
        </Section>
        <Section title={t('legal.impressumLegal')}>
          <p>{t('legal.impressumLegalText')}</p>
        </Section>
        <Section title={t('legal.impressumProfession')}>
          <p>{t('legal.impressumProfessionText')}</p>
        </Section>
        <Section title={t('legal.impressumLiability')}>
          <p>{t('legal.impressumLiabilityText')}</p>
        </Section>
        <div className="border-t border-neutral-300" />
      </div>
    </>
  );
}

export function Datenschutz() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  return (
    <>
      <Seo title={t('legal.datenschutzSeoTitle')} description={t('legal.datenschutzSeoDesc')} path={neutralPath(window.location.pathname)} lang={lang} />
      <PageHero
        eyebrow={t('legal.datenschutzEyebrow')}
        title={t('legal.datenschutzTitle')}
        breadcrumbs={[{ name: t('legal.crumbHome'), path: '/' }, { name: t('legal.crumbDatenschutz'), path: '/datenschutz' }]}
      />
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <Section title={t('legal.datenschutzResponsible')}>
          <address className="not-italic">
            {settings.practice_name}, {settings.street}, {settings.postal_code} {settings.city}
          </address>
        </Section>
        <Section title={t('legal.datenschutzPrinciple')}>
          <p>{t('legal.datenschutzPrincipleText')}</p>
        </Section>
        <Section title={t('legal.datenschutzForm')}>
          <p>{t('legal.datenschutzFormP1')}</p>
          <p>{t('legal.datenschutzFormP2')}</p>
        </Section>
        <Section title={t('legal.datenschutzRetention')}>
          <p>{t('legal.datenschutzRetentionText')}</p>
        </Section>
        <Section title={t('legal.datenschutzRights')}>
          <p>{t('legal.datenschutzRightsText')}</p>
        </Section>
        <Section title={t('legal.datenschutzExternal')}>
          <p>{t('legal.datenschutzExternalText')}</p>
        </Section>
        <div className="border-t border-neutral-300" />
      </div>
    </>
  );
}

export default Impressum;