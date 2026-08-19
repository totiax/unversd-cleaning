import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import { BackdropProvider } from "@/components/ScrollBackdrop";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <BackdropProvider>
        <Navbar />
        <Hero />
        <BeforeAfter />
        <Services />
        <ServiceArea />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
        <StickyCall />
      </BackdropProvider>
    </main>
  );
}
