import { useEffect, useRef, useState } from 'react';

// Lightweight scroll-parallax: returns a ref to attach and a translateY
// offset in px, driven by rAF-throttled passive scroll listener. Disabled
// on touch/mobile widths and when the user prefers reduced motion.
export default function useParallax(factor = 0.15) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || window.innerWidth < 1024) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          setOffset(-center * factor);
        }
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor]);

  return { ref, offset };
}