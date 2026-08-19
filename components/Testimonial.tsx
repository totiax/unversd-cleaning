"use client";

import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";

export default function Testimonial() {
  const sectionRef = useBackdropSection<HTMLElement>("#FAF6F0");

  return (
    <section id="reviews" ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-grid place-items-center w-14 h-14 rounded-full bg-teal-deep/5 text-amber-dark mb-8">
            <Quote size={24} />
          </span>
          <p className="font-display text-2xl md:text-4xl leading-snug text-teal-deep">
            &ldquo;She&apos;s incredible &mdash; she made my house look
            immaculate.&rdquo;
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-ink/50">
            Julia T. &middot; Google &amp; Facebook review
          </p>
        </Reveal>
      </div>
    </section>
  );
}
