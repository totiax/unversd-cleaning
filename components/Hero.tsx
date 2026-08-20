"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useBackdropSection } from "./ScrollBackdrop";

const stats = [
  { value: "4+", label: "Years serving Utah County" },
  { value: "5", label: "Cities covered" },
  { value: "1:1", label: "You get Rosa, not a crew of strangers" },
];

const heroPhotos = [
  {
    src: "/images/hero-bathroom.jpg",
    alt: "Spotless bathroom vanity after a real Unvers D. Cleaning visit",
  },
  {
    src: "/images/hero-kitchen.jpg",
    alt: "Bright, spotless kitchen after a real Unvers D. Cleaning visit",
  },
  {
    src: "/images/hero-vanity.jpg",
    alt: "Sparkling double vanity after a real Unvers D. Cleaning visit",
  },
];

export default function Hero() {
  const sectionRef = useBackdropSection<HTMLElement>("#FAF6F0");

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroPhotos.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient bubble accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[8%] w-3 h-3 rounded-full bg-aqua shadow-[0_0_0_1px_rgba(10,46,61,0.08)] animate-drip"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-[14%] w-2 h-2 rounded-full bg-amber shadow-[0_0_0_1px_rgba(10,46,61,0.08)] animate-drip"
        style={{ animationDelay: "0.6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[22%] w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_0_1px_rgba(10,46,61,0.08)] animate-drip"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="container-page grid grid-cols-1 lg:grid-cols-[0.95fr,1.15fr] lg:grid-rows-2 gap-y-10 gap-x-12 lg:gap-x-10 items-center">
        {/* Heading — overlaid on the photo on mobile, normal position on desktop */}
        <div className="relative z-10 col-start-1 row-start-1 self-start lg:self-auto pointer-events-none lg:col-start-1 lg:row-start-1 p-6 pt-3 lg:p-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-2 !text-linen/90 drop-shadow-md lg:!text-teal lg:drop-shadow-none"
          >
            Family-Run &middot; Orem, Utah &amp; Utah County
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl leading-[1.15] min-[340px]:text-[2.75rem] min-[340px]:leading-[1.05] sm:text-6xl md:text-[4.2rem] text-linen drop-shadow-md lg:text-teal-deep lg:drop-shadow-none"
          >
            A spotless home,
            <br />
            <span className="italic font-normal">without lifting</span>{" "}
            a finger.
          </motion.h1>
        </div>

        {/* Photo + personal note (shares the same cell as the heading on mobile, right column on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative col-start-1 row-start-1 mb-14 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(16,27,55,0.35)] aspect-[4/5] md:aspect-[4/4.6]">
            <AnimatePresence>
              <motion.div
                key={heroPhotos[slide].src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroPhotos[slide].src}
                  alt={heroPhotos[slide].alt}
                  fill
                  priority={slide === 0}
                  sizes="(max-width: 1024px) 90vw, 55vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/25 via-transparent to-transparent" />
            <div className="lg:hidden absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-teal-deep/70 via-teal-deep/25 to-transparent" />
          </div>

          {/* Rosa's personal note */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -left-6 md:-left-10 bg-linen rounded-2xl shadow-xl p-4 pr-5 max-w-[240px] border border-teal/10"
          >
            <div className="flex items-start gap-3">
              <span className="shrink-0 grid place-items-center w-11 h-11 rounded-full bg-teal text-linen font-display text-lg">
                R
              </span>
              <p className="font-hand text-xl leading-tight text-teal-deep">
                Hi, I&apos;m Rosa &mdash; I personally clean every home myself.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Paragraph, CTAs & stats (comes last on mobile) */}
        <div className="lg:col-start-1 lg:row-start-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-ink/70 max-w-md leading-relaxed"
          >
            Professional house, apartment &amp; office cleaning in Orem, Utah
            &amp; surrounding areas &mdash; trusted by local families for over
            four years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:+13858880341"
              className="inline-flex items-center gap-2 rounded-full bg-amber text-teal-deep px-6 py-3.5 font-bold text-sm hover:bg-amber-dark hover:text-linen transition-colors shadow-[0_10px_30px_-10px_rgba(232,163,61,0.6)]"
            >
              <Phone size={17} />
              Call or Text (385) 888-0341
            </a>
            <a
              href="#transformation"
              className="inline-flex items-center gap-2 text-teal-deep font-bold text-sm border-b-2 border-teal-deep/30 pb-1 hover:border-teal-deep transition-colors"
            >
              See the difference
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-teal">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink/55 leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
