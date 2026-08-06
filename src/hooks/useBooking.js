import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '@/lib/useSite';
import { useLanguage } from '@/lib/LanguageContext';

// Central booking hook — every "Termin buchen" CTA on the site should call
// handleBook() instead of linking directly to /kontakt-termin. Today this
// only supports Modus A (external link via SiteSettings.booking_url, with a
// fallback to the contact page). Once Metaesthetics delivers a widget/iFrame,
// this is the single place to extend with 'widget' | 'iframe' modes.
export function useBooking() {
  const { settings } = useSettings();
  const { langPath } = useLanguage();
  const navigate = useNavigate();

  const bookingUrl = settings.booking_url;
  const bookingType = bookingUrl ? 'link' : 'fallback';

  const handleBook = useCallback(() => {
    if (bookingUrl) {
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(langPath('/kontakt-termin'));
    }
  }, [bookingUrl, navigate, langPath]);

  return { handleBook, bookingType, bookingUrl };
}