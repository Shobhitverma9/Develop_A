"use client";

import { motion } from "framer-motion";

export function HeroChaos() {
  return (
    <section id="HeroChaos" className="relative w-full min-h-[90vh] bg-[#070707] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Background Graphic */}
      <div className="absolute inset-y-0 right-0 z-0 flex items-center justify-end w-full md:w-[60%] lg:w-[50%] opacity-90 mix-blend-screen pointer-events-none pr-0 lg:pr-12">
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero-abstract.jpg" 
          alt="Abstract 3D Shape" 
          className="w-[120%] md:w-full h-[70vh] md:h-[90vh] lg:h-screen object-contain object-right md:object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between flex-1">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl pt-8 md:pt-16 lg:pt-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            We mould ideas into <br className="hidden sm:block" />
            <span className="text-[#3b82f6]">intelligent</span> <br className="hidden sm:block" />
            experiences.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/60 max-w-md mb-8 leading-relaxed font-light"
          >
            A design and automation studio building digital products, brands and systems that scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact'))}
              className="bg-[#ff4500] hover:bg-[#e63e00] text-white font-medium text-sm px-6 py-3 rounded-full transition-all active:scale-95 flex items-center gap-2"
            >
              Demo 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
            <a href="#FeatureBento" className="text-white hover:text-white/80 font-medium text-sm px-4 py-3 flex items-center gap-2 transition-colors group">
              Our Services 
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Floating Strategy Text (Right Side) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-6 bottom-16 md:bottom-24 max-w-[340px] hidden lg:block pl-5 pr-3 py-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-4 text-white text-sm font-medium mb-3">
            <span>Design</span>
            <span className="w-2 h-2 rounded-full bg-[#ff4500] block flex-shrink-0" />
            <span>Automation</span>
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] block flex-shrink-0" />
            <span>Strategy</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">
            We help ambitious businesses streamline operations, elevate their brand, and build digital products that make impact.
          </p>
        </motion.div>

        {/* Footer Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0"
        >
          {/* Logos */}
          <div>
            <p className="text-xs text-white/40 mb-6">Trusted by forward-thinking teams</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-60 *:brightness-0 *:invert hover:*:opacity-100 *:transition-opacity">
              <img src="/Igzblogo.webp" alt="ISKCON Logo" className="h-10 md:h-12 w-auto object-contain" />
              <img src="/Travergetic-Final-Logo-Original.png" alt="Logo 2" className="h-5 md:h-6 w-auto object-contain" />
              <img src="/ambm-logo.png" alt="Logo 3" className="h-5 md:h-6 w-auto object-contain" />
              <img src="/vt-logo-retina-black.png" alt="Logo 4" className="h-5 md:h-6 w-auto object-contain" />
            </div>
          </div>

          {/* Scroll Down */}
          <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
