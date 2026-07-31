import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQueryClient } from '@tanstack/react-query';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LogOut } from 'lucide-react';
import { IMAGES } from '@/lib/site';

const persist = (raw, payload) =>
  raw?.id
    ? base44.entities.SiteSettings.update(raw.id, payload)
    : base44.entities.SiteSettings.create(payload);

const DEFAULT_SLIDES = [
  { src: IMAGES.zurich, active: true, order: 0 },
  { src: IMAGES.interior, active: true, order: 1 },
  { src: IMAGES.hero, active: true, order: 2 },
];

function normalize(rawSlides) {
  if (Array.isArray(rawSlides) && rawSlides.length === 3) {
    return rawSlides.map((s, i) => ({
      src: s?.src || '',
      active: s?.active !== false,
      order: typeof s?.order === 'number' ? s.order : i,
    }));
  }
  return DEFAULT_SLIDES.map((s) => ({ ...s }));
}

export default function HeroSliderAdmin({ raw }) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [slides, setSlides] = useState(() => normalize(raw?.hero_slides));
  const [uploadingIndex, setUploadingIndex] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const fileRefs = useRef([null, null, null]);

  useEffect(() => {
    setSlides(normalize(raw?.hero_slides));
  }, [raw]);

  const handleLogout = () => {
    try { sessionStorage.removeItem('aurea_admin_auth'); } catch {}
    navigate('/');
  };

  const onUpload = async (i, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingIndex(i);
    setError('');
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setSlides((prev) => prev.map((s, idx) => (idx === i ? { ...s, src: file_url } : s)));
      setSaved(false);
    } catch {
      setError('Upload fehlgeschlagen.');
    } finally {
      setUploadingIndex(null);
      if (fileRefs.current[i]) fileRefs.current[i].value = '';
    }
  };

  const toggleActive = (i, value) => {
    setSlides((prev) => prev.map((s, idx) => (idx === i ? { ...s, active: value } : s)));
    setSaved(false);
  };

  // Swap orders: assigning order `newOrder` to slide i trades it with the slide currently at that order.
  const changeOrder = (i, newOrder) => {
    setSlides((prev) => {
      const next = prev.map((s) => ({ ...s }));
      const target = next.findIndex((s) => s.order === newOrder);
      if (target === -1 || target === i) return next;
      const tmp = next[i].order;
      next[i].order = next[target].order;
      next[target].order = tmp;
      return next;
    });
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    setError('');
    try {
      const sorted = [...slides].sort((a, b) => a.order - b.order);
      await persist(raw, { hero_slides: sorted });
      await qc.invalidateQueries({ queryKey: ['site-settings'] });
      setSaved(true);
    } catch {
      setError('Speichern fehlgeschlagen.');
    } finally {
      setSaving(false);
    }
  };

  const orderLabel = (order) => `Position ${order + 1}`;

  return (
    <div className="mt-12 border-t border-neutral-300 pt-10">
      <div className="flex items-center justify-between">
        <div>
          <Label className="eyebrow text-neutral-400">Hero-Slider Bilder</Label>
          <p className="mt-2 text-sm text-neutral-500">
            Jedes Bild einzeln hochladen, aktivieren/deaktivieren und per Position sortieren.
            Nur aktive Slides erscheinen im Frontend in der festgelegten Reihenfolge.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={handleLogout}
          className="rounded-none px-5 py-3"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Abmelden
        </Button>
      </div>

      <div className="mt-8 space-y-6">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 border border-neutral-200 p-5 sm:flex-row sm:items-center"
          >
            {/* Preview */}
            <div className="h-[100px] w-[160px] shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
              {slide.src ? (
                <Image
                  src={slide.src}
                  alt={`Slide ${i + 1}`}
                  className="h-full w-full"
                  fittingType="fill"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
                  Kein Bild
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-1 flex-wrap items-center gap-6">
              <div>
                <p className="eyebrow text-neutral-400">Slide {i + 1}</p>
                <input
                  ref={(el) => (fileRefs.current[i] = el)}
                  type="file"
                  accept="image/*"
                  onChange={(e) => onUpload(i, e)}
                  className="hidden"
                  id={`hero-slide-upload-${i}`}
                />
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploadingIndex === i}
                  onClick={() => fileRefs.current[i]?.click()}
                  className="mt-2 rounded-none px-6 py-4"
                >
                  {uploadingIndex === i ? 'Lädt…' : slide.src ? 'Ersetzen' : 'Hochladen'}
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Label htmlFor={`slide-active-${i}`} className="eyebrow text-neutral-400">
                  Aktiv
                </Label>
                <Switch
                  id={`slide-active-${i}`}
                  checked={slide.active}
                  onCheckedChange={(v) => toggleActive(i, v)}
                />
              </div>

              <div className="flex items-center gap-3">
                <Label className="eyebrow text-neutral-400">Position</Label>
                <Select value={String(slide.order)} onValueChange={(v) => changeOrder(i, Number(v))}>
                  <SelectTrigger className="w-[140px] rounded-none">
                    <SelectValue>{orderLabel(slide.order)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2].map((o) => (
                      <SelectItem key={o} value={String(o)}>
                        Position {o + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <Button onClick={save} disabled={saving} className="rounded-none px-10 py-5">
          {saving ? 'Wird gespeichert' : 'Slider speichern'}
        </Button>
        {saved && <span className="eyebrow text-[#8A7550]">Gespeichert</span>}
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </div>
  );
}