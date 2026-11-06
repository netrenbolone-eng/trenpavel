import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";

export default function Page() {
  return (
    <main className="scroll-smooth motion-reduce:scroll-auto paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <HeroSection />
      <ProcessSection />
      <PricingSection />
    </main>
  );
}
