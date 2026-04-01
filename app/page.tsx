import { GeoDefinitionSection } from "@/sections/geo-definition-section";
import { HeroSection } from "@/sections/hero-section";
import { InvestorSection } from "@/sections/investor-section";
import { PlatformPreviewSection } from "@/sections/platform-preview-section";
import { ProductDashboardSection } from "@/sections/product-dashboard-section";
import { QueryAnalysisSection } from "@/sections/query-analysis-section";
import { RoadmapSection } from "@/sections/roadmap-section";
import { ShiftSection } from "@/sections/shift-section";
import { SignupSection } from "@/sections/signup-section";
import { WhySection } from "@/sections/why-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ShiftSection />
      <GeoDefinitionSection />
      <PlatformPreviewSection />
      <QueryAnalysisSection />
      <ProductDashboardSection />
      <RoadmapSection />
      <WhySection />
      <SignupSection />
      <InvestorSection />
    </main>
  );
}
