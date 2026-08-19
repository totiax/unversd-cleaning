"use client";

import { ChefHat, Bath, Sofa, Boxes, Building2, CalendarClock } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";

const rooms = [
  {
    icon: ChefHat,
    title: "Kitchens",
    detail:
      "Countertops, sink, stovetop, appliance exteriors, cabinet fronts and floors.",
  },
  {
    icon: Bath,
    title: "Bathrooms",
    detail: "Tubs, showers, toilets, mirrors, and tile & grout.",
  },
  {
    icon: Sofa,
    title: "Bedrooms & Living Areas",
    detail: "Dusting, vacuuming, surfaces, and baseboards throughout.",
  },
  {
    icon: Boxes,
    title: "Move-In / Move-Out",
    detail: "A full deep clean before keys change hands, top to bottom.",
  },
  {
    icon: Building2,
    title: "Offices & Small Businesses",
    detail: "Desks, common areas, floors and trash, on your schedule.",
  },
  {
    icon: CalendarClock,
    title: "Regular Maintenance",
    detail: "Weekly, biweekly or monthly visits that keep it that way.",
  },
];

export default function Services() {
  const sectionRef = useBackdropSection<HTMLElement>("#E7EFEC");

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-4">What&apos;s Included</p>
            <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08] text-teal-deep">
              Cleaned the way
              <br />
              <span className="italic font-normal">you&apos;d do it yourself</span>
              <br />
              &mdash; if you had the time.
            </h2>
            <p className="mt-6 text-ink/65 leading-relaxed max-w-sm">
              Every visit goes room by room. Here&apos;s exactly what&apos;s
              covered, whether it&apos;s a weekly touch-up or a full
              move-out deep clean.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {rooms.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="h-full bg-linen rounded-2xl p-6 border border-teal/10 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-teal-deep/5 text-teal mb-4">
                    <r.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg text-teal-deep mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
