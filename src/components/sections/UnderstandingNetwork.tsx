"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Monitor, MessageCircle, CreditCard, BarChart, Package, Calendar } from "lucide-react";

export function UnderstandingNetwork() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);

  const nodes = [
    { label: "Website", icon: <Monitor size={24} />, x: "0%", y: "-35%" },
    { label: "CRM", icon: <Database size={24} />, x: "-25%", y: "-15%" },
    { label: "WhatsApp", icon: <MessageCircle size={24} />, x: "25%", y: "-15%" },
    { label: "Payments", icon: <CreditCard size={24} />, x: "-35%", y: "15%" },
    { label: "Analytics", icon: <BarChart size={24} />, x: "35%", y: "15%" },
    { label: "Inventory", icon: <Package size={24} />, x: "-15%", y: "35%" },
    { label: "Appointments", icon: <Calendar size={24} />, x: "15%", y: "35%" },
  ];

  return (
    <section
      ref={container}
      id="UnderstandingNetwork"
      className="relative min-h-[150vh] w-full flex flex-col items-center justify-center pt-24"
    >
      <motion.div
        className="sticky top-[30vh] w-full max-w-5xl flex flex-col items-center z-10 px-6 h-[60vh]"
        style={{ opacity, scale }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 max-w-2xl text-foreground">
          Every successful business runs on <span className="text-primary">connected systems.</span>
        </h2>

        <div className="relative w-full flex-1 flex items-center justify-center pointer-events-none mt-8">
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center justify-center gap-2 pointer-events-auto group cursor-pointer"
              style={{
                left: `calc(50% + ${node.x})`,
                top: `calc(50% + ${node.y})`,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {node.icon}
              </div>
              <span className="text-sm font-semibold text-foreground/80">{node.label}</span>
            </motion.div>
          ))}
          
          {/* Central Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{ x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <div className="w-24 h-24 rounded-full bg-primary shadow-xl shadow-primary/20 flex items-center justify-center text-white relative z-10">
              <span className="font-bold text-lg">HUB</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
