import React, { useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQueryClient } from '@tanstack/react-query';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const update = (raw, payload) =>
  raw?.id
    ? base44.entities.SiteSettings.update(raw.id, payload)
    : base44.entities.SiteSettings.create(payload);

export default function HeroVideoUpload({ raw }) {
  const qc = useQueryClient();
  const videoInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');

  const videoUrl = raw?.hero_video_url || '';
  const mobileImageUrl = raw?.hero_video_mobile_image_url || '';

  const onVideo = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingVideo(true);
    setError('');
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      await update(raw, { hero_video_url: file_url });
      await qc.invalidateQueries({ queryKey: ['site-settings'] });
    } catch {
      setError('Video-Upload fehlgeschlagen.');
    } finally {
      setUploadingVideo(false);
      if (videoInputRef.current) videoInputRef.current.value = '';
    }
  };

  const onImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    setError('');
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      await update(raw, { hero_video_mobile_image_url: file_url });
      await qc.invalidateQueries({ queryKey: ['site-settings'] });
    } catch {
      setError('Bild-Upload fehlgeschlagen.');
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) imageInputRef.current.value = '';
    }
  };

  const clearVideo = async () => {
    await update(raw, { hero_video_url: '', hero_video_mobile_image_url: '' });
    await qc.invalidateQueries({ queryKey: ['site-settings'] });
  };

  return (
    <div className="mt-12 border-t border-neutral-300 pt-10">
      <Label className="eyebrow text-neutral-400">Hero-Video</Label>
      <p className="mt-2 text-sm text-neutral-500">
        MP4-Video, das auf Desktop und Tablet als stummer Hintergrund-Loop im Hero läuft.
        Auf Mobile wird stattdessen das Fallback-Bild angezeigt. Wenn kein Video gesetzt ist,
        erscheint der bestehende 3-Bilder-Crossfade-Slider.
      </p>

      {/* Video field */}
      <div className="mt-5">
        <p className="eyebrow text-neutral-400">Hero-Video (MP4, Desktop/Tablet)</p>
        {videoUrl ? (
          <div className="mt-3 h-[300px] overflow-hidden rounded-lg border border-neutral-200 bg-black">
            <video src={videoUrl} muted loop playsInline className="h-full w-full object-cover" />
          </div>
        ) : (
          <p className="mt-3 text-sm text-neutral-400">Kein Video hochgeladen.</p>
        )}
        <div className="mt-5 flex items-center gap-4">
          <input
            ref={videoInputRef}
            type="file"
            accept="video/mp4"
            onChange={onVideo}
            className="hidden"
            id="hero-video-upload"
          />
          <Button
            type="button"
            variant="outline"
            disabled={uploadingVideo}
            onClick={() => videoInputRef.current?.click()}
            className="rounded-none px-8 py-5"
          >
            {uploadingVideo ? 'Wird hochgeladen' : videoUrl ? 'Video ersetzen' : 'Video hochladen'}
          </Button>
          {videoUrl && (
            <Button type="button" variant="outline" onClick={clearVideo} className="rounded-none px-8 py-5">
              Entfernen
            </Button>
          )}
        </div>
      </div>

      {/* Mobile fallback image field */}
      <div className="mt-10">
        <p className="eyebrow text-neutral-400">Hero-Video Fallback-Bild (Mobile)</p>
        {mobileImageUrl ? (
          <div className="mt-3 h-[300px] overflow-hidden rounded-lg border border-neutral-200">
            <Image src={mobileImageUrl} alt="Mobile Fallback" className="h-full w-full" fittingType="fill" />
          </div>
        ) : (
          <p className="mt-3 text-sm text-neutral-400">
            Kein Fallback-Bild gesetzt — auf Mobile wird der erste Slider-Slide verwendet.
          </p>
        )}
        <div className="mt-5 flex items-center gap-4">
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={onImage}
            className="hidden"
            id="hero-video-mobile-upload"
          />
          <Button
            type="button"
            variant="outline"
            disabled={uploadingImage}
            onClick={() => imageInputRef.current?.click()}
            className="rounded-none px-8 py-5"
          >
            {uploadingImage ? 'Wird hochgeladen' : mobileImageUrl ? 'Bild ersetzen' : 'Bild hochladen'}
          </Button>
        </div>
      </div>

      {error && <p className="mt-4 text-xs text-red-600">{error}</p>}
    </div>
  );
}