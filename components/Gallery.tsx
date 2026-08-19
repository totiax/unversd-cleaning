"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";
import CoverflowCarousel from "./CoverflowCarousel";

const photos = [
  {
    src: "/images/gallery-bathroom-purple.jpg",
    alt: "Real client bathroom, spotless after a Unvers D. Cleaning visit",
    span: "md:row-span-2",
  },
  {
    src: "/images/gallery-bathroom-tile.jpg",
    alt: "Real client bathroom with black and white tile, freshly cleaned",
    span: "",
  },
  {
    src: "/images/gallery-kitchen-backsplash.jpg",
    alt: "Real client kitchen with tile backsplash, freshly cleaned",
    span: "",
  },
  {
    src: "/images/gallery-kitchen-island.jpg",
    alt: "Real client kitchen island, spotless after a Unvers D. Cleaning visit",
    span: "md:col-span-2",
  },
];

const morePhotos = [
  {
    src: "/images/gallery-kitchen-bright.jpg",
    alt: "Real client kitchen, bright and spotless after cleaning",
  },
  {
    src: "/images/gallery-kitchen-dark-island.jpg",
    alt: "Real client kitchen with dark wood island, freshly cleaned",
  },
  {
    src: "/images/gallery-kitchen-stainless.jpg",
    alt: "Real client kitchen with stainless appliances, freshly cleaned",
  },
  {
    src: "/images/gallery-kitchen-galley.jpg",
    alt: "Real client galley kitchen and dining nook, freshly cleaned",
  },
];

const allPhotos = [...photos, ...morePhotos];

function coverflowSizingFor(width: number) {
  if (width < 640) {
    return { activeWidth: 260, activeHeight: 320, restWidth: 40, restHeight: 56, gap: 8 };
  }
  if (width < 1024) {
    return { activeWidth: 480, activeHeight: 380, restWidth: 100, restHeight: 140, gap: 16 };
  }
  return { activeWidth: 640, activeHeight: 440, restWidth: 150, restHeight: 200, gap: 24 };
}

function useCoverflowSizing() {
  const [size, setSize] = useState(() =>
    coverflowSizingFor(typeof window !== "undefined" ? window.innerWidth : 1200)
  );
  useEffect(() => {
    const onResize = () => setSize(coverflowSizingFor(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

export default function Gallery() {
  const sectionRef = useBackdropSection<HTMLElement>("#E7EFEC");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const coverflowSize = useCoverflowSizing();

  const close = () => setOpenIndex(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow mb-4">A Little Peek</p>
          <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08] text-teal-deep">
            The kind of clean
            <br />
            <span className="italic font-normal">you can feel.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 md:grid-rows-[16rem_16rem] gap-4 md:gap-5">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 0.08}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full ${p.span}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${p.alt}`}
                className="group relative block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-linen/0 text-linen opacity-0 group-hover:opacity-100 group-hover:bg-linen/20 backdrop-blur-sm transition-all duration-300">
                  <Expand size={16} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 md:mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {morePhotos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 0.06}
              className="relative rounded-2xl overflow-hidden aspect-square"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(photos.length + i)}
                aria-label={`Open photo: ${p.alt}`}
                className="group relative block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-linen/0 text-linen opacity-0 group-hover:opacity-100 group-hover:bg-linen/20 backdrop-blur-sm transition-all duration-300">
                  <Expand size={16} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-teal-deep/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-linen/10 text-linen hover:bg-linen/20 transition-colors"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[60vh] md:h-[65vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <CoverflowCarousel
                images={allPhotos}
                initialIndex={openIndex}
                activeWidth={coverflowSize.activeWidth}
                activeHeight={coverflowSize.activeHeight}
                restWidth={coverflowSize.restWidth}
                restHeight={coverflowSize.restHeight}
                gap={coverflowSize.gap}
                radius={10}
                showArrows
                arrowColor="#FAF6F0"
                arrowBackground="rgba(250,246,240,0.15)"
                arrowSize={44}
                arrowPosition={92}
                autoplay={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
