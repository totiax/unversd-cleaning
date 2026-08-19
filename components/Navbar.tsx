"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#transformation" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linen/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,54,137,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <a href="#top" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Unvers D. Cleaning"
            width={700}
            height={305}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 hover:text-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="tel:+13858880341"
            className="inline-flex items-center gap-2 rounded-full bg-teal text-linen px-5 py-2.5 text-sm font-bold hover:bg-teal-dark transition-colors shadow-sm"
          >
            <Phone size={16} />
            (385) 888-0341
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-teal-deep"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-linen border-t border-teal/10">
          <div className="container-page py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+13858880341"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal text-linen px-5 py-3 text-sm font-bold"
            >
              <Phone size={16} />
              Call or Text (385) 888-0341
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
