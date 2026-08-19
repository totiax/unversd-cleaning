"use client";

import { Phone } from "lucide-react";

export default function StickyCall() {
  return (
    <a
      href="tel:+13858880341"
      className="lg:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-amber text-teal-deep font-bold text-sm px-5 py-3.5 shadow-[0_10px_30px_-8px_rgba(232,163,61,0.7)]"
      aria-label="Call Unvers D. Cleaning"
    >
      <Phone size={16} />
      Call
    </a>
  );
}
