import type { Metadata } from "next";
import { Fraunces, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unvers D. Cleaning | House & Office Cleaning in Orem, UT",
  description:
    "Family-run house, apartment and office cleaning in Orem, Provo, Springville, American Fork & Lindon, Utah. Trusted by local families for 4+ years. Call or text (385) 888-0341.",
  keywords: [
    "house cleaning Orem Utah",
    "cleaning service Utah County",
    "move-out cleaning Orem",
    "office cleaning Provo",
  ],
  openGraph: {
    title: "Unvers D. Cleaning | Orem, UT",
    description:
      "Family-run house, apartment and office cleaning across Utah County. 4+ years trusted by local families.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${caveat.variable} font-body antialiased bg-linen text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
