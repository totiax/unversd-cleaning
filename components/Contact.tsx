"use client";

import { Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { useBackdropSection } from "./ScrollBackdrop";
import WhatsAppIcon from "./WhatsAppIcon";

const contactMethods = [
  {
    href: "tel:+13858880341",
    icon: Phone,
    label: "Call",
    detail: "(385) 888-0341",
  },
  {
    href: "sms:+13858880341",
    icon: MessageCircle,
    label: "Text",
    detail: "(385) 888-0341",
  },
  {
    href: "https://wa.me/13858880341",
    icon: WhatsAppIcon,
    label: "WhatsApp",
    detail: "(385) 888-0341",
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useBackdropSection<HTMLElement>("#101B37");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-teal-deep text-linen"
    >
      <div className="container-page">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-4 !text-aqua">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-[3.2rem] leading-[1.08]">
            Let&apos;s get your
            <br />
            <span className="italic font-normal">space spotless.</span>
          </h2>
          <p className="mt-6 text-linen/70 leading-relaxed max-w-sm mx-auto">
            Call, text, or WhatsApp &mdash; whichever&apos;s easiest for you.
            Fastest way to get a quote and lock in a time.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-12 grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
        >
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center gap-3 bg-linen/5 hover:bg-linen/10 border border-linen/10 hover:border-linen/20 rounded-2xl p-7 transition-colors"
            >
              <span className="grid place-items-center w-14 h-14 rounded-full bg-linen/10 text-aqua group-hover:bg-aqua/20 transition-colors">
                <m.icon size={22} />
              </span>
              <span className="font-bold text-lg">{m.label}</span>
              <span className="text-sm text-linen/60">{m.detail}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
