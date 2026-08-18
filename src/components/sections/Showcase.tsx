"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ISKCON Global Platform",
    category: "Web Experience",
    metric: "2M+ Monthly Users",
    color: "bg-[#0F62FE]",
    yOffset: [0, -100]
  },
  {
    title: "HealthConnect Portal",
    category: "Doctor Portal",
    metric: "40% Time Saved",
    color: "bg-[#111111]",
    yOffset: [50, -150]
  },
  {
    title: "OpsFlow Automation",
    category: "Business Automation",
    metric: "10x ROI",
    color: "bg-[#F59E0B]",
    yOffset: [100, -50]
  },
  {
    title: "EventCore Registration",
    category: "High-load System",
    metric: "50k+ Concurrent",
    color: "bg-slate-800",
    yOffset: [20, -120]
  }
];

export function Showcase() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={container}
      id="Showcase"
      className="relative min-h-[150vh] w-full pt-16 pb-32 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 z-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Outcomes, <br />
          <span className="text-muted-foreground">not just interfaces.</span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-12">
        {projects.map((project, i) => (
          <ShowcaseCard 
            key={i} 
            project={project} 
            index={i} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>
    </section>
  );
}

function ShowcaseCard({ project, index, scrollYProgress }: any) {
  const y = useTransform(scrollYProgress, [0, 1], project.yOffset);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      style={{ y: isMobile ? 0 : y as any }}
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group ${project.color} shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Mock Browser UI */}
      <div className="absolute inset-x-0 top-0 h-10 bg-black/10 backdrop-blur-md flex items-center px-4 gap-2 z-10">
        <div className="w-3 h-3 rounded-full bg-white/30" />
        <div className="w-3 h-3 rounded-full bg-white/30" />
        <div className="w-3 h-3 rounded-full bg-white/30" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white pt-16 z-10">
        <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-80">{project.category}</p>
        <div className="flex justify-between items-end">
          <h3 className="text-3xl font-bold leading-tight max-w-[70%]">{project.title}</h3>
          
          <motion.div
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
            animate={{ 
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.1 : 1
            }}
          >
            <ArrowUpRight />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 flex gap-4 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
            <p className="text-xs uppercase tracking-wider opacity-70">Key Result</p>
            <p className="text-xl font-bold mt-1">{project.metric}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
            <p className="text-xs uppercase tracking-wider opacity-70">Architecture</p>
            <p className="text-sm font-semibold mt-1">Next.js + Node microservices</p>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract project visuals - placeholder for screenshots */}
      <motion.div 
        className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}
