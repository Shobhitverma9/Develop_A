"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Bell, FileText, Globe } from "lucide-react";

export function HeroChaos() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Fade out chaos elements as we scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const cards = [
    {
      icon: <Bell size={16} className="text-accent" />,
      text: "Missed lead notification",
      x: "-20vw",
      y: "-15vh",
      rotate: -12,
    },
    {
      icon: <MessageSquare size={16} className="text-primary" />,
      text: "WhatsApp unread",
      x: "15vw",
      y: "-20vh",
      rotate: 8,
    },
    {
      icon: <FileText size={16} className="text-muted-foreground" />,
      text: "Invoice pending",
      x: "-25vw",
      y: "15vh",
      rotate: -5,
    },
    {
      icon: <Globe size={16} className="text-foreground" />,
      text: "Website downtime",
      x: "20vw",
      y: "10vh",
      rotate: 15,
    },
  ];

  return (
    <section
      ref={container}
      id="HeroChaos"
      className="relative min-h-[150vh] w-full flex flex-col items-center justify-start pt-[30vh]"
    >
      <motion.div
        className="sticky top-[35vh] flex flex-col items-center z-10 w-full max-w-4xl px-6 text-center"
        style={{ opacity, y }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Growing your business <br />
          <span className="text-muted-foreground">shouldn't feel chaotic.</span>
        </motion.h1>
      </motion.div>

      {/* Floating Chaos UI Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div style={{ opacity }} className="w-full h-full relative scale-50 sm:scale-75 md:scale-100 origin-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 bg-white/80 backdrop-blur-md border border-border rounded-xl p-4 shadow-sm flex items-center gap-3 text-sm font-medium text-foreground whitespace-nowrap"
              initial={{
                x: card.x,
                y: card.y,
                rotate: card.rotate,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: [card.y, `calc(${card.y} - 20px)`, card.y],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5 + i * 0.1 },
                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {card.icon}
              {card.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
