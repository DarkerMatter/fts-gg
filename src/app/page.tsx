import { AdvantageSection } from "@/components/marketing/advantage";
import { CapabilitiesSection } from "@/components/marketing/capabilities";
import { ContactSection } from "@/components/marketing/contact-cta";
import { FounderSection } from "@/components/marketing/founder";
import { HeroSection } from "@/components/marketing/hero";
import { MissionSection } from "@/components/marketing/mission";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <CapabilitiesSection />
        <AdvantageSection />
        <FounderSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
