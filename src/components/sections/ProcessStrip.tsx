"use client";

import { motion } from "framer-motion";

const steps = [
  { num: 1, text: "Discover & Strategize" },
  { num: 2, text: "Design & Automate" },
  { num: 3, text: "Deploy & Scale" },
];

export function ProcessStrip() {
  return (
    <section className="w-full pb-16 bg-[#f7f5f2] relative overflow-hidden flex justify-center">
      <div className="max-w-[1400px] w-full px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 bg-white border border-black/10 rounded-full py-1.5 pl-1.5 pr-6 shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#ff4500] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-inner">
              {step.num}
            </div>
            <span className="text-[15px] font-semibold text-[#2d1b2e]">
              {step.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
