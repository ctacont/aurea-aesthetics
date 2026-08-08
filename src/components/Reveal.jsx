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
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    io.observe(el);

    return () => {
      io.disconnect();
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