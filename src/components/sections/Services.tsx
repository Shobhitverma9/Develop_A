"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Workflow, Cpu, Box, Cloud } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Experiences",
    icon: <Box size={24} />,
    desc: "Premium, high-performance websites engineered to convert. We build digital flagships that communicate trust instantly.",
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: <Workflow size={24} />,
    desc: "Replace repetitive manual tasks with intelligent systems. Connect your CRM, marketing, and operations.",
  },
  {
    id: "internal",
    title: "Internal Software",
    icon: <Code2 size={24} />,
    desc: "Custom portals and dashboards built for your team. Scale operations without scaling headcount.",
  },
  {
    id: "ai",
    title: "AI Integration",
    icon: <Cpu size={24} />,
    desc: "Leverage LLMs and machine learning to qualify leads, analyze data, and automate customer support.",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    icon: <Cloud size={24} />,
    desc: "Robust, scalable, and secure backend architectures using modern cloud native technologies.",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="Services" className="py-32 w-full bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-16">
          Capabilities.
        </h2>

        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 w-full">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 border border-border"
                style={{
                  backgroundColor: isActive ? "#FCFCFB" : "#f8fafc",
                }}
                animate={{
                  flex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
              >
                <div 
                  className={`absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500
                    ${isActive ? 'bg-primary text-white' : 'bg-white text-muted-foreground shadow-sm'}
                  `}
                >
                  {service.icon}
                </div>

                <motion.div 
                  className="mt-16 flex-col flex"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                >
                  <h3 className={`text-2xl font-bold whitespace-nowrap mb-2 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  
                  <div className={`transition-opacity duration-300 w-64 md:w-80 ${isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
