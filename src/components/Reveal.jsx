import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  clip = false,
  direction = null
}) {
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
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    io.observe(el);

    // Sicherheits-Fallback:
    // Falls der Observer bei Bildern oder Layout-Änderungen nicht feuert,
    // wird der Inhalt trotzdem sichtbar.
    const fallback = setTimeout(() => {
      setVisible(true);
    }, 1800);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const directionClass =
    direction === 'left'
      ? '-translate-x-[30%]'
      : direction === 'right'
        ? 'translate-x-[30%]'
        : direction === 'up'
          ? 'translate-y-[30%]'
          : direction === 'down'
            ? '-translate-y-[30%]'
            : '';

  return (
    <div
      ref={ref}
      className={`
        reveal
        ${clip ? 'reveal-clip' : ''}
        ${directionClass}
        ${visible ? 'is-visible' : ''}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}