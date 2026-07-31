import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQueryClient } from '@tanstack/react-query';
import { useSettings } from '@/lib/useSite';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Seo from '@/components/Seo';
import HeroImageUpload from '@/components/admin/HeroImageUpload';
import HeroVideoUpload from '@/components/admin/HeroVideoUpload';

const FIELDS = [
  { key: 'phone', label: 'Telefon', hint: 'Platzhalter — noch nicht bestätigt' },
  { key: 'email', label: 'E-Mail', hint: 'Platzhalter — noch nicht bestätigt' },
  { key: 'booking_url', label: 'Buchungs-URL (meta-esthetics.net)', hint: 'Optional' },
];

export default function Admin() {
  const { raw, settings } = useSettings();
  const qc = useQueryClient();
  const [form, setForm] = useState(settings);
  const [newPw, setNewPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => setForm(settings), [raw]);

  const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setSaved(false); };

  const save = async () => {
    setSaving(true);
    const payload = {
      coming_soon_mode: !!form.coming_soon_mode,
      practice_name: form.practice_name || '',
      street: form.street || '',
      postal_code: form.postal_code || '',
      city: form.city || '',
      district: form.district || '',
      phone: form.phone || '',
      email: form.email || '',
      opening_hours: form.opening_hours || '',
      booking_url: form.booking_url || '',
      admin_username: form.admin_username || '',
      admin_password: newPw || form.admin_password || '',
    };
    if (raw?.id) await base44.entities.SiteSettings.update(raw.id, payload);
    else await base44.entities.SiteSettings.create(payload);
    await qc.invalidateQueries({ queryKey: ['site-settings'] });
    setNewPw('');
    setSaving(false);
    setSaved(true);
  };

  return (
    <>
      <Seo title="Einstellungen | Aurea Aesthetics" noindex path="/admin" />
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-28 lg:px-12">
        <p className="eyebrow text-[#8A7550]">Verwaltung</p>
        <h1 className="mt-6 font-heading text-4xl font-light">Website-Einstellungen</h1>

        <div className="mt-14 flex items-start justify-between gap-8 border-y border-neutral-300 py-8">
          <div>
            <p className="font-heading text-2xl font-light">Coming-Soon-Modus</p>
            <p className="mt-2 max-w-md text-sm text-neutral-500">
              Wenn aktiv, sehen Besucher ausschliesslich die Vorankündigungsseite. Mit
              <code className="mx-1 text-[#8A7550]">?preview=1</code> bleibt die vollständige Website für Sie sichtbar.
            </p>
          </div>
          <Switch
            checked={!!form.coming_soon_mode}
            onCheckedChange={(v) => set('coming_soon_mode', v)}
            aria-label="Coming-Soon-Modus"
          />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {['practice_name', 'street', 'postal_code', 'city', 'district'].map((k) => (
            <div key={k}>
              <Label className="eyebrow text-neutral-400">{k}</Label>
              <Input className="mt-2" value={form[k] || ''} onChange={(e) => set(k, e.target.value)} />
            </div>
          ))}
          {FIELDS.map((f) => (
            <div key={f.key}>
              <Label className="eyebrow text-neutral-400">{f.label}</Label>
              <Input className="mt-2" value={form[f.key] || ''} onChange={(e) => set(f.key, e.target.value)} />
              <p className="mt-2 text-xs text-neutral-400">{f.hint}</p>
            </div>
          ))}
          <div className="sm:col-span-2">
            <Label className="eyebrow text-neutral-400">Öffnungszeiten / Erreichbarkeit</Label>
            <Textarea
              className="mt-2"
              rows={3}
              value={form.opening_hours || ''}
              onChange={(e) => set('opening_hours', e.target.value)}
            />
            <p className="mt-2 text-xs text-neutral-400">Platzhalter — noch nicht bestätigt</p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-300 pt-12">
          <p className="eyebrow text-[#8A7550]">Zugangsdaten</p>
          <h2 className="mt-4 font-heading text-2xl font-light">Admin-Zugang</h2>
          <p className="mt-2 max-w-md text-sm text-neutral-500">
            Benutzername und Passwort für das /admin-Passwort-Gate.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <Label className="eyebrow text-neutral-400">Benutzername</Label>
              <Input
                className="mt-2"
                value={form.admin_username || ''}
                onChange={(e) => set('admin_username', e.target.value)}
              />
            </div>
            <div>
              <Label className="eyebrow text-neutral-400">Passwort</Label>
              <div className="relative mt-2">
                <Input
                  type={showPw ? 'text' : 'password'}
                  className="rounded-none pr-16"
                  placeholder="••••••••"
                  value={newPw}
                  onChange={(e) => { setNewPw(e.target.value); setSaved(false); }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  {showPw ? 'Verbergen' : 'Anzeigen'}
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-400">Leer lassen, um das aktuelle Passwort beizubehalten.</p>
            </div>
          </div>
        </div>

        <HeroImageUpload raw={raw} />

        <HeroVideoUpload raw={raw} />

        <div className="mt-12 flex items-center gap-6">
          <Button onClick={save} disabled={saving} className="rounded-none px-10 py-6">
            {saving ? 'Wird gespeichert' : 'Speichern'}
          </Button>
          {saved && <span className="eyebrow text-[#8A7550]">Gespeichert</span>}
        </div>
      </div>
    </>
  );
}