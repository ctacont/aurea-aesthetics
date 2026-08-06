import React, { useEffect, useState } from 'react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/lib/LanguageContext';

// Mobile-only sticky booking button. Shows itself only when none of the
// page's other booking CTAs ([data-booking-cta]) are currently visible in
// the viewport, so it never duplicates a CTA the user can already see.
export default function StickyBookingButton() {
  const { handleBook } = useBooking();
  const { t } = useLanguage();
  const [anyVisible, setAnyVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      const nodes = Array.from(document.querySelectorAll('[data-booking-cta]'));
      if (nodes.length === 0) {
        setAnyVisible(false);
        return;
      }
      const visible = new Set();
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);else visible.delete(entry.target);
        });
        setAnyVisible(visible.size > 0);
      });
      nodes.forEach((n) => io.observe(n));
      return () => io.disconnect();
    };

    const cleanup = update();
    const onRouteSettle = setTimeout(update, 300);
    return () => {
      if (cleanup) cleanup();
      clearTimeout(onRouteSettle);
    };
  }, []);

  if (anyVisible) return null;

  return (
    <button
      onClick={handleBook}
      data-sticky-booking-cta="true"
      className="fixed bottom-5 right-5 z-40 px-6 py-3.5 eyebrow bg-[#C9AF80] text-[#0A0A0A] shadow-lg transition-colors duration-300 hover:bg-[#D4BC93] lg:hidden"
    >
      {t('nav.beratungAnfragen')}
    </button>
  );
}