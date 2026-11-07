import HeroSection from "@/components/sections/HeroSection";
import BotOfferSection from "@/components/sections/BotOfferSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";
import {
  AboutSection,
  FAQSection,
  TariffsSection,
  TestimonialsSection,
} from "@/components/sections/AdditionalSections";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main className="scroll-smooth motion-reduce:scroll-auto paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
        <HeroSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <BotOfferSection />
        <PricingSection />
        <TariffsSection />
      </main>
      <Footer />
    </>
  );
}
