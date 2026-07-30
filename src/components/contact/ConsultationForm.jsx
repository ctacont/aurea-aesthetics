import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useTreatments } from '@/lib/useSite';
import { Check } from 'lucide-react';

const field =
  'peer w-full border-0 border-b border-neutral-300 bg-transparent pb-3 pt-6 text-[0.98rem] text-neutral-900 placeholder-transparent transition-colors focus:border-[#C9AF80] focus:outline-none';
const labelCls =
  'pointer-events-none absolute left-0 top-6 eyebrow text-neutral-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-[#8A7550] peer-[:not(:placeholder-shown)]:top-0';

export default function ConsultationForm() {
  const { data: treatments = [] } = useTreatments();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);

    if (!fd.get('consent')) {
      setError('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }

    setSending(true);
    try {
      await base44.entities.ConsultationRequest.create({
        first_name: fd.get('first_name'),
        last_name: fd.get('last_name'),
        email: fd.get('email'),
        phone: fd.get('phone') || '',
        preferred_language: fd.get('preferred_language') || 'de',
        treatment_interest: fd.get('treatment_interest') || '',
        message: fd.get('message') || '',
        consent: true,
      });
      setDone(true);
    } catch {
      setError('Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.');
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="border border-[#C9AF80] bg-[#F4F1EE] p-10 lg:p-14">
        <Check className="h-8 w-8 text-[#8A7550]" strokeWidth={1} />
        <h3 className="mt-6 font-heading text-3xl font-light">Vielen Dank für Ihre Anfrage.</h3>
        <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-neutral-600">
          Wir haben Ihre Anfrage erhalten und melden uns diskret und persönlich bei Ihnen zurück,
          um einen passenden Termin zu vereinbaren.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <div className="relative">
          <input name="first_name" required placeholder="Vorname" className={field} />
          <label className={labelCls}>Vorname *</label>
        </div>
        <div className="relative">
          <input name="last_name" required placeholder="Nachname" className={field} />
          <label className={labelCls}>Nachname *</label>
        </div>
        <div className="relative">
          <input type="email" name="email" required placeholder="E-Mail" className={field} />
          <label className={labelCls}>E-Mail *</label>
        </div>
        <div className="relative">
          <input type="tel" name="phone" placeholder="Telefon" className={field} />
          <label className={labelCls}>Telefon</label>
        </div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label className="eyebrow text-neutral-400" htmlFor="treatment_interest">Anlass</label>
          <select
            id="treatment_interest"
            name="treatment_interest"
            className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent pb-3 text-[0.98rem] focus:border-[#C9AF80] focus:outline-none"
          >
            <option value="">Allgemeine Beratung</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.title_de}>{t.title_de}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="eyebrow text-neutral-400" htmlFor="preferred_language">Bevorzugte Sprache</label>
          <select
            id="preferred_language"
            name="preferred_language"
            className="mt-3 w-full border-0 border-b border-neutral-300 bg-transparent pb-3 text-[0.98rem] focus:border-[#C9AF80] focus:outline-none"
          >
            <option value="de">Deutsch</option>
            <option value="en">Englisch</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <textarea name="message" rows={4} placeholder="Nachricht" className={`${field} resize-none`} />
        <label className={labelCls}>Ihre Nachricht</label>
      </div>

      <label className="flex cursor-pointer items-start gap-4 text-xs leading-relaxed text-neutral-600">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 accent-[#C9AF80]" />
        <span>
          Ich habe die Datenschutzerklärung gelesen und bin damit einverstanden, dass meine Angaben
          zur Bearbeitung meiner Anfrage vertraulich verarbeitet werden. *
        </span>
      </label>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="group relative inline-flex items-center justify-center overflow-hidden border border-[#0A0A0A]/25 px-10 py-4 eyebrow transition-colors duration-500 disabled:opacity-50"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />
        <span className="relative z-10">{sending ? 'Wird gesendet' : 'Anfrage senden'}</span>
      </button>
    </form>
  );
}