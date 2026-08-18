"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroChaos() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Fade out chaos elements as we scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);



  return (
    <section
      ref={container}
      id="HeroChaos"
      className="relative min-h-[125vh] w-full flex flex-col items-center justify-start pt-[15vh] pb-16"
    >
      <motion.div
        className="sticky top-24 flex flex-col items-center z-10 w-full max-w-4xl px-6 text-center"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80 backdrop-blur-sm">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            Trusted by 50+ businesses
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            Growing your business <br className="hidden sm:block" />
            <span className="text-muted-foreground">shouldn't feel chaotic.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            We engineer high-performance web applications and automated workflows that scale with your agency.
          </p>

          <button className="min-h-[44px] bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center transition-transform active:scale-95 text-lg shadow-lg shadow-primary/20 mb-16">
            Book a Demo
          </button>

          {/* Logo Strip (Moved under CTA) */}
          <div className="w-full pt-6 border-t border-border/60">
            <p className="text-center text-sm text-muted-foreground font-medium mb-6 uppercase tracking-wider">
              Opted by growing brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 transition-opacity duration-500 *:opacity-60 hover:*:opacity-100 *:grayscale *:mix-blend-multiply dark:*:invert dark:*:mix-blend-screen">
              <div className="w-[80px] h-[32px] md:w-[120px] md:h-[40px] flex items-center justify-center">
                <img src="/OIP (3).jpg" alt="ISKCON" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-[80px] h-[32px] md:w-[120px] md:h-[40px] flex items-center justify-center">
                <img src="/Travergetic-Final-Logo-Original.png" alt="Travergetic" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-[80px] h-[32px] md:w-[120px] md:h-[40px] flex items-center justify-center">
                <img src="/ambm-logo.png" alt="AirMBM" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-[80px] h-[32px] md:w-[120px] md:h-[40px] flex items-center justify-center">
                <img src="/vt-logo-retina-black.png" alt="Vedic Travel" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-[80px] h-[32px] md:w-[120px] md:h-[40px] flex items-center justify-center">
                <img src="/delta-sports-company-120x120.png" alt="Delta Sports" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
