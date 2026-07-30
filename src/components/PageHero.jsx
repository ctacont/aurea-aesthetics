import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';

export default function PageHero({ eyebrow, title, accent, lead, image, breadcrumbs = [] }) {
  return (
    <section className="relative bg-[#0A0A0A] pt-36 pb-20 text-white lg:pt-48 lg:pb-28">
      {image && (
        <div className="absolute inset-0 opacity-25">
          <Image src={image} alt="" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/85" />
        </div>
      )}

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Brotkrumen" className="mb-10 eyebrow text-white/35">
            {breadcrumbs.map((b, i) => (
              <span key={b.path}>
                {i > 0 && <span className="mx-2 text-[#C9AF80]">·</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/60">{b.name}</span>
                ) : (
                  <Link to={b.path} className="link-underline">{b.name}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}

        <h1 className="mt-7 max-w-3xl font-heading text-[2.4rem] font-light leading-[1.1] md:text-6xl">
          {title}
          {accent && <span className="block italic text-[#C9AF80]">{accent}</span>}
        </h1>

        {lead && (
          <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-white/55">{lead}</p>
        )}
      </div>
    </section>
  );
}