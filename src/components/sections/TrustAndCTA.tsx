"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/rhyme";

export function TrustAndCTA() {
  return (
    <section id="TrustAndCTA" className="w-full bg-[#fafafa] py-16 md:py-20 relative overflow-hidden font-sans border-t border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left: Graphic */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg"
            >
              <img 
                src="/humane-graphic-transparent.png" 
                alt="Humane illustration" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-[#2d1b2e]/60 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6">
                START A PROJECT
              </p>

              <h2 
                className="mt-6 mb-4 text-4xl font-bold leading-none tracking-tight text-[#2d1b2e] md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Let&rsquo;s build <br className="hidden md:block" />
                <span className="text-blue-600">something extraordinary.</span>
              </h2>

              <p className="mb-8 max-w-lg text-[15px] leading-[1.6] text-[#2d1b2e]/70">
                Ready to replace repetitive work with intelligent systems? Whether you need a high-performance web application, a scalable SaaS architecture, or custom automation workflows that save thousands of hours—we have the expertise to execute your vision. Reach out and let's engineer your next digital advantage.
              </p>

              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact'))}
                className="group inline-flex items-center gap-3 rounded-full bg-[#2d1b2e] px-8 py-4 font-bold text-white transition-transform active:scale-95 hover:bg-black shadow-[0_4px_20px_rgba(45,27,46,0.15)]"
              >
                Contact us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
