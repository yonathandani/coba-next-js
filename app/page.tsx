import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
