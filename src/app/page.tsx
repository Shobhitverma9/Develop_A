import { HeroChaos } from "@/components/sections/HeroChaos";
import { Engineering } from "@/components/sections/Engineering";
import { Showcase } from "@/components/sections/Showcase";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustAndCTA } from "@/components/sections/TrustAndCTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SceneManager } from "@/components/SceneManager";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Global 3D Canvas Context */}
      <SceneManager />

      {/* Story Sections */}
      <div className="relative z-10 w-full flex flex-col">
        <HeroChaos />
        <FeatureBento />
        {/* <Engineering /> */}
        <Showcase />
        <Services />
        <Testimonials />
        <TrustAndCTA />
      </div>

      <Footer />
    </main>
  );
}
