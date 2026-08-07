import { useEffect, useRef, useState } from 'react';
import { subscribeScroll } from '@/lib/scrollManager';

// Lightweight scroll-parallax: returns a ref to attach and a translateY
// offset in px, driven by the shared rAF-throttled scroll controller (see
// scrollManager) so multiple instances on one page never register more than
// one real window scroll listener. Disabled on touch/mobile widths and when
// the user prefers reduced motion.
export default function useParallax(factor = 0.15) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || window.innerWidth < 1024) return;

    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(-center * factor);
      }
    };
    const unsubscribe = subscribeScroll(update);
    update();
    return unsubscribe;
  }, [factor]);

  return { ref, offset };
}