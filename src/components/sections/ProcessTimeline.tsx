"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phases = [
  { title: "Discover", desc: "We map your entire business workflow to identify bottlenecks." },
  { title: "Design", desc: "Architecture and interface design with a focus on conversion and scale." },
  { title: "Build", desc: "Engineering the systems using modern, performant technologies." },
  { title: "Launch", desc: "Seamless deployment, testing, and team onboarding." },
  { title: "Scale", desc: "Continuous optimization and infrastructure scaling." },
];

export function ProcessTimeline() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={container} id="ProcessTimeline" className="py-32 w-full bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-24 text-foreground">
          How we <span className="text-primary">engineer success.</span>
        </h2>

        <div className="relative">
          {/* Animated background line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-1 bg-border rounded-full" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[23px] top-0 bottom-0 w-1 bg-primary rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-16">
            {phases.map((phase, i) => (
              <TimelineItem key={i} phase={phase} index={i} scrollYProgress={scrollYProgress} total={phases.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ phase, index, scrollYProgress, total }: any) {
  // Calculate when this specific item should be active based on scroll
  const start = index / total;
  const isActive = useTransform(scrollYProgress, (v: number) => v > start - 0.1);
  
  return (
    <div className="relative pl-16">
      {/* Node dot */}
      <motion.div 
        className="absolute left-[16px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10"
        style={{
          backgroundColor: isActive.get() ? "#0F62FE" : "#e2e8f0"
        }}
        animate={{
          scale: isActive.get() ? 1.2 : 1,
          backgroundColor: isActive.get() ? "#0F62FE" : "#e2e8f0"
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-foreground">{phase.title}</h3>
        <p className="text-muted-foreground text-lg max-w-md">{phase.desc}</p>
      </motion.div>
    </div>
  );
}
