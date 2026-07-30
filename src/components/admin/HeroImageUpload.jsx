import React, { useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQueryClient } from '@tanstack/react-query';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { IMAGES } from '@/lib/site';

export default function HeroImageUpload({ raw }) {
  const qc = useQueryClient();
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const current = raw?.hero_image_url || IMAGES.hero;

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    setDone(false);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      const payload = { hero_image_url: file_url };
      if (raw?.id) await base44.entities.SiteSettings.update(raw.id, payload);
      else await base44.entities.SiteSettings.create(payload);
      await qc.invalidateQueries({ queryKey: ['site-settings'] });
      setDone(true);
    } catch (err) {
      setError('Upload fehlgeschlagen. Bitte erneut versuchen.');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="mt-12 border-t border-neutral-300 pt-10">
      <Label className="eyebrow text-neutral-400">Hero-Bild</Label>
      <p className="mt-2 text-sm text-neutral-500">
        Wird auf der Startseite als Hauptbild angezeigt. Das hochgeladene Bild ersetzt das Standardbild.
      </p>

      <div className="mt-5 h-[300px] overflow-hidden rounded-lg border border-neutral-200">
        <Image
          src={current}
          alt="Aktuelles Hero-Bild"
          className="h-full w-full"
          fittingType="fill"
        />
      </div>

      <div className="mt-5 flex items-center gap-4">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onFile}
          className="hidden"
          id="hero-image-upload"
        />
        <Button
          type="button"
          variant="outline"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="rounded-none px-8 py-5"
        >
          {uploading ? 'Wird hochgeladen' : raw?.hero_image_url ? 'Bild ersetzen' : 'Bild hochladen'}
        </Button>
        {done && <span className="eyebrow text-[#8A7550]">Gespeichert</span>}
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </div>
  );
}