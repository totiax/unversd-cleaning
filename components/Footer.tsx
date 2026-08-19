import Image from "next/image";
import { Facebook } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-linen/70 py-12">
      <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="inline-flex bg-linen rounded-full p-2.5">
            <Image
              src="/images/logo.png"
              alt="Unvers D. Cleaning"
              width={700}
              height={305}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-3 text-sm max-w-xs leading-relaxed">
            Family-run house, apartment &amp; office cleaning across Orem and
            Utah County.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href="tel:+13858880341" className="hover:text-aqua transition-colors">
            (385) 888-0341
          </a>
          <a
            href="https://wa.me/13858880341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-aqua transition-colors"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571501534046"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-aqua transition-colors"
          >
            <Facebook size={15} />
            Follow on Facebook
          </a>
        </div>

        <p className="text-xs text-linen/40">
          &copy; {new Date().getFullYear()} Unvers D. Cleaning. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
