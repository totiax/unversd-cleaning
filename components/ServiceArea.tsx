"use client";

import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";

const stops = [
  { city: "Orem", tag: "Home base" },
  { city: "Provo", tag: "" },
  { city: "Springville", tag: "" },
  { city: "American Fork", tag: "" },
  { city: "Lindon", tag: "" },
];

export default function ServiceArea() {
  const sectionRef = useBackdropSection<HTMLElement>("#FAF6F0");

  return (
    <section id="areas" ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Where I Work</p>
          <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08] text-teal-deep">
            One route through
            <br />
            <span className="italic font-normal">Utah County.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            {/* Connecting line */}
            <div
              aria-hidden
              className="hidden md:block absolute top-5 left-0 right-0 h-px bg-[repeating-linear-gradient(90deg,theme(colors.teal.DEFAULT)_0,theme(colors.teal.DEFAULT)_8px,transparent_8px,transparent_16px)] opacity-40"
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
              {stops.map((s) => (
                <div key={s.city} className="relative flex flex-col items-start md:items-center text-left md:text-center">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-teal text-linen mb-3 shrink-0 relative z-10">
                    <MapPin size={17} />
                  </span>
                  <span className="font-display text-xl text-teal-deep">
                    {s.city}
                  </span>
                  {s.tag && (
                    <span className="mt-1 text-[11px] font-bold uppercase tracking-wide text-amber-dark">
                      {s.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 max-w-lg">
          <p className="text-ink/60 text-sm leading-relaxed">
            Somewhere nearby but not listed? Text the address &mdash; if
            it&apos;s a reasonable drive from Orem, it&apos;s very likely
            covered.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
