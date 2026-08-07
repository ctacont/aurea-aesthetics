import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '', clip = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    // Safety net: if the observer never fires (e.g. a zero-height box during
    // layout/image load, or it never scrolls into the configured margin),
    // content must not stay permanently hidden behind opacity/clip-path —
    // visibility always wins over the entrance animation.
    const fallback = setTimeout(() => setVisible(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${clip ? 'reveal-clip' : ''} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      
      {children}
    </div>);

}