import { HeroChaos } from "@/components/sections/HeroChaos";
import { UnderstandingNetwork } from "@/components/sections/UnderstandingNetwork";
import { Engineering } from "@/components/sections/Engineering";
import { Showcase } from "@/components/sections/Showcase";
import { AutomationWorkflow } from "@/components/sections/AutomationWorkflow";
import { Services } from "@/components/sections/Services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustAndCTA } from "@/components/sections/TrustAndCTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SceneManager } from "@/components/SceneManager";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navigation />
      
      {/* Global 3D Canvas Context */}
      <SceneManager />

      {/* Story Sections */}
      <div className="relative z-10 w-full flex flex-col">
        <HeroChaos />
        <UnderstandingNetwork />
        <Engineering />
        <Showcase />
        <AutomationWorkflow />
        <Services />
        <ProcessTimeline />
        <Testimonials />
        <TrustAndCTA />
      </div>

      <Footer />
    </main>
  );
}
