"use client";

import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";

export default function ServiceArea() {
  const sectionRef = useBackdropSection<HTMLElement>("#FAF6F0");

  return (
    <section id="areas" ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-14 items-center">
        <div>
          <Reveal className="max-w-xl mb-10">
            <p className="eyebrow mb-4">Where I Work</p>
            <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08] text-teal-deep">
              Orem, Utah
              <br />
              <span className="italic font-normal">
                &amp; surrounding areas.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-2xl bg-white border border-teal/10 rounded-2xl p-7 md:p-8 shadow-[0_10px_30px_-18px_rgba(16,27,55,0.35)]">
              <span className="relative grid place-items-center w-20 h-20 rounded-full bg-teal text-linen shrink-0">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border-2 border-teal/30 scale-[1.1]"
                />
                <MapPin size={32} />
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display text-2xl text-teal-deep">
                    Orem
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-amber-dark">
                    Home base
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">
                  Professional house, apartment &amp; office cleaning in
                  Orem, Utah &amp; the surrounding areas &mdash; wherever the
                  drive makes sense from home base.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 max-w-lg">
            <p className="text-ink/60 text-sm leading-relaxed">
              Not sure if you&apos;re covered? Text the address &mdash; if
              it&apos;s a reasonable drive from Orem, it&apos;s very likely
              covered.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_30px_70px_-30px_rgba(16,27,55,0.4)] aspect-[4/3] lg:aspect-[4/4.6] border border-teal/10">
            <iframe
              title="Map of Orem, Utah service area"
              src="https://www.google.com/maps?q=Orem,+Utah&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[15%]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
