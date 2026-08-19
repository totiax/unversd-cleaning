"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";

export default function BeforeAfter() {
  const sectionRef = useBackdropSection<HTMLElement>("#FAF6F0");
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <section id="transformation" ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-xl mx-auto text-center mb-14">
          <p className="eyebrow mb-4">The Unvers D. Difference</p>
          <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08] text-teal-deep">
            Drag the line.{" "}
            <span className="italic font-normal">See the change.</span>
          </h2>
          <p className="mt-5 text-ink/65 leading-relaxed">
            This is the kind of turnaround every visit is built around &mdash;
            from cluttered and dusty to genuinely spotless.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-[1.75rem] overflow-hidden select-none shadow-[0_30px_70px_-25px_rgba(16,27,55,0.4)] cursor-ew-resize touch-none"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onPointerUp={() => (dragging.current = false)}
            role="slider"
            aria-label="Drag to compare before and after cleaning"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight")
                setPosition((p) => Math.min(100, p + 5));
            }}
          >
            {/* After (base layer) */}
            <div className="absolute inset-0">
              <Image
                src="/images/after-kitchen.jpg"
                alt="Real client kitchen, spotless after a Unvers D. Cleaning visit"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 text-xs font-bold tracking-wide uppercase bg-teal text-linen px-3 py-1.5 rounded-full">
                After
              </span>
            </div>

            {/* Before (clipped layer, full-size image masked via clip-path so it never distorts) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/before-kitchen.jpg"
                alt="Same real client kitchen, cluttered and dusty before cleaning"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 text-xs font-bold tracking-wide uppercase bg-ink/70 text-linen px-3 py-1.5 rounded-full">
                Before
              </span>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-linen/90 shadow-[0_0_0_1px_rgba(16,27,55,0.15)]"
              style={{ left: `calc(${position}% - 2px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11 h-11 rounded-full bg-linen grid place-items-center shadow-lg text-teal-deep">
                <MoveHorizontal size={18} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
