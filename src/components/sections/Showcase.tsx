"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TABS = ["Web", "Automation", "AI"];

const projects = [
  {
    id: 1,
    category: "Web",
    title: "Vedic Travel Platform",
    subtitle: "WEB APP • BUILT ON NEXT.JS",
    imageUrl: "/web-app-graphic.png",
    link: "https://vedictravel.com/",
    avatars: ["https://i.pravatar.cc/100?img=3", "https://i.pravatar.cc/100?img=4"]
  },
  {
    id: 2,
    category: "Web",
    title: "ISKCON Ghaziabad",
    subtitle: "WEBSITE • BUILT ON NEXT.JS",
    imageUrl: "/ISKCONG.png",
    link: "https://iskconghaziabad.com",
    avatars: ["https://i.pravatar.cc/100?img=1"]
  },
  {
    id: 3,
    category: "Web",
    title: "AirMBM",
    subtitle: "WEB APP • BUILT ON NEXT.JS",
    imageUrl: "/Airmbm.png",
    link: "https://airmbm.com",
    avatars: ["https://i.pravatar.cc/100?img=5", "https://i.pravatar.cc/100?img=2"]
  },
  {
    id: 4,
    category: "Automation",
    title: "Clinic System",
    subtitle: "WORKFLOW • BUILT ON MAKE.COM",
    imageUrl: "/doctor.png",
    link: "/case-studies/clinic-system",
    avatars: ["https://i.pravatar.cc/100?img=8"]
  },
  {
    id: 5,
    category: "Automation",
    title: "Replacing Zapier",
    subtitle: "CUSTOM SERVER • 10+ INTEGRATIONS",
    imageUrl: "/custom_script_workflow.jpg",
    link: "/case-studies/replacing-zapier",
    avatars: ["https://i.pravatar.cc/100?img=7", "https://i.pravatar.cc/100?img=9"]
  },
  {
    id: 6,
    category: "AI",
    title: "Intelli Whatsapp Bot",
    subtitle: "AI BOT • WHATSAPP INTEGRATION",
    imageUrl: "/intelli_whatsapp_bot.jpg",
    link: "/case-studies/intelli-whatsapp-bot",
    avatars: ["https://i.pravatar.cc/100?img=11"]
  },
  {
    id: 7,
    category: "AI",
    title: "Vedic Concierge",
    subtitle: "AI ITINERARY BUILDER • NEXT.JS",
    imageUrl: "/vedic_concierge_ui.jpg",
    link: "/case-studies/vedic-concierge",
    avatars: ["https://i.pravatar.cc/100?img=12", "https://i.pravatar.cc/100?img=13"]
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState("Web");

  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <section id="Showcase" className="w-full relative overflow-hidden bg-gradient-to-b from-[#fff6e0] to-white pt-16 pb-20 font-sans">
      
      {/* Background ambient glow matching the reference image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-[#ffecb3]/40 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <p className="text-[#2d1b2e]/60 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4">
            WORK WE'VE SHIPPED
          </p>
          <h2 
            className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#2d1b2e] mb-8"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Proof is in the pixels.
          </h2>

          {/* Clean Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/50 backdrop-blur-md border border-black/5 p-1.5 rounded-[2rem] shadow-sm max-w-full">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2d1b2e] text-white shadow-md"
                    : "text-[#2d1b2e]/60 hover:text-[#2d1b2e] hover:bg-black/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative cursor-pointer"
              >
                {/* The Light Cream Wrapper Card wrapped in an anchor tag */}
                <a 
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-[#fdfcfb] rounded-[24px] border border-black/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-3 sm:p-4 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 block"
                >
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-4 bg-gray-100 border border-black/[0.02]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Arrow (Top Right) */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2d1b2e] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="flex flex-col flex-1 justify-between px-2 pb-2">
                    
                    {/* Title and Avatars Row */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[#2d1b2e] leading-tight">
                        {project.title}
                      </h3>
                      
                      {/* Avatar Stack */}
                      <div className="flex -space-x-2 shrink-0 ml-4">
                        {project.avatars.map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            alt="Contributor"
                            className="w-7 h-7 rounded-full border-2 border-[#fdfcfb] bg-gray-200 object-cover"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Subtitle / Tech Stack */}
                    <div className="border-t border-black/[0.04] pt-4 mt-auto">
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#2d1b2e]/40 uppercase">
                        {project.subtitle}
                      </p>
                    </div>

                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#2d1b2e]/40 text-sm tracking-wider uppercase font-semibold">
            Coming soon
          </div>
        )}

      </div>
    </section>
  );
}
