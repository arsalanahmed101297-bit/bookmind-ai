import { CtaSection } from "@/components/marketing/cta-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { Features } from "@/components/marketing/features";
import { Hero, TrustStrip } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { LanguageSection } from "@/components/marketing/language-section";
import { PrivacySection } from "@/components/marketing/privacy-section";
import { ReaderShowcase } from "@/components/marketing/reader-showcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <ReaderShowcase />
      <LanguageSection />
      <PrivacySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
