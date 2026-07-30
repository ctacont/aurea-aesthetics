import React from 'react';
import Reveal from '@/components/Reveal';

export default function TextBlock({ eyebrow, title, body, tone = 'light', children }) {
  const dark = tone === 'dark';
  return (
    <section
      className={`px-6 py-20 lg:px-12 lg:py-28 ${
        dark ? 'bg-[#F4F1EE]' : 'bg-background'
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-[#8A7550]">{eyebrow}</p>
            <h2
              className="mt-6 font-heading text-[1.8rem] font-light leading-tight md:text-4xl text-neutral-900"
            >
              {title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100} className="lg:col-span-8">
          {body && (
            <p
              className="whitespace-pre-line text-lg leading-[1.75] text-neutral-700"
            >
              {body}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}